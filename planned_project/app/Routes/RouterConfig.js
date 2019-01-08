import TabBarRouter from './TabBarRouter'
import Registry from '../View/My/Registry/Registry'
export default {
  TabBar: {
    screen: TabBarRouter,
    navigationOptions: () => ({
      header: null
    })
  },
  Registry: {
    screen: Registry,
    navigationOptions: () => ({
      title: '注册'
    })
  }
}
