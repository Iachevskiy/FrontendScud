<template>
  <div class="custom-layout">
    <header class="custom-layout__header">
      <slot name="header" />
    </header>
    <main class="custom-layout__content">
      <slot />
    </main>
  </div>
</template>

<style src="./style.scss" lang="scss" />
