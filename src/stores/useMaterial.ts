// 组件市场里面所有状态的仓库
import { defaultStatusMap } from '@/configs/defalutStatus/defaultStatusMap';
import { defineStore } from 'pinia';
// 公共actions
import {
  setTextStatus,
  addOption,
  removeOption,
  setPostion,
  setSize,
  setWeight,
  setItalic,
  setColor,
  setPicLinkByIndex,
} from './actions';

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select',
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
      // 'multi-select': {},
    },
  }),

  actions: {
    /**
     * 修改当前组件的仓库
     * @param comName 组件名 -- single-pic-select
     */
    setCurrentMaterialCom(comName: string) {
      this.currentMaterialCom = comName;
    },

    setTextStatus,
    addOption,
    removeOption,
    setPostion,
    setSize,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex
  },
});
