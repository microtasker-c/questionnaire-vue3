<template>
  <div v-if="store.surveyCount">
    <draggable v-model="store.coms" item-key="index" @start="dragstart">
      <template #item="{element}">
        <div class="mb-10">
          <div class="item">1.{{ element.status.title.status.length > 10 ?
           element.status.title.status.substring(0,10) + '...'
           : element.status.title.status }}</div>
        </div>
      </template>
    </draggable>
  </div>
  <div v-else class="tip flex align-items-center justify-content-center">请添加题目</div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
// 拖拽组件
import draggable from 'vuedraggable'



const store = useEditorStore()

const dragstart = () =>{
  store.setCurrentComponentIndex(-1)
}
</script>

<style scoped lang="scss">
.item {
  /* outline: 1px solid black; */
  color: var(--font-color-light);
  font-size: var(--font-size-base);
  padding: 10px;
  cursor: pointer;
}
.tip {
  height: calc(100% - 50px);
}
.active {
  transform: scale(1.04);
  transition: 0.5s;
  background-color: var(--border-color);
  border-radius: var(--border-radius-lg);
}
</style>
