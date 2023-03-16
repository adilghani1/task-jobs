export default {
  async jobsApi({ commit }, payload) {
    const resp = await this.$axios.get("user-business-jobs", payload);

    commit("SET_API_RESPONSE", resp.data.data);
  },
};
