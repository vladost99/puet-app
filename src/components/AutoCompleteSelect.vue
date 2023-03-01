<template>
  <v-autocomplete
    @change="changeValue"
    :value="model"
    :label="label"
    :items="items"
    :disabled="disabled"
  ></v-autocomplete>
</template>
<script>
export default {
  props: ["label", "items", "model", "disabled"],
  methods: {
    changeValue(value) {
      this.$emit("save", value);
    },
  },
};
</script>
