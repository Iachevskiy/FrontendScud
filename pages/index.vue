<template>
  <UiFilterBar />
  <UiWidget />
  <UiWidget />
</template>

<script setup lang="ts">
import { UiFilterBar } from '@/src/3_Widgets/FilterBar';
import { UiWidget } from '@/src/3_Widgets/Widget';
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'custom'
});

</script>
