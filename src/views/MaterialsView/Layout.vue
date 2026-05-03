<template>
  <div class="layout-container flex">
    <!-- 选择具体的业务组件 -->
    <div class="left flex wrap space-between">
      <slot />
    </div>
    <!-- 显示对应的业务组件 -->
    <div class="center">
      <Router-View v-slot="{ Component }">
        <!-- 这里与老师的不一样， 他是直接访问store-->
        <component :is="Component" :status="currentCom.status" :serialNum="1"></component>
      </Router-View>
    </div>
    <!-- 编辑面板 -->
    <div class="right">
      <EditPannel :com="currentCom" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditPannel from '@/components/SurveyComs/Edititems/EditPannel.vue';
import { computed, provide } from 'vue';
import { useMaterialStore } from '@/stores/useMaterial';
import { ElMessage } from 'element-plus';
import type { PicLink, MaterialStore } from '@/types';
import { isPicLink } from '@/types';
import { changeEditorIsShowStatus } from '@/utils';

const store = useMaterialStore() as unknown as MaterialStore;
// 获取当前选中的状态数据
const currentCom = computed(() => store.coms[store.currentMaterialCom])

const updateStatus = (configKey: string, payload?: number | string | boolean | object) => {
  // console.log(configKey, payload);
  // 拿到数据更新值，去仓库修改数据(调用actions)
  switch (configKey) {
    case 'type':{
      if (typeof payload === 'number') {
        changeEditorIsShowStatus(currentCom.value.status, payload)
        store.setCurrentStatus(currentCom.value.status[configKey], payload)
      }
      break
    }

    case 'title':
    case 'desc': {
      if (typeof payload !== 'string') {
        console.error('title or desc must be string');
        return
      }
      store.setTextStatus(currentCom.value.status[configKey], payload)
      break
    }
    case 'options': {
      if (typeof payload === 'number') {
        // 删除选项
        const res = store.removeOption(currentCom.value.status[configKey], payload)
        if (res) ElMessage.success('删除选项成功')
        else ElMessage.error('选项数量不能少于2个')
      }
      else if( typeof payload === 'object' && isPicLink(payload)){
        // 设置图片链接
        store.setPicLinkByIndex(currentCom.value.status[configKey], payload)
      }
      else {
        // 添加选项
        store.addOption(currentCom.value.status[configKey])
      }
      break
    }
    case 'position': {
      if (typeof payload !== 'number') {
        console.error('position must be number')
        break
      }

      store.setPostion(currentCom.value.status[configKey], payload)
      break
    }

    case 'titleSize':
    case 'descSize': {
      if (typeof payload !== 'number') {
        console.error('size must be number')
        break
      }
      store.setCurrentStatus(currentCom.value.status[configKey], payload)
      break
    }

    case 'titleWeight':
    case 'descWeight': {
      if (typeof payload !== 'number') {
        console.error('wei must be number')
        break
      }
      store.setWeight(currentCom.value.status[configKey], payload)
      break
    }

    case 'titleItalic':
    case 'descItalic': {
      if (typeof payload !== 'number') {
        console.error('ita must be number')
        break
      }
      store.setItalic(currentCom.value.status[configKey], payload)
      break
    }

    case 'titleColor':
    case 'descColor': {
      if (typeof payload !== 'string') {
        console.error('color must be string')
        break
      }

      store.setColor(currentCom.value.status[configKey], payload)
      break
    }


  }


}

const getLink = (link: PicLink) =>{
  // console.log(link, "link");
  updateStatus('options', link)

}

provide('updateStatus', updateStatus)
provide('getLink', getLink)

</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  // Header组件高度50px，h1高度50px，上下margin 20px，最后20px是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 20px);
  align-items: flex-start;
  border: 1px solid var(--border-color);
  border-top-right-radius: var(--border-radius-lg);
  border-bottom-left-radius: var(--border-radius-lg);
  border-bottom-right-radius: var(--border-radius-lg);
}

.left {
  width: 180px;
  text-align: center;
  align-items: flex-start;
  padding: 20px;
}

.center {
  width: 550px;
  // 多减去的60px是上下的padding，，最后20px是额外多减去一部分，避免贴底
  height: calc(100vh - 100px - 40px - 60px - 20px);
  overflow-y: scroll;
  padding: 30px;
  border-left: 1px solid var(--border-color);
}

.right {
  width: 350px;
  height: calc(100vh - 100px - 40px - 20px);
  overflow-y: scroll;
  border-left: 1px solid var(--border-color);
}
</style>
