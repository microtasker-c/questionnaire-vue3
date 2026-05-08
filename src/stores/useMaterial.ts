// 组件市场里面所有状态的仓库
import { defaultStatusMap } from '@/configs/defalutStatus/defaultStatusMap';
import { defineStore } from 'pinia';
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
import { updateInitStatusBeforeAdd } from '@/utils';
import type { Material } from '@/types/store';
import type { Status } from '@/types';

// 哪些业务组件需要做这些初始化
const keyToInit = ['personal-info-gender', 'personal-info-education'] as Material[]
const initializedStates: {[key: Material]: Status} = {}

keyToInit.forEach(key =>{
  const defalutStatus = defaultStatusMap[key]()
  updateInitStatusBeforeAdd(defalutStatus, key)
  initializedStates[key] = defalutStatus
})

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select',
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      'single-pic-select': defaultStatusMap['single-pic-select'](),
      'text-note': defaultStatusMap['text-note'](),
      'personal-info-gender': initializedStates['personal-info-gender'],
      'personal-info-education': initializedStates['personal-info-education'],

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
    setCurrentStatus,
    setWeight,
    setItalic,
    setColor,
    setPicLinkByIndex,
  },
});
