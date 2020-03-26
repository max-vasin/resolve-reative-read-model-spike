import axios from 'axios'
import { port } from '../../retranslator/constants'

export const dispatch = async (store, name, viewProjection, id, handler, payload) => {
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

  const reTranslator = `http://localhost:${port}`

  await axios.post(`${reTranslator}`, {
    model: name,
    id,
    handler,
    payload
  })
}

export const initDispatcher = async (store, name) => {
  await store.defineTable(`${name}-views`, {
    indexes: { id: 'string' },
    fields: ['view']
  })
}
