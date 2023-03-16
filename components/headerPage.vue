<template>
  <div>
    <a-row type="flex" justify="space-between" align="middle" class="header">
      <a-col span="8">
        <nuxt-link
          to="/home"
          class="mr-3"
          :class="this.activePage == '/home' ? 'activemenu' : 'inactivemanu'"
          >Home</nuxt-link
        >
        <nuxt-link
          to="/jobs"
          class="mr-3"
          :class="this.activePage == '/jobs' ? 'activemenu' : 'inactivemanu'"
          >Manage Jobs</nuxt-link
        >
        <nuxt-link
          to="/bussiness"
          class="mr-3"
          :class="
            this.activePage == '/bussiness' ? 'activemenu' : 'inactivemanu'
          "
          >Bussiness</nuxt-link
        >
      </a-col>
      <a-col span="8" align="middle">
        <a-row type="flex" justify="center">
          <nuxt-link to="/jobs"><img src="/logo.png" alt="" /> </nuxt-link>
          <h4 class="textColor mt-1 ml-2">Publish Jobs</h4>
        </a-row>
      </a-col>
      <a-col span="8" align="end">
        <img src="/night-mode.svg" class="ml-2" />
        <img src="/bell.svg" class="ml-2" alt="" />
        <a-avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          class="ml-2"
        />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activePage: "",
    };
  },
  mounted() {
    this.activePage = this.$route.path;
  },
  watch: {
    $route(to, from) {
      this.activePage = this.$route.path;
    },
  },
};
</script>
<style>
.header {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 10px;
}
</style>
