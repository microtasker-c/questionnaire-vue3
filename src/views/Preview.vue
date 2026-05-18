<template>
  <div class="preview-container pb-40">
    <div class="center mc">
      <!-- 上面的按钮组 -->
      <div class="button-group flex space-between align-items-center">
        <!-- 左边按钮 -->
        <div class="flex space-between">
          <el-button type="danger" @click="gobackHandle">返回</el-button>
          <!-- <el-button type="danger" >返回</el-button> -->
          <el-button type="success">生成在线问卷</el-button>
          <el-button type="warning">生成本地PDF</el-button>
        </div>
        <!-- 题目数量 -->
        <div class="mr-15">
          <el-text class="mx-1">题目数量：{{ store.surveyCount }}</el-text>
        </div>
      </div>
      <!-- 对应的问卷 -->
      <div class="content-group no-border">
        <div class="content mb-10" v-for="(com, index) in store.coms" :key="index">
          <!-- <div>{{ com }}</div> -->
          <component :is="com.type" :status="com.status" :serialNum="serialNum[index]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { getSurveyById } from '@/db/operation';
import { useEditorStore } from '@/stores/useEditor';
import { restoreComponentStatus } from '@/utils';
import { useSurveyNo } from '@/utils/hook';
import { computed } from 'vue';

const store = useEditorStore()

const route = useRoute()
const router = useRouter()

// 获取路由参数
const id = Number(route.params.id)

if (id) {
  getSurveyById(id).then((res) => {
    console.log("res", res);

    if (res) {
      // 拿到数据后，组件部分需要重新还原
      console.log("coms:", res.coms);

      restoreComponentStatus(res.coms)
      // 还原完成之后，将还原的数据设置为仓库里面的coms即可
      store.setStore(res)
    }

  })
}
const serialNum = computed(() => useSurveyNo(store.coms).value)
const gobackHandle = () =>{
  const path = history.state.from
  if (path === 'home') {
    router.back()
  }else{
    router.push(`/editor/${id}/survey-type`)
  }
}


</script>

<style scoped lang="scss">
.preview-container {
  width: 100vw;
  min-height: 100vh;
  background: url('@/assets/imgs/editor_background.png');
}
.center {
  width: 800px;
}
.button-group {
  width: 100%;
  height: 60px;
  top: 0;
  left: 0;
  background-color: var(--white);
  z-index: 100;
}
.content-group {
  padding: 20px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-lg);
  background: var(--white);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}
</style>
