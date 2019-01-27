import SidebarMenu from './components/SidebarMenu.vue'
import NavBar from './components/Navbar.vue'
import Dropdown from './components/Dropdown.vue'
import LiveTime from './components/LiveTime.vue'
import List from './components/List.vue'
import vueMoment from 'vue-moment'
import moment from 'moment-timezone'

export default {
  install (Vue) {
    Vue.use(vueMoment, { moment })
    Vue.component('sidebar-menu', SidebarMenu)
  }
}

export { SidebarMenu, NavBar, Dropdown, List, LiveTime }
