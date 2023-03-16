<template>
  <div>
    <a-card class="mx-2 mb-2 shadow" v-for="data in moms" :key="data.id">
      <div class="jobcard">
        <span
          class="status"
          :class="
            data.status == 'active'
              ? 'statusActive'
              : '' || data.status == 'pending'
              ? 'statusinActive'
              : '' || data.status == 'draft'
              ? 'statusThird'
              : ''
          "
          >{{ data.status }}</span
        >

        <a-row type="flex" justify="space-between">
          <a-col :span="16">
            <a-row>
              <a-col :span="4">
                <!-- <img src="/IntelIconGr.png" alt="" /> -->
                <div class="companyLogo">
                  <h3 class="companyLogotext">{{ firstLetter(data.title) }}</h3>
                </div>
              </a-col>
              <a-col :span="18">
                <h2 class="maintitle">{{ $capitalize(data.title) }}</h2>
                <span class="shortText"
                  ><img src="/UsersGr.png" class="cuIcon mr-1" alt="" />
                  {{ data.company }}</span
                >
                <br />
                <span class="shortText"
                  ><img src="/map.png" alt="" class="cuIcon mr-1" />{{
                    data.city
                  }}
                  {{ data.country }}</span
                >
              </a-col>
            </a-row>
          </a-col>

          <a-col :span="2" align="end">
            <img src="/delete.png" alt="" v-if="data.status == 'draft'" />
            <img src="/edit.png" alt=""
          /></a-col>
        </a-row>
        <a-row type="flex" justify="space-between" align="middle" class="app">
          <a-col :span="10">
            <img src="/apply.png" alt="" /><span
              class="shortText mx-1"
              v-if="data.application"
              >{{ data.application }} Application Recieved</span
            >
            <span v-else class="mx-1 shortText">0 Applications</span>
          </a-col>
          <a-col :span="8" align="end"
            ><span class="mx-1">Disable Jobs</span
            ><a-switch size="large" v-model="status" default-checked
          /></a-col>
        </a-row>
        <a-row type="flex" justify="space-between" align="middle" class="info">
          <a-col :span="12">
            <img src="/LocGr.png" alt="" />
            <span class="shortText mx-2"
              >Posted By {{ data.postby }}
              <span class="prColor lightColor">{{
                getHoursCalculate(data.date)
              }}</span></span
            >
          </a-col>
          <a-col :span="12" align="end">
            <a-button class="viewbtn"
              ><img src="/arrive.png" alt="" class="mx-1" /> View
              Analytics</a-button
            >
            <a-button class="renewbtn"
              ><img src="/renew.png" class="mx-1" alt="" /> Renew Jobs</a-button
            >
          </a-col>
        </a-row>
      </div>
    </a-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      jobsData: {
        title: "",
        status: "",
      },
      moms: [],
      status: "",
    };
  },
  mounted() {
    this.jobsApi();
  },
  computed: {
    ...mapGetters("modules/products", ["getjobs"]),
  },
  watch: {
    getjobs: {
      immediate: true,
      deep: true,
      handler(value) {
        if (value) {
          value.forEach((element) => {
            const newObj = {};
            newObj.title = element.title;
            newObj.status = element.status.status;
            newObj.company = element.business.name;

            newObj.date = element.created_at;
            element.city_options.forEach((item) => {
              newObj.city = item.title;
            });
            element.country_options.forEach((elem) => {
              newObj.country = elem.title;
            });
            element.jobusers.forEach((item) => {
              newObj.postby = item.username.username;
            });
            element.jobs_applied.forEach((item) => {
              newObj.application = item.pivot.job_id;
            });
            // this.jobsData.status = element.status.status;
            // this.jobsData.title = element.title;
            this.moms.push(newObj);
          });
        }
      },
    },
  },
  methods: {
    ...mapActions("modules/products", ["jobsApi"]),
    getHoursCalculate(obj) {
      const dateTime = new Date(obj);

      var seconds = Math.floor((new Date() - dateTime) / 1000);

      var interval = seconds / 31536000;

      if (interval > 1) {
        return Math.floor(interval) + " years ago";
      }
      interval = seconds / 2592000;
      if (interval > 1) {
        return Math.floor(interval) + " months ago";
      }
      interval = seconds / 86400;
      if (interval > 1) {
        return Math.floor(interval) + " days ago";
      }
      interval = seconds / 3600;
      if (interval > 1) {
        return Math.floor(interval) + " hours ago";
      }
      interval = seconds / 60;
      if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
      }
      return Math.floor(seconds) + " seconds ago";
    },
    firstLetter(str) {
      const value = str
        .split(/\s/)
        .reduce((response, word) => (response += word.slice(0, 1)), "");
      return value.toUpperCase();
    },
  },
};
</script>
<style>
.jobcard {
  position: relative;
}
.status {
  position: absolute;
  right: 3px;
  top: -20px;
}

.maintitle {
  margin-bottom: 0px !important;
}
.info {
  margin-top: 10px;
}
.app {
  margin-top: 10px;
}
</style>
