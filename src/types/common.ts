import type { defineComponent } from 'vue';
import type { OptionsStatus , TypeStatus} from './editProps';
import type { Material } from './store';

export type VueComType = ReturnType<typeof defineComponent>;

export interface Status {
  type: VueComType;
  name: Material;
  id: string;
  status: OptionsStatus | TypeStatus;
}
