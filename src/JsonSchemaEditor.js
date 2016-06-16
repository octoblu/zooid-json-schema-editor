import classNames from 'classnames'
import React from 'react'

import {SchemaForm, utils} from 'react-schema-form'
import Button from 'zooid-button'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

import styles from './JsonSchemaEditor.css'

const THEME_OVERRIDES = {
  palette: {
    primary1Color: '#14568f'
  }
}

class JsonSchemaEditor extends React.Component {
  static propTypes = {
    schema: React.PropTypes.object.isRequired,
    form: React.PropTypes.array,
    model: React.PropTypes.object,
    onSubmit: React.PropTypes.func
  }

  state = {
    muiTheme: getMuiTheme(THEME_OVERRIDES)
  }

  componentWillMount = () => {
    this.state.model = this.props.model
  }

  onChange = (key, value) => {
    const newModel = this.state.model
    utils.selectOrSet(key, newModel, value)
    this.setState({ model: newModel })
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.model)
  }

  render = () => {
    const {model, muiTheme} = this.state
    const {schema, form} = this.props

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <form onSubmit={this.onSubmit}>
          <SchemaForm schema={schema} form={form} model={model} onModelChange={this.onChange}></SchemaForm>
          <div className={styles.alignRight}>
            <Button kind="primary" size="large" onClick={this.onSubmit} >Submit</Button>
          </div>
        </form>
      </MuiThemeProvider>
    )
  }
}

export default JsonSchemaEditor
