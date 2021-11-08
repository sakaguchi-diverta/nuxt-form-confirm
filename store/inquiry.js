export const state = () => ({
  formData: {}
})

export const mutations = {
  saveFormData(state, formData) {
    state.formData = { ...formData };
  },
}

export const getters = {
  getFormData(state) {
    return state.formData;
  }
}
