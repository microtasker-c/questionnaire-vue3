// 数据库的相关方法的支持
import {db} from './db'
import type { SurveyDBDate } from '@/types'

/**
 * 添加保存数据
 * @param data
 * @returns
 */
export async  function saveSurvey(data:SurveyDBDate) {
  return await db.surveys.add(data)
}

/**
 * 查询所有
 * @returns
 */
export async function getAllSurvey() {
  return await db.surveys.toArray()
}

/**
 * 根据表查id
 * @param id
 * @returns
 */
export async function getSurveyById(id:number) {
  return await db.surveys.get(id)
}

/**
 * 根据id删数据
 * @param id
 * @returns
 */
export async function deleteSurveyById(id:number) {
  return await db.surveys.delete(id)
}


export async function updateById(id:number, data: Partial<SurveyDBDate>) {
  return await db.surveys.update(id, data)
}
