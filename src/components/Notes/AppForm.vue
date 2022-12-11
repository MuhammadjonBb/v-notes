<template lang="pug">
.note-form__wrapper
  form(@submit.prevent="onSubmit").note-form
    textarea(required v-model="value" placeholder="Enter your note")
    TagsList(:items="tags" @onItemClick="handleTagClick")
    button(type="submit").btn.btn-primary Add new note
</template>

<script>
/* eslint-disable quotes */
import TagsList from "@/components/UI/TagsList.vue";

export default {
  components: { TagsList },
  data() {
    return {
      value: "",
      tags: ["home", "work", "travel", "study"],
    };
  },
  methods: {
    onSubmit() {
      this.$emit(this.value);
    },
    handleTagClick(tag) {
      return tag;
    },
  },
};
</script>

<style lang="scss">
.note-form__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.note-form {
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
}
</style>
