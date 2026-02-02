import type { VueComType } from './common';

export interface BaseProps {
  id: string;
  isShow: boolean;
  name: string;
  edit: VueComType;
}

export interface TextProps extends BaseProps {
  status: string;
}

export type StringStatusArr = string[];

export type ValueStatusArr = Array<{ value: string; status: string }>;
export type PicTitleDescStatusArr = Array<{
  picTitle: string;
  picDesc: string;
  value: string;
}>;

export interface TextProps extends BaseProps {
  status: string;
}

export interface OptionsProps extends BaseProps {
  status: StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;
  currentStatus: number;
}

// 公共的设置项，每个组件都有的设置项
export interface BaseStatus {
  title: TextProps;
  desc: TextProps;
  position: OptionsProps;
  titleSize: OptionsProps;
  descSize: OptionsProps;
  titleWeight: OptionsProps;
  descWeight: OptionsProps;
  titleItalic: OptionsProps;
  descItalic: OptionsProps;
  titleColor: TextProps;
  descColor: TextProps;
}

// 存在业务组件不含有多选这个选项
export interface OptionsStatus extends BaseStatus {
  options: OptionsProps;
}
