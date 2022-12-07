/*
 * @Author: wuqinfa
 * @Date: 2022-12-07 17:43:18
 * @LastEditors: wuqinfa
 * @Description: 
 */
import type { PiniaPluginContext } from 'pinia';
import type { ComputedRef, } from 'vue-demi';
import { reactive, computed, } from 'vue-demi';

interface Effects {
  count: number;
  [prop: string]: boolean | number;
}

interface StoresCount {
  [prop: string]: number;
}

interface Stores {
  [prop: string]: boolean;
}

const effects = reactive<Effects>({ count: 0 });
const global = computed(() => effects.count > 0);

const storesCount = reactive<StoresCount>({});;
const stores = computed<Record<string, boolean>>(() => {
  const storesCountKeys = Object.keys(storesCount);
  const result: Stores = {};

  storesCountKeys.forEach((item: string) => {
    result[item] = storesCount[item] > 0;
  });

  return result;
});

export default function PiniaPluginLoading(context: PiniaPluginContext) {
  console.log('context :>> ', context);

  const {
    options,
    store,
  } = context;
  const storeId = store.$id;

  if (storeId === '$$loading') {
    return {
      global,
      effects,
      stores,
    };
  }

  storesCount[storeId] = 0;

  Object.keys(options.actions).forEach((actionKey: string) => {
    const originAction = options.actions[actionKey];

    const action = function(this: unknown, ...args : unknown[]) {
      const rtn = originAction.apply(this, args);

      if (rtn instanceof Promise) {
        effects.count = effects.count + 1;
        effects[`${storeId}/${actionKey}`] = false;
        storesCount[storeId] = storesCount[storeId] + 1;

        return new Promise((resolve, reject) => {
          effects[`${storeId}/${actionKey}`] = true;
          rtn
            .then(resolve)
            .catch(reject)
            .finally(() => {
              console.log(`${actionKey}  finally`)
              effects.count = effects.count - 1;
              effects[`${storeId}/${actionKey}`] = false;
              storesCount[storeId] = storesCount[storeId] - 1;
            });
        });
      } else {
        return rtn;
      }
    }

    store[actionKey] = action;
  });
}

declare module 'pinia' {
  // eslint-disable-next-line
  export interface PiniaCustomProperties<Id, S, G, A> {
    global: ComputedRef<boolean>;
    effects: Effects,
    stores: any;
  }
}