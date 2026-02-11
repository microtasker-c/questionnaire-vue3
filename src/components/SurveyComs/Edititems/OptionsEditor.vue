<template>
  <div>
    <div key="id">
      <div class="flex align-items-center mb-10">
        <div class="mr-10">选项</div>
        <el-button size="small" circle :icon="Plus" @click="addOption"></el-button>
      </div>

      <div v-for="(item, index) in status" :key="index" class="flex align-items-center">
        <el-input placeholder="选项" class="mt-5 mb-5" v-model="textArr[index]"></el-input>
        <el-button type="danger" class="ml-10" size="small" circle @click="deleteOption(index)"
          :icon="Minus"></el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Plus, Minus } from '@element-plus/icons-vue';
import { ref, inject } from 'vue';

const props = defineProps<{
  status: Array<string>;
  isShow: boolean;
  configKey: string;
  editCom: VueComType;
  id: string
}>()

const textArr = ref(props.status)



const updateStatus = inject('updateStatus')
const addOption = () => {
  updateStatus(props.configKey)
}
const deleteOption = (index: number) => {
  updateStatus(props.configKey, index)
}
</script>

<style scoped></style>
