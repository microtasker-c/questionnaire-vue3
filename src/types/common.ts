import type { defineComponent } from 'vue';
import type { OptionsStatus , TypeStatus} from './editProps';

export type VueComType = ReturnType<typeof defineComponent>;

export interface Status {
  type: VueComType;
  name: string;
  id: string;
  status: OptionsStatus | TypeStatus;
}
