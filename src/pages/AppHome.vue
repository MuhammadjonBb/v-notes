<template lang="pug">
Form(@onSubmit="handleSubmit")
List(@onRemove="handleRemove" :items="notes")
</template>

<script>
/* eslint-disable quotes */
import Form from "@/components/Notes/AppForm.vue";
import List from "@/components/Notes/NotesList.vue";

export default {
  components: { Form, List },
  data() {
    return {
      notes: [
        {
          title: "Learn vue 3",
          tags: ["work", "study"],
        },
        {
          title: "Drink coffee",
          tags: ["home"],
        },
      ],
    };
  },
  methods: {
    handleSubmit(note) {
      return note;
    },
    handleRemove(index) {
      this.notes.splice(index, 1);
    },
  },
};
</script>
