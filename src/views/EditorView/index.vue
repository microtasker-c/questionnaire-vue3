<template>
  <div>
      <div class="header">
        <Header></Header>
      </div>

      <!-- 编辑器主题区域 -->
      <div class="container">
        <LeftSide/>
        <RightSide/>
      </div>
      <div>
        <Center />
      </div>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/common/Header.vue';
import LeftSide from './LeftSide/index.vue'
import RightSide from './RightSide/index.vue'
import Center from './Center.vue';

</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  background-color: var(--white);
  position: fixed;
  top: 0;
  z-index: 10;
}
.container {
  width: calc(100vw - 40px);
  padding: 20px;
  // Header的高度50px，上下padding 20px
  height: calc(100vh - 50px - 40px);
  background: url('@/assets/img/image.png');
  position: fixed;
  top: 50px;
}
</style>
