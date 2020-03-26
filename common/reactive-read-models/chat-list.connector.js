export default (store, id, jwt) => {
  console.log(jwt)
  if (id !== 'all') {
    throw Error('unexpected view identifier')
  }
}
