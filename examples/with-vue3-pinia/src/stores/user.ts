/*
 * @Author: wuqinfa
 * @Date: 2022-12-09 15:46:32
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { defineStore } from 'pinia';

import {
  getUserInfo,
  getUserFriends,
} from '../services/api';

const useUserStore = defineStore('user', {
  state: () => {
    return {
      name: '',
      age: 0,
      friends: [],
    };
  },
  actions: {
    async getUserInfo() {
      const res: any = await getUserInfo();

      this.name = res.name;
      this.age = res.age;
    },
    async getUserFriends() {
      const res: any = await getUserFriends();

      this.friends = res || [];
    },
  },
});

export default useUserStore;