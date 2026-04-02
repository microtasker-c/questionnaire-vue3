<template>
  <div>
    <ButtonGroup :status="status" :title="configKey === 'titleColor' ? '标题颜色' : '描述颜色'">
      <div class="demo-color-block">
        <el-color-picker v-model="color1" @change="changeColor(color1)" />
      </div>
    </ButtonGroup>
  </div>
</template>

<script setup lang="ts">
import ButtonGroup from './ButtonGroup.vue';
import { inject, ref } from 'vue'

const color1 = ref('#409EFF')
const props = defineProps<{
  status: string;
  isShow: boolean;
  configKey: string;
  editCom: VueComType
}>();

const updateStatus = inject("updateStatus")

const changeColor = (color: string) => {
  console.log(color);

  updateStatus(props.configKey, color)
}

</script>

<style scoped lang="scss">
.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}
</style>
