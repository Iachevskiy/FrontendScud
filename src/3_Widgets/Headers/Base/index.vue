<template>
  <div class="header-base">
    <UILogo class="header-base__logo" />
    <UIIcon
      name="qr-code"
      filled
    />
    <UIIcon
      name="settings"
      filled
    />
    <UIIcon
      name="chat"
      filled
    />
    <!--    <UILogo class="header-base__logo" />-->

    <!--    <div class="header-base__logo-description">-->
    <!--      Доставка металлопроката-->
    <!--    </div>-->

    <!--    <div class="header-base__main-navbar">-->
    <!--      <UINavbarItem-->
    <!--        v-for="navbarItem in mainNavbarData"-->
    <!--        :key="navbarItem.href"-->
    <!--        :title="navbarItem.title"-->
    <!--        :href="navbarItem.href"-->
    <!--        :icon="navbarItem.icon"-->
    <!--      />-->
    <!--    </div>-->

    <!--    <div class="header-base__top-navbar">-->
    <!--      <UINavbarItem-->
    <!--        v-for="navbarItem in topNavbarData"-->
    <!--        :key="navbarItem.href"-->
    <!--        :title="navbarItem.title"-->
    <!--        :href="navbarItem.href"-->
    <!--      />-->
    <!--    </div>-->
  </div>
</template>

<script setup lang="ts">
import { UILogo, UIIcon } from '@/src/6_Shared/UI/Kit';
</script>

<style lang="scss" src="./style.scss" />
