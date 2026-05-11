<template>
  <div class="right-side-container" >
    <div v-if="store.currentComponentIndex === -1" class="content flex justify-content-center align-items-center">点击题型进行编辑</div>
    <div v-else>
      <EditPannel :com="currentCom"></EditPannel>
    </div>

  </div>
</template>

<script setup lang="ts">
import { useEditorStore } from '@/stores/useEditor';
import EditPannel from '@/components/SurveyComs/Edititems/EditPannel.vue';
import { computed ,provide} from 'vue';

import { ElMessage } from 'element-plus';
import type { PicLink } from '@/types';
import { isPicLink } from '@/types';
import { changeEditorIsShowStatus } from '@/utils';

const store = useEditorStore()
const currentCom = computed(() => store.coms[store.currentComponentIndex])

// 编辑面板更改
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
.right-side-container {
  width: 320px;
  height: calc(100vh - 50px - 40px);
  position: fixed;
  right: 20px;
  top: 70px;
  background-color: var(--white);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  overflow-y: scroll;
}
.content {
  height: 100%;
}
</style>
