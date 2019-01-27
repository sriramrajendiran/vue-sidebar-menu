<style>
  .show-time {
    color: white;
  }
</style>
<template>
  <div class="show-time">
    <span>{{ orgTime() | moment("dddd, MMMM Do YYYY, h:mm a") }}</span>
  </div>
</template>
<script>
  import moment from 'moment-timezone'
  export default {
    name: 'LiveTime',
    props: ['timezone'],
    methods: {
      orgTime() {
        let tz = this.timezone || moment.tz.guess();
        setInterval(() => {
          this.currentTime = moment().tz(tz).format();
        }, 60000);
        return this.currentTime;
      }
    },
    data() {
      return {
        currentTime: new Date()
      }
    }
  }
</script>
