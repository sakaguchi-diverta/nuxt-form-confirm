<template>
  <form>
    <p>
      Text: {{ formData.text }}
    </p>
    <p>
      Select: {{ formData.select }}
    </p>
  </form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters({
      formData: 'inquiry/getFormData'
    })
  },
  created() {
    if (Object.keys(this.formData).length === 0) {
      this.$nuxt.error({
          statusCode: 404,
          message: '~~~ NOT FOUND ^_^ ~~~'
      });
    }
  },
}
</script>
