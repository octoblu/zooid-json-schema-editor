import React from 'react';
import { storiesOf, action } from '@kadira/storybook'

import JsonSchemaEditor from '../src'

storiesOf('JsonSchemaEditor', module)
  .add('Basic', () => {
    const schema = {
      type: 'object',
      required: ['foo'],
      properties: {
        foo: {
          type: 'string'
        }
      }
    }
    const form = ['*']
    let model = {};

    return (
      <JsonSchemaEditor schema={schema} form={form} model={model} onSubmit={action('onSubmit')} />
    )
  });


storiesOf('JsonSchemaEditor', module)
  .add('Advanced', () => {
    const schema = {
      type: "object",
      required: [
        "metadata",
        "data"
      ],
      properties: {
        data: {
          type: "object",
          required: [
            "username"
          ],
          properties: {
            username: {
              type: "string",
              title: "Username",
              description: "Github username or organization name"
            }
          }
        },
        metadata: {
          type: "object",
          required: [
            "jobType"
          ],
          properties: {
            jobType: {
              type: "string",
              enum: [
                "ListEventsByUser"
              ],
              default: "ListEventsByUser"
            },
            respondTo: { }
          }
        }
      }
    }
    const form = ['data.username']
    let model = {
      metadata: {
        jobType: 'ListEventsByUser'
      },
      data: {
        username: 'Mr. Robot'
      }
    };

    return (
      <JsonSchemaEditor schema={schema} form={form} model={model} onSubmit={action('onSubmit')} />
    )
  });
