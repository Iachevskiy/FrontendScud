<template>
  <nuxt-icon
    :name="name"
    class="custom-layout__icon"
    :filled="filled"
  />
</template>

<script setup>

defineProps({
  name: {
    type: String,
    required: true
  },
  filled: {
    type: Boolean,
    default: false
  }
});

</script>

<style src="./style.scss" lang="scss" />
