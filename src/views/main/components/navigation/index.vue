<template>
  <div>
    <mobile-navigation-vue v-if="isMobileTerminal" />
  </div>
</template>

<script setup>
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
</script>

<style lang="scss" scoped></style>
