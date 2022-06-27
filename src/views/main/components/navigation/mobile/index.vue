<template>
  <div class="bg-white sticky top-0 left-0 z-10">
    <ul
      ref="ulTarget"
      class="relative flex overflow-x-auto p-1 text-xs text-zinc-600 overflow-hidden"
    >
      <!-- 汉堡按钮  -->
      <li
        class="z-20 fixed top-0 right-[-1px] h-4 px-1 flex items-center bg-white shadow-l-white"
        @click="onShowPopup"
      >
        <m-svg-icon class="w-1.5 h-1.5" name="hamburger"></m-svg-icon>
      </li>
      <!-- 滑块 -->
      <li
        ref="silderTarget"
        :style="sliderStyle"
        class="absolute h-[22px] bg-zinc-900 rounded-lg duration-200"
      ></li>
      <!-- items -->
      <li
        v-for="(item, index) in data"
        :key="item.id"
        class="shrink-0 px-1.5 py-0.5 z-10 duration-200 last:mr-4"
        :ref="setItemRef"
        @click="onItemClick(index)"
      >
        {{ item.name }}
      </li>
    </ul>

    <m-popup v-model="isVisable">
      <MenuVue :categorys="data" @onItemClick="onItemClick"></MenuVue>
    </m-popup>
  </div>
</template>

<script setup>
import { ref, onBeforeUpdate, watch } from 'vue'
import { useScroll } from '@vueuse/core'
import MenuVue from '@/views/main/components/menu/index.vue'
defineProps({
  data: {
    type: Array,
    required: true
  }
})

// 滑块
const sliderStyle = ref({
  transform: 'translateX(0px)',
  width: '60px'
})
const currentCategoryIndex = ref(0) // 选中的 item 下标
// 获取所有的item元素
let itemRefs = []
const setItemRef = (el) => {
  if (el) {
    itemRefs.push(el)
  }
}
onBeforeUpdate(() => {
  itemRefs = []
})
// 获取 ul 元素，以计算偏移位置
const ulTarget = ref(null)
const { x: ulScrollLeft } = useScroll(ulTarget) // 拿到x轴滚动距离
watch(currentCategoryIndex, (val) => {
  // 获取选中元素的 left、width
  const { left, width } = itemRefs[val].getBoundingClientRect()
  console.log('left', left)
  console.log('width', width)
  // 为 sliderStyle 设置属性
  sliderStyle.value = {
    // ul 横向滚动位置 + 当前元素的 left 偏移量
    transform: `translateX(${ulScrollLeft.value + left - 10 + 'px'})`,
    width: width + 'px'
  }
})

// item点击事件
const onItemClick = (index) => {
  currentCategoryIndex.value = index
  isVisable.value = false
}

// 控制popup展示
const isVisable = ref(false)
const onShowPopup = () => {
  isVisable.value = true
}
</script>

<style lang="scss" scoped></style>
