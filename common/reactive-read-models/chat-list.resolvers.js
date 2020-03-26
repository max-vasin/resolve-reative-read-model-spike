const getView = async (store, { chat }) =>
  store.findOne('views', {
    scope: chat
  })

export default {
  getView
}
