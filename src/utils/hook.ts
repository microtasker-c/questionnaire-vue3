// 返回问卷题目序号的数组
import { isSurveyComName } from "@/types";
import { computed } from "vue";
import type {Status} from "@/types"

export function useSurveyNo(coms:Status[]) {
  return computed(() => {
    let questionNumber = 1
    return coms.map(com => {
      // 需要判断当前这个组件是不是问卷题目
      if(isSurveyComName(com.name)){
        return questionNumber++
      }
      return null
    })
  })
}

