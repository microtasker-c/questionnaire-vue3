import type { TextProps, OptionsProps, TypeStatus, Status } from '@/types/index';
import { isPicTitleDescStatusArr, isStringArray } from '@/types/index';
import type { Material } from '@/types/store';


export function getTextStatus(props: TextProps) {
  return props.status;
}

export function getStringStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status;
  }
}

export function getCurrentStatus(props: OptionsProps) {
  return props.currentStatus;
}
export function getStringStatusByCurrentStatus(props: OptionsProps) {
  if (props && isStringArray(props.status)) {
    return props.status[props.currentStatus];
  }
}

export function getPicTitleDescStatusArr(props: OptionsProps) {
  if (props && isPicTitleDescStatusArr(props.status)) {
    return props.status;
  }
}

export function changeEditorIsShowStatus(status: TypeStatus, type: number) {
  if (type !== status.type.currentStatus) {
    status.title.isShow = !status.title.isShow;
    status.desc.isShow = !status.desc.isShow;
    status.position.isShow = !status.position.isShow;
    status.titleSize.isShow = !status.titleSize.isShow;
    status.descSize.isShow = !status.descSize.isShow;
    status.titleWeight.isShow = !status.titleWeight.isShow;
    status.descWeight.isShow = !status.descWeight.isShow;
    status.titleItalic.isShow = !status.titleItalic.isShow;
    status.descItalic.isShow = !status.descItalic.isShow;
    status.titleColor.isShow = !status.titleColor.isShow;
    status.descColor.isShow = !status.descColor.isShow;
  }
}


export function updateInitStatusBeforeAdd(comStatus: Status, newMaterialName: Material) {
  switch (newMaterialName) {
    case 'personal-info-gender':
      comStatus.name = 'personal-info-gender'
      comStatus.status.title.status = '您的性别是？';
      comStatus.status.options.status = ['男', '女']
      break;

    case 'personal-info-education':
      comStatus.name = 'personal-info-education'
      comStatus.status.title.status = '您的学历是？';
      comStatus.status.options.status = ['大专', '本科', '高中']
      break;
  }
}
