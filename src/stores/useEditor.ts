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
import type { Status } from "@/types";
import { isSurveyComName } from "@/types/store";

import { v4 as uuidv4 } from 'uuid';
import type { TypeStatus, SurveyDBDate } from "@/types";
import { markRaw } from "vue";
// 编辑组件
// 编辑组件
import TitleEditor from '@/components/SurveyComs/EditItems/TitleEditor.vue';
import DescEditor from '@/components/SurveyComs/EditItems/DescEditor.vue';
import PositionEditor from '@/components/SurveyComs/EditItems/PositionEditor.vue';
import SizeEditor from '@/components/SurveyComs/EditItems/SizeEditor.vue';
import WeightEditor from '@/components/SurveyComs/EditItems/WeightEditor.vue';
import ItalicEditor from '@/components/SurveyComs/EditItems/ItalicEditor.vue';
import ColorEditor from '@/components/SurveyComs/EditItems/ColorEditor.vue';
import TextTypeEditor from '@/components/SurveyComs/EditItems/TextTypeEditor.vue';


import textNoteDefaultStatus from '@/configs/defalutStatus/TextNote';

// 仓库初始化状态
const initStore = () => [
  Object.assign({}, textNoteDefaultStatus(), {
    status: <TypeStatus>{
      type: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['标题', '段落'],
        isShow: true,
        editCom: markRaw(TextTypeEditor),
        name: 'text-type-editor',
      },
      title: {
        id: uuidv4(),
        status: '问卷标题',
        isShow: true,
        editCom: markRaw(TitleEditor),
        name: 'title-editor',
      },
      desc: {
        id: uuidv4(),
        status: '默认描述内容',
        isShow: false,
        editCom: DescEditor,
        name: 'desc-editor',
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['左对齐', '居中对齐'],
        isShow: false,
        editCom: markRaw(PositionEditor),
        name: 'position-editor',
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['26', '24', '22'],
        isShow: true,
        editCom: markRaw(SizeEditor),
        name: 'size-editor',
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['16', '14', '12'],
        isShow: false,
        editCom: markRaw(SizeEditor),
        name: 'size-editor',
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        editCom: markRaw(WeightEditor),
        name: 'weight-editor',
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: false,
        editCom: markRaw(WeightEditor),
        name: 'weight-editor',
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        editCom: markRaw(ItalicEditor),
        name: 'italic-editor',
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: false,
        editCom: markRaw(ItalicEditor),
        name: 'italic-editor',
      },
      titleColor: {
        id: uuidv4(),
        status: '#000',
        isShow: true,
        editCom: markRaw(ColorEditor),
        name: 'color-editor',
      },
      descColor: {
        id: uuidv4(),
        status: '#909399',
        isShow: false,
        editCom: markRaw(ColorEditor),
        name: 'color-editor',
      },
    },
  }),
  Object.assign({}, textNoteDefaultStatus(), {
    status: <TypeStatus>{
      type: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['标题', '段落'],
        isShow: true,
        editCom: markRaw(TextTypeEditor),
        name: 'text-type-editor',
      },
      title: {
        id: uuidv4(),
        status: '默认标题内容',
        isShow: false,
        editCom: markRaw(TitleEditor),
        name: 'title-editor',
      },
      desc: {
        id: uuidv4(),
        status:
          '为了给您提供更好的服务，希望您能抽出几分钟时间，将您的感受和建议告诉我们，我们非常重视每位用户的宝贵意见，期待您的参与！现在我们就马上开始吧！',
        isShow: true,
        editCom: markRaw(DescEditor),
        name: 'desc-editor',
      },
      position: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['左对齐', '居中对齐'],
        isShow: true,
        editCom: markRaw(PositionEditor),
        name: 'position-editor',
      },
      titleSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['26', '24', '22'],
        isShow: false,
        editCom: markRaw(SizeEditor),
        name: 'size-editor',
      },
      descSize: {
        id: uuidv4(),
        currentStatus: 0,
        status: ['16', '14', '12'],
        isShow: true,
        editCom: markRaw(SizeEditor),
        name: 'size-editor',
      },
      titleWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: false,
        editCom: markRaw(WeightEditor),
        name: 'weight-editor',
      },
      descWeight: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['加粗', '正常'],
        isShow: true,
        editCom: markRaw(WeightEditor),
        name: 'weight-editor',
      },
      titleItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: false,
        editCom: markRaw(ItalicEditor),
        name: 'italic-editor',
      },
      descItalic: {
        id: uuidv4(),
        currentStatus: 1,
        status: ['斜体', '正常'],
        isShow: true,
        editCom: markRaw(ItalicEditor),
        name: 'italic-editor',
      },
      titleColor: {
        id: uuidv4(),
        status: '#000',
        isShow: false,
        editCom: markRaw(ColorEditor),
        name: 'color-editor',
      },
      descColor: {
        id: uuidv4(),
        status: '#909399',
        isShow: true,
        editCom: markRaw(ColorEditor),
        name: 'color-editor',
      },
    },
  }),
];

// indexDB数据库操作方法
import { saveSurvey } from "@/db/operation";



export const useEditorStore = defineStore('editor', {
  state: () => ({
    currentComponentIndex: -1,    // 通过索引来确定组件，一开始都没有选中所以是-1
    surveyCount: 0,          // 问卷题目数量
    coms: initStore()
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
    /**
     * 画布添加组件
     * @param newCom
     */
    addCom(newCom: Status){
      this.coms.push(newCom)
      this.currentComponentIndex = -1
      // 非题目类（如备注说明）是不添加为数量
      if (isSurveyComName(newCom.name)) {
        this.surveyCount++
      }
    },
    /**
     * 设置当前选中的题目
     * @param index 面板中的题目索引
     */
    setCurrentComponentIndex(index:number){
      this.currentComponentIndex = index
    },
    removeCom(index:number){
      // 检测是否为问卷题目
      if (isSurveyComName(this.coms[index].name)) {
        this.surveyCount--
      }
      this.coms.splice(index, 1)
    },
    /**
     * 重置问卷
     */
    resetComs(){
      this.coms = initStore()
      this.surveyCount = 0
      this.currentComponentIndex = -1
    },

    /**
     * 保存问卷数据
     */
    saveComs(data: SurveyDBDate){
      return saveSurvey(data)
    }
  }
})
