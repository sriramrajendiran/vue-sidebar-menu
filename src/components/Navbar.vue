<style lang="scss">
  @import '../scss/header';
</style>
<template>
  <header class="header">
    <nav class="header--fixed">
      <div class="header__con">
        <img alt="beecon-logo" title="beecon-logo" class="header__logo" :src="favicon">
        <div class="org--name">
          {{ navData.orgName }}
        </div>
        <ul class="header__account-info-list d--fl ai--c">
          <live-time :timezone="navData.tz"></live-time>
          <li class="ps--r header__account-info-list__item">
            <Dropdown class="header__account-info__link">
              <template slot="selector">
                <avatar :username="navData.username" :size="35" class="d--ib"></avatar>
              </template>
              <template slot="menu" slot-scope="{ dropdownMenuClass }">
                <list
                  :list="navList"
                  :class="dropdownMenuClass"/>
              </template>
            </Dropdown>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  import favicon from '../assets/favicon.ico'
  import Dropdown from './Dropdown.vue'
  import List from './List.vue'
  import LiveTime from "./LiveTime.vue";
  import Avatar from 'vue-avatar'

  export default {
    name: 'NavBar',
    components: {
      LiveTime, Avatar,
      Dropdown, List },
    props: {
      navList: {
        type: Object,
        required: true
      },
      navData: {
        type: Object
      }
    },
    created() {
      this.favicon = favicon;
    }
  }
</script>
