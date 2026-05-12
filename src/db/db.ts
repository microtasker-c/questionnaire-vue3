/**
 * 负责定义数据库以及表的结构
 */
import Dexie , {type Table} from 'dexie'
import type { SurveyDBDate } from '@/types'

// class SurveyDateBase extends Dexie{
//   // 定义了一个类型survey：表类型<每一条是SurveyDBDate，主键是number类型>
//   // “！”非空断言，surveys一定不为空
//   surveys!: Table<SurveyDBDate, number>;

//   constructor(){
//     super('SurveyDateBase') // 将数据库名称传给父类
//     this.version(1).stores({
//       surveys: '++id, createDate, updateDate, title, surveyCount, coms'
//     })
//   }
// }

export class SurveyDateBase extends Dexie{
  // 定义了一个类型survey：表类型<每一条是SurveyDBDate，主键是number类型>
  // “！”非空断言，surveys一定不为空
  surveys!: Table<SurveyDBDate, number>;

  constructor(){
    super('SurveyDateBase') // 将数据库名称传给父类
    this.version(1).stores({
      surveys: '++id, createDate, updateDate, title, surveyCount, coms'
    })
  }
}
