/*
 * @Author: wuqinfa
 * @Date: 2022-12-09 15:37:35
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { createApp } from 'vue';
import './style.css';

import store from './stores/index';

import App from './App.vue';

const app = createApp(App);


app.use(store);
app.mount('#app');

