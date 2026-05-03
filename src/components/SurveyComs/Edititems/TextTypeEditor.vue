<template>
  <ButtonGroup title="说明类型" :status="status[currentStatus]">
    <el-button-group>
      <el-button :class="{
        select: currentStatus === 0
      }" @click="changeType(0)">
        <font-awesome-icon icon="heading"></font-awesome-icon>
      </el-button>
      <el-button :class="{
        select: currentStatus === 1
      }" @click="changeType(1)">
        <font-awesome-icon icon="paragraph"></font-awesome-icon>
      </el-button>
    </el-button-group>
  </ButtonGroup>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import type { VueComType, updateStatus } from '@/types';
import { inject } from 'vue';

const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editCom: VueComType
}>();

const updateStatus = inject<updateStatus>('updateStatus')
const changeType = (type:number) =>{
  if (updateStatus) updateStatus(props.configKey, type)
}
</script>

<style scoped></style>
