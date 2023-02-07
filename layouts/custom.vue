<template>
  <customLayout>
    <template #header>
      <headerBase />
    </template>
    <slot />
  </customLayout>
</template>

<script setup lang="ts">
import { customLayout } from '@/src/6_Shared/UI/Layouts';
import { headerBase } from '@/src/3_Widgets/Headers';
</script>
