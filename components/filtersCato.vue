<template>
  <div>
    <div class="filter">
      <a-row type="flex" justify="space-between">
        <h3>
          Manage Jobs <a-divider type="vertical"></a-divider>
          <a-icon type="home" class="prColor" />
        </h3>
        <a-button class="btn">Add New Jobs<a-icon type="plus" /></a-button>
      </a-row>
      <a-row type="flex" justify="space-between" class="filterData">
        <a-col :xl="4" :lg="4" :md="10" :sm="12">
          <a-select
            default-value="All Catogories"
            style="width: 100%"
            class="cato"
          >
            <a-select-option value="jack"> Jack </a-select-option>
            <a-select-option value="lucy"> Lucy </a-select-option>
            <a-select-option value="disabled" disabled>
              Disabled
            </a-select-option>
            <a-select-option value="Yiminghe"> yiminghe </a-select-option>
          </a-select>
        </a-col>
        <a-col :xl="9" :lg="9" :md="10" :sm="12">
          <a-input-search
            placeholder="input search text"
            enter-button="Search"
          />
        </a-col>
        <a-col :xl="3" :lg="3" :md="10" :sm="12">
          <a-date-picker style="width: 100%">
            <a-icon slot="suffixIcon" type="down" />
          </a-date-picker>
        </a-col>

        <a-col :xl="3" :lg="3" :md="10" :sm="12">
          <a-select default-value="Company" style="width: 100%">
            <a-select-option value="Company A"> Company A </a-select-option>
            <a-select-option value="Company A"> Company A </a-select-option>

            <a-select-option value="Company A"> Company A </a-select-option>
          </a-select>
        </a-col>

        <a-col :xl="3" :lg="3" :md="10" :sm="12">
          <a-select default-value="city" style="width: 100%">
            <a-select-option value="Lahore"> Lahore </a-select-option>
            <a-select-option value="Islamabad"> Islamabad </a-select-option>

            <a-select-option value="Rawalpindi"> Rawalpindi </a-select-option>
          </a-select></a-col
        >
      </a-row>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.filter {
  margin: 30px 10px;
}
::v-deep .ant-btn-primary {
  background: #8477fa !important;
  border: #8477fa !important;
}
.filterData {
  margin-top: 20px;
}
::v-deep .cato .ant-select-selection {
  background: #8477fa !important;
  color: white !important;
}
::v-deep .cato .ant-select-arrow .ant-select-arrow-icon svg {
  transition: transform 0.3s;
  color: white !important;
}
</style>
