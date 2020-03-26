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
    /*
    {
      name: 'rrm-emulator-chat',
      source: 'common/sagas/chat-rrm.saga.js',
      connectorName: 'default',
      schedulerName: 'scheduler'
    },
    */
    {
      name: 'rrm-emulator-chat-list',
      source: 'common/sagas/chat-list-rrm.saga.js',
      connectorName: 'default',
      schedulerName: 'scheduler'
    }
  ],
  apiHandlers: [
    {
      path: '/api/rrm/chat-list',
      controller: 'common/api-handlers/chat-list-view.js',
      method: 'GET'
    }
  ],
  readModels: [
    {
      name: 'chat-list-stub',
      projection: 'common/read-models/chat-list-stub.projection.js',
      resolvers: 'common/read-models/chat-list-stub.resolvers.js',
      connectorName: 'default'
    }
  ],

  /*
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
