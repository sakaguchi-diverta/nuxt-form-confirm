<template>
  <form>
    <input v-model="formData.text" type="text" />
    <select v-model="formData.select">
      <option value="">Please Select</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <button type="button" @click="confirm">Submit</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      formData: {
        text: '',
        select: '',
      }
    }
  },
  methods: {
    confirm() {
      this.saveFormData(this.formData);
      this.$router.push({ name: 'confirm', params: {queryParamCanbeInheritedFromHere: 1}  })
    },
    ...mapMutations({
      saveFormData: 'inquiry/saveFormData'
    })
  }
}
</script>
