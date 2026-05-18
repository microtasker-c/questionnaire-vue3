/**
 * indexDB 存储数据类型
 */

import type { Status } from "./common";

// 表的类型
export interface SurveyDBDate{
  createDate: number,
  updateDate: number,
  title: string,
  surveyCount: number,
  coms: Status[]
}


export interface SurveyDBReturnData extends SurveyDBDate{
  id : number
}
