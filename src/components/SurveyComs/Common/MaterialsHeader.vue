<template>
  <div>
    <div class="container mb-15">
      <h2 class="title" :style="{
        color: titleColor,
        fontSize: `${titleSize}px`
      }">
        <span class="mr-10 " :class="{
          'font-bold': !titleWeight,
          'font-italic': !titleItalic
        }">{{ serialNum }}.</span>
        <span :class="{
          'font-bold': !titleWeight,
          'font-italic': !titleItalic
        }">{{ title }}</span>
      </h2>
      <!-- 描述 -->
      <div class="desc" :style="{
        color: descColor,
        fontSize: `${descSize}px`
      }" :class="{
        'font-bold': !descWeight,
        'font-italic': !descItalic
      }">{{ desc }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">

defineProps({
  serialNum: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  desc: {
    type: String,
    default: ''
  },
  titleSize: {
    type: String,
    default: '22'
  },
  descSize: {
    type: String,
    default: '16'
  },
  titleWeight: {
    type: Number,
    required: true
  },
  descWeight: {
    type: Number,
    required: true
  },
  titleItalic: {
    type: Number,
    required: true
  },
  descItalic: {
    type: Number,
    required: true
  },
  titleColor: {
    type: String,
    default: '#333'
  },
  descColor: {
    type: String,
    default: '#666'
  }
})
</script>

<style scoped lang="scss">
.container {
  >h2 {
    font-size: 20px;

    >span {
      margin: 0 5px;
    }
  }
}

.desc {
  font-size: var(--font-size-base);
  color: var(--font-color-light);
  text-indent: 5px;
}
</style>
