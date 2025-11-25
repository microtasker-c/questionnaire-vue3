<template>
  <div class="container">
    <h1 class="font-weight-100 text-center">问卷系统</h1>
    <!-- 按钮组 -->
    <div class="mb-15">
      <el-button type="primary" :icon="Plus">创建问卷</el-button>
      <el-button type="success" :icon="Compass">组件市场</el-button>
    </div>
    <!-- 数据表格 -->

    <el-table :data="tableData" style="width: 100%" border></el-table>
  </div>
</template>

<script setup lang="ts">
import { Plus, Compass } from '@element-plus/icons-vue'
import { ref } from 'vue'
const tableData = ref()
</script>

<style scoped></style>
