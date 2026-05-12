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
        @click="clickHandler(index)"
        :key="element.id"
        :ref="(el)=>(componentsRefs[index] = el)"
        >
        <component :is="element.type" :status="element.status" :serialNum="serialNum[index]"></component>
        <!-- 删除按钮 -->
         <div class="absolute delete-btn" v-show="store.currentComponentIndex === index" >
          <el-button
          type="danger" class="ml-10" size="small" :icon="Close" circle
          @click.stop="removeCom(index)"
          ></el-button>
         </div>
      </div>
      </template>
    </draggable>


  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import { computed, nextTick, ref, type ComponentPublicInstance } from 'vue';
import eventBus from '@/utils/eventBus'
// 拖拽组件
import draggable from 'vuedraggable'
import { useSurveyNo } from '@/utils/hook';
import { Close } from '@element-plus/icons-vue';
import { ElMessage, ElMessageBox } from 'element-plus';
const store = useEditorStore()
const centerContainer = ref<HTMLElement | null>(null)
const componentsRefs = ref<([Element | ComponentPublicInstance | null])>([])

// 获取题目编号
const serialNum = computed(() =>useSurveyNo(store.coms).value)

/**
 * center界面滚动到<刚添加>的组件
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


const scrollToCenter = (index:number) =>{
  nextTick(() =>{
    const element = componentsRefs.value[index]
    if (element instanceof HTMLElement) {
      element.scrollIntoView({
        behavior:'smooth',
        block:'center'
      })
    }
  })
}

const clickHandler = (index: number) => {
  if (store.currentComponentIndex === index) {
    store.setCurrentComponentIndex(-1)
  } else {
    store.setCurrentComponentIndex(index)
  }
}
/**
 * 删除选中的组件
 */
const removeCom = (index: number) => {
  ElMessageBox.confirm('确定删除该组件吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      store.removeCom(index);
      store.setCurrentComponentIndex(-1);
      ElMessage.success('删除成功');
    })
    .catch(() => {
      ElMessage.info('已取消删除');
    });
};


const dragstart = () =>{
  store.setCurrentComponentIndex(-1)
}

// 通过事件总线提供滚动方法给外界调用
eventBus.on('scrollToBottom', scrollToBottom)
eventBus.on('scrollToCenter', scrollToCenter)
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
