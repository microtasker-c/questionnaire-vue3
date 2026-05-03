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

export type OptionsStatusArr = StringStatusArr | ValueStatusArr | PicTitleDescStatusArr;

export interface OptionsProps extends BaseProps {
  status: OptionsStatusArr;
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

export interface TypeStatus extends BaseStatus {
  type: OptionsProps
}

// 类型保护
// export function isOptionsStatus(status:BaseStatus): status is OptionsStatus {
//   return 'option' in status
// }
// export function isTypeStatus(status:BaseStatus): status is TypeStatus {
//   return 'type' in status
// }

export function isStringArray(status: OptionsStatusArr): status is string[] {
  return Array.isArray(status) && typeof status[0] === 'string';
}

// 确定 status 是 { value: string; status: string } 这种类型的数组
export function isValueStatusArr(status: OptionsStatusArr): status is ValueStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === 'object' &&
    'value' in status[0] &&
    'status' in status[0]
  );
}

// 确定 status 是 { picTitle: string; picDesc: string; value: string } 这种类型的数组
export function isPicTitleDescStatusArr(status: OptionsStatusArr): status is PicTitleDescStatusArr {
  return (
    Array.isArray(status) &&
    typeof status[0] === 'object' &&
    'picTitle' in status[0] &&
    'picDesc' in status[0] &&
    'value' in status[0]
  );
}


export type PicLink = {link:string; index: number}
export function isPicLink(obj:object): obj is PicLink{
  return 'link' in obj && 'index' in obj
}
