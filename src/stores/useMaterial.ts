// 组件市场里面所有状态的仓库
import { defaultStatusMap } from '@/configs/defalutStatus/defaultStatusMap';
import { defineStore } from 'pinia';

export const useMaterialStore = defineStore('materialStore', {
  state: () => ({
    currentMaterialCom: 'single-select',
    coms: {
      'single-select': defaultStatusMap['single-select'](),
      // 'multi-select': {},
    },
  }),
});
