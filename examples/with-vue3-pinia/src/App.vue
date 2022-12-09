<!--
 * @Author: wuqinfa
 * @Date: 2022-12-09 15:37:35
 * @LastEditors: wuqinfa
 * @Description: 
-->
<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import use$loadingStore from '../../../src/store';

import useUserStore from './stores/user';
import useMovieStore from './stores/movie';

const userStore = useUserStore();
const movieStore = useMovieStore();
const $loadingStore = use$loadingStore();

const handleGetUserInfo = () => {
  userStore.getUserInfo();
}
const handleGetUserFriends = () => {
  userStore.getUserFriends();
}
const handleGetFavoriteMovie = () => {
  movieStore.getFavoriteMovie();
}

</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  
  <ul class="info">
    <li>name: {{$loadingStore.global ? 'loading...' : userStore.name}}</li>
    <li>age: {{$loadingStore.global ? 'loading...' : userStore.age}}</li>
    <li>friends: {{$loadingStore.effects['user/getUserFriends'] ? 'loading...' : userStore.friends.join('、')}}</li>
    <li>favorite movie: {{$loadingStore.stores.movie ? 'loading...' : movieStore.favorites.join('、')}}</li>
  </ul>

  <div>
    <button
      class="btn"
      @click="handleGetUserInfo"
      :disabled="$loadingStore.global"
    >
      {{$loadingStore.global ? 'loading...' : 'Get Name and Age'}}
    </button>

    <button
      class="btn"
      @click="handleGetUserFriends"
      :disabled="($loadingStore.effects['user/getUserFriends'] as boolean)"
    >
      {{$loadingStore.effects['user/getUserFriends'] ? 'loading...' : 'Get Friends'}}
    </button>

    <button
      class="btn"
      @click="handleGetFavoriteMovie"
      :disabled="($loadingStore.stores.movie as boolean)"
    >
      {{$loadingStore.stores.movie ? 'loading...' : 'Get Favorite Movie'}}
    </button>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.info {
  text-align: left;
}

.btn {
  display: block;
  
  margin: 20px;
}
</style>
