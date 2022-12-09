/*
 * @Author: wuqinfa
 * @Date: 2022-12-09 17:56:04
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { defineStore } from 'pinia';

import {
  getFavoriteMovie,
} from '../services/api';

const useMovieStore = defineStore('movie', {
  state: () => {
    return {
      favorites: [],
    };
  },
  actions: {
    async getFavoriteMovie() {
      const res: any = await getFavoriteMovie();

      this.favorites = res;
    },
  },
});

export default useMovieStore;