/*
 * @Author: wuqinfa
 * @Date: 2022-12-09 15:46:04
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { createPinia } from 'pinia';
import { PiniaPluginLoading } from 'pinia-loading';

const store = createPinia();

store.use(PiniaPluginLoading);

export default store;