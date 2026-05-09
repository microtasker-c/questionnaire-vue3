// 存储画布的状态
import { defineStore } from "pinia";
// 公共actions
import {
  setTextStatus,
  addOption,
  removeOption,
  setPostion,
  setCurrentStatus,
  setWeight,
  setItalic,
  setColor,
  setPicLinkByIndex,
} from './actions';


export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentComponentIndex: -1,    // 通过索引来确定组件，一开始都没有选中所以是-1
    surveyCount: 0,          // 问卷题目数量
    coms: []
  }),
  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPostion,
    setCurrentStatus,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex,
  }
})
