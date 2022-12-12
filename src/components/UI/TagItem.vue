<template lang="pug">
span.tag-item(
  :class="{isPreview: isPreview}"
) {{ item }}
</template>

<script>
/* eslint-disable quotes */
export default {
  props: {
    item: {
      type: String,
      required: true,
    },
    isPreview: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    onItemClick(title) {
      this.$emit("onItemClick", title);
      this.isActive = true;
    },
  },
};
</script>

<style lang="scss">
.tag-item {
  padding: 8px 22px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 22px;
  user-select: none;
  cursor: pointer;
  &.isActive {
    background-color: #444ce0;
    color: #fff;
  }
  &.isPreview {
    padding: 0;
    color: #444ce0;
    cursor: default;
    &:before {
      content: "#";
    }
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
