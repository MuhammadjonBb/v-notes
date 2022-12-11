<template lang="pug">
Form(@onSubmit="handleSubmit")
</template>

<script>
/* eslint-disable quotes */
import Form from "@/components/Notes/AppForm.vue";

export default {
  components: { Form },
  methods: {
    handleSubmit(note) {
      return note;
    },
  },
};
</script>
