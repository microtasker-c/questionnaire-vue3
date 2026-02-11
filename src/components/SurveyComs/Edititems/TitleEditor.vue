<template>
  <div key="id">
    <div class="mb-10">标题内容</div>
    <el-input placeholder="请输入标题内容" v-model="text" @update:modelValue="inputHandle"></el-input>
  </div>
</template>

<script setup lang="ts">
import type { VueComType } from '@/types';
import { ref, inject } from 'vue';


const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string
}>()

const text = ref(props.status)
const updateStatus = inject('updateStatus')

const inputHandle = (newVal: string) => {
  updateStatus(props.configKey, newVal);

}
</script>

<style scoped></style>
