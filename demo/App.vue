<template>
  <div id="demo" :class="[{'collapsed' : collapsed}]">
    <div class="demo">
      <nav-bar :navList="navList" :navData="navData"/>
      <h1>vue-sidebar-menu</h1>
      <div>select theme:
        <select v-model="selectedTheme">
          <option v-for="(theme, index) in themes" :key="index">{{theme == '' ? 'default-theme' : theme}}</option>
        </select>
      </div>
      <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
      <router-view/>
    </div>
    <sidebar-menu :menu="menu" :collapsed="collapsed" @collapse="onCollapse" :theme="selectedTheme" />
  </div>
</template>

<script>
import NavBar from "../src/components/Navbar.vue";

const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}

export default {
  components: {NavBar},
  name: 'app',
  data() {
    return {
      menu: [
        {
          header: true,
          title: 'Main Navigation'
        },
        {
          template: 'test1',
          title: 'Dashboard',
          icon: 'fa fa-user'
        },
        {

          title: 'Charts',
          template: 'test2',
          icon: 'fa fa-chart-area',
          badge: {
            text: 'pro',
            class: 'badge-danger'
          }
        },
        {

          title: 'Tables',
          template: 'test3',
          icon: 'fa fa-table'
        },
        {

          title: 'Disabled',
          template: 'test4',
          icon: 'fa fa-cog',
          disabled: true,
          badge: {
            text: '20',
          }
        },
        {
          header: true,
          component: separator,
          visibleOnCollapse: true
        },
        {
          header: true,
          title: 'Other'
        },
        {
          title: 'Pages',
          icon: 'fa fa-file',
          badge: {
            text: 'new',
          },
          child: [
            {

              title: 'Login Page',
              icon: 'fa fa-lock'
            },
            {

              title: 'Registration Page',
              icon: 'fa fa-lock'
            },
            {

              title: 'Disabled',
              icon: 'fa fa-unlock',
              disabled: true
            }
          ]
        },
        {

          title: 'Mailbox',
          icon: 'fa fa-envelope'
        },
        {
          title: 'Multiple Level',
          icon: 'fa fa-list-alt',
          child: [
            {

              title: 'Page 01'
            },
            {
              title: 'Page 02',
              child: [
                {

                  title: 'Page 04'
                },
                {

                  title: 'Page 05'
                }
              ]
            },
            {

              title: 'Page 03'
            },
            {
              title: 'Level 2',
              child: [
                {

                  title: 'Level 3',
                  child: [
                    {

                      title: 'Page'
                    },
                    {

                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      collapsed: false,
      themes: ['', 'white-theme'],
      selectedTheme: 'white-theme',
      navData: {
        orgName: "test services",
        username: "vandu murugan"
      },
      navList: {
        list: [
          { template: 'lockscreen',
            display: 'Lockscreen',
            type: 'text',
            link_class: 'dropdown__link',
            class: 'dropdown__menu__item'
          },
          { template: 'signout',
            display: 'Signout',
            type: 'text',
            link_class: 'dropdown__link',
            class: 'dropdown__menu__item'
          }
        ]
      }
    }
  },
  methods: {
    onCollapse(val) {
      console.log(`collapsed ${val}`)
      this.collapsed = val
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600');

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #f2f4f7;
}

#demo {
  padding-left: 350px;
}
#demo.collapsed {
  padding-left: 50px;
}

.demo {
}

.badge-danger {
  background-color: #ff2a2a;
  color: #fff;
}
</style>
