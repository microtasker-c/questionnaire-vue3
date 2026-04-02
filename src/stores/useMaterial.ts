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
} from './actions';

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select',
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      // 'multi-select': {},
    },
  }),

  actions: {
    setTextStatus,
    addOption,
    removeOption,
    setPostion,
    setSize,
    setWeight,
    setItalic,
    setColor,
  },
});
