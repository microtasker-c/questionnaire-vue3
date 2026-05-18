import type { defineComponent } from 'vue';
import type { OptionsStatus } from './editProps';
import type { Material } from './store';
import type { TextProps } from 'element-plus';

export type VueComType = ReturnType<typeof defineComponent>;

export interface Status {
  type: VueComType;
  name: Material;
  id: string;
  // status: OptionsStatus | TypeStatus;
  status: {
    [key: string]: OptionsStatus | TextProps;
  }
}
