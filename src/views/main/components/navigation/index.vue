<template>
  <div>
    <mobile-navigation-vue v-if="isMobileTerminal" :data="categoryData" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isMobileTerminal } from '@/utils/flexible'
import mobileNavigationVue from './mobile/index.vue'
import { getCategory } from '@/api/category.js'
import { ALL_CATEGORY_ITEM } from '@/constants'

const categoryData = ref([]) // categor数据源
const getCategoryData = async () => {
  const { categorys } = await getCategory()
  categoryData.value = categorys
  categoryData.value.unshift(ALL_CATEGORY_ITEM)
  console.log(categoryData.value)
}
getCategoryData()
</script>

<style lang="scss" scoped></style>
