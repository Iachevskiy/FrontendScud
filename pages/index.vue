<template>
  <div>
    {{ ff() }} 44
  </div>
</template>

<script setup lang="ts">
import ff from '@/src/6_Shared';

definePageMeta({
  layout: 'custom'
});

</script>
