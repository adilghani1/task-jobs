<template>
  <div>
    <filters-cato />
    <a-row>
      <a-col :span="14">
        <jobs-list />
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  layout: "default",

  data() {
    return {
      // filterData: [],
    };
  },
  computed: {},
  watch: {},

  methods: {},
};
</script>
