import type { TextProps, OptionsProps } from '@/types';
import { isStringArray } from '@/types';

export function setTextStatus(textProps: TextProps, text: string) {
  textProps.status = text;
}

export function addOption(optionsProps: OptionsProps) {
  if (isStringArray(optionsProps.status)) {
    optionsProps.status.push('新选项');
  }
}
export function removeOption(optionsProps: OptionsProps, index: number) {
  if (optionsProps.status.length === 2) {
    return false;
  }
  optionsProps.status.splice(index, 1);
  return true;
}

export function setPostion(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setSize(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setWeight(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setItalic(optionsProps: OptionsProps, index: number) {
  optionsProps.currentStatus = index;
}

export function setColor(optionsProps: OptionsProps, color: string) {
  optionsProps.status = color;
}
