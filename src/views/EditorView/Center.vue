<template>
  <div class="center-container" ref="centerContainer">
    <draggable v-model="store.coms" item-key="index"
      @start="dragstart"
    >
      <template #item="{ element, index }">
        <div
        class="content mb-10 relative"
        :class="{
          active: store.currentComponentIndex === index
        }"
        @click="clickHandler(index)">
        <component :is="element.type" :status="element.status" :serialNum="1"></component>
      </div>
      </template>
    </draggable>


  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import { nextTick, ref } from 'vue';
import eventBus from '@/utils/eventBus'
// 拖拽组件
import draggable from 'vuedraggable'

const store = useEditorStore()
const centerContainer = ref<HTMLElement | null>(null)

/**
 * center界面滚动到刚添加的组件
 * 在子组件中使用
 */
const scrollToBottom = () => {
  nextTick(() => {
    // 获取容器的dom元素
    const container = centerContainer.value;
    if (container) {
      window.scrollTo({
        top: container.scrollHeight,
        behavior: 'smooth',
      });
    }
  });
};

const clickHandler = (index: number) => {
  if (store.currentComponentIndex === index) {
    store.setCurrentComponentIndex(-1)
  } else {
    store.setCurrentComponentIndex(index)
  }
}


const dragstart = () =>{
  store.setCurrentComponentIndex(-1)
}

// 通过事件总线提供滚动方法给外界调用
eventBus.on('scrollToBottom', scrollToBottom)
</script>

<style scoped>
.center-container {
  width: 50%;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  margin: 70px auto;
  padding: 20px;
  background: var(--white);
  position: relative;

  .content {
    cursor: pointer;
    padding: 10px;
    background-color: var(--white);
    border-radius: var(--border-radius-sm);

    &:hover {
      transform: scale(1.01);
      transition: 0.5s;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
  }
}

.active {
  transform: scale(1.01);
  transition: 0.5s;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.delete-btn {
  right: -5px;
  top: -10px;
}
</style>
