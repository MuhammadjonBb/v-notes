<template lang="pug">
.note-form__wrapper
  form(@submit.prevent="onSubmit").note-form
    textarea(required v-model="note.title" placeholder="Enter your note")
    ul.tags-list
      li.tag-item(
        v-for="(item, index) in tags"
        :class="{isActive: item.isActive}"
        @click="onTagClick(index)"
        :key="item.title"
        )
        span {{item.title}}
    button(type="submit").btn.btn-primary Add new note
</template>

<script>
/* eslint-disable quotes */
import TagItem from "@/components/UI/TagItem.vue";

export default {
  components: { TagItem },
  data() {
    return {
      tags: [
        {
          title: "home",
          isActive: false,
        },
        {
          title: "work",
          isActive: false,
        },
        {
          title: "travel",
          isActive: false,
        },
        {
          title: "study",
          isActive: false,
        },
      ],
      note: {
        title: "",
        tags: [],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$emit("onSubmit", this.note);
      this.note = {
        title: "",
        tags: [],
      };
    },
    onTagClick(index) {
      this.tags[index].isActive = !this.tags[index].isActive;
      this.note.tags = this.tags.filter((tag) => tag.isActive).map((tag) => tag.title);
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

.tags-list {
  padding: 10px 0;
  display: flex;
  justify-content: center;
}

.tag-checkbox {
  display: none;
}
</style>
