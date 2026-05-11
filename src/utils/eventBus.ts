// 提供事件总线（组件通信）

import mitt from "mitt"
import type { eventBus } from "@/types"

const emitter = mitt<eventBus>()
export default emitter
