import App from './components/App'
import ChatList from './components/ChatList'

export default [
  {
    component: App,
    routes: [
      {
        path: '/',
        component: ChatList,
        exact: true
      },
      /*
      {
        path: '/:id',
        component: ShoppingList
      }
      */
    ]
  }
]
