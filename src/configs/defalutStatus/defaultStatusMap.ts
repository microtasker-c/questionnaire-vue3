// 该文件用于定义默认状态的映射表
import singleSelectDefaultStatus from './SingleSelect';
import singlePicSelectDefaultStatus from './SinglePicSelect';
import TextNote from './TextNote';

export const defaultStatusMap = {
  'single-select': singleSelectDefaultStatus,
  'single-pic-select': singlePicSelectDefaultStatus,
  'text-note': TextNote,
  'personal-info-gender': singleSelectDefaultStatus,
  'personal-info-education': singleSelectDefaultStatus,
};
