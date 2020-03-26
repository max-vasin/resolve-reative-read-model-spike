export const dispatch = async (store, name, viewProjection, id, handler, payload) => {
  console.log(name)
  console.log(viewProjection)
  console.log(id)
  console.log(handler)
  console.log(payload)

  const entry = await store.findOne(`${name}-views`, { id })

  let view
  if (!entry) {
    view = viewProjection.Init()
    await store.insert(`${name}-views`, { id, view })
  } else {
    view = entry.view
  }

  const updatedView = viewProjection[handler](view, payload)

  await store.update(
    `${name}-views`,
    { id },
    {
      $set: { view: updatedView }
    }
  )

  // TODO: push to socket!
}

export const initDispatcher = async (store, name) => {
  await store.defineTable(`${name}-views`, {
    indexes: { id: 'string' },
    fields: ['view']
  })
}
