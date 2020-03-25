const appConfig = {
  aggregates: [
    {
      name: 'chat',
      commands: 'common/aggregates/chat.commands.js',
      projection: 'common/aggregates/chat.projection.js'
    },
    {
      name: 'message',
      commands: 'common/aggregates/message.commands.js',
      projection: 'common/aggregates/message.projection.js'
    },
    {
      name: 'user',
      commands: 'common/aggregates/user.commands.js',
      projection: 'common/aggregates/user.projection.js'
    }
  ],
  sagas: [
    {
      name: 'reactive-read-model-emulator',
      source: 'common/sagas/reactive-read-model.saga.js',
      connectorName: 'default',
      schedulerName: 'scheduler'
    }
  ],
  /*
  readModels: [
    {
      name: 'read-model-name',
      projection: 'common/read-models/read-model-name.projection.js',
      resolvers: 'common/read-models/read-model-name.resolvers.js',
      connectorName: 'default'
    }
  ],

  viewModels: [
    {
      name: 'view-model-name',
      projection: 'common/view-models/view-model-name.projection.js',
      serializeState: 'common/view-models/view-model-name.serialize_state.js',
      deserializeState:
        'common/view-models/view-model-name.deserialize_state.js'
    }
  ],
  */
  clientEntries: ['client/index.js']
}

export default appConfig
