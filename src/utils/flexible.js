import { computed } from 'vue'
import { PC_DEVICE_WIDTH } from '../constants'
/**
 * 判断当前是否为移动设备，判断依据为屏幕的宽度是否大于指定值（1280）
 */
export const isMobileTerminal = computed(() => {
  return document.documentElement.clientWidth < PC_DEVICE_WIDTH
})
