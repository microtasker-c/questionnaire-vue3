<template>
  <div>
    <div>描述编辑组件</div>
    <el-input placeholder="请输入描述" v-model="text" @update:modelValue="handleInput" :rows="4" type="textarea"></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types/common'
import { ref, inject } from 'vue';


const props = defineProps<{
  id: string;
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
}>()

const text = ref(props.status)
const updateStatus = inject('updateStatus')
const handleInput = (newVal: string) => {
  updateStatus(props.configKey, newVal)
}
</script>

<style scoped></style>
