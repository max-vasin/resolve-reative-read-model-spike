export const dispatch = async (store, viewProjection, id, name, payload) => {
  let { view } = await store.findOne('views', { id })
  if (!view) {
    view = viewProjection.Init()
  }

  const updatedView = viewProjection[name](view, payload)

  await store.update('views', { id, view: updatedView })

  // TODO: push to socket!
}
