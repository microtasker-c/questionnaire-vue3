<template>
  <div>
    <ButtonGroup :title="configKey === 'titleWeight' ? '标题倾斜' : '描述倾斜'
      " :status="status[currentStatus]">
      <el-button @click="toggleStatus(0)" :class="{
        select: currentStatus === 0
      }">
        <font-awesome-icon icon="i" size="lg"></font-awesome-icon>
      </el-button>

      <el-button @click="toggleStatus(1)" :class="{
        select: currentStatus === 1
      }">
        <font-awesome-icon icon="i" size="sm"></font-awesome-icon>
      </el-button>

    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">

import type { VueComType } from '@/types';
import { inject } from 'vue';
import ButtonGroup from './ButtonGroup.vue';


const props = defineProps<{
  currentStatus: number;
  status: string[];
  isShow: boolean;
  configKey: string;
  editCom: VueComType
}>();


const updateStatus = inject('updateStatus')
const toggleStatus = (ita: number) => {
  updateStatus(props.configKey, ita)
}



</script>

<style scoped></style>
