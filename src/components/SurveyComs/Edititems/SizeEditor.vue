<template>

  <ButtonGroup :title="`${configKey === 'titleSize' ? '标题' : '描述'}尺寸`" :status="status[currentStatus]">

    <el-button-group>
      <el-button @click="changeSize(0)" :class="{
        select: currentStatus === 0
      }">
        <font-awesome-icon icon="font" size="lg"></font-awesome-icon>
      </el-button>
      <el-button @click="changeSize(1)" :class="{
        select: currentStatus === 1
      }">
        <font-awesome-icon icon="font" size="sm"></font-awesome-icon>
      </el-button>
      <el-button @click="changeSize(2)" :class="{
        select: currentStatus === 2
      }">
        <font-awesome-icon icon="font" size="xs"></font-awesome-icon>
      </el-button>

    </el-button-group>
  </ButtonGroup>


</template>

<script setup lang="ts">
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
const changeSize = (size: number) => {
  updateStatus(props.configKey, size)
}
</script>

<style scoped></style>
