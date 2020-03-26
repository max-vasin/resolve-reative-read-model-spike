const chatListView = async (req, res) => {
  const { executeSaga } = req.resolve

  console.log(req.resolve)

  await executeSaga.read({
    modelName: 'rrm-emulator-chat-list',
    resolver: 'view'
  })

  /*
  const


  try {
    const token = await adapter.createToken({
      dir: 'logo',
      expireTime: 10000000
    })

    res.end(token)
  } catch (error) {
    await res.status(405)
    await res.end(error)
  }
   */
}

export default chatListView
