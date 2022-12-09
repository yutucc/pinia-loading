/*
 * @Author: wuqinfa
 * @Date: 2022-12-09 17:28:06
 * @LastEditors: wuqinfa
 * @Description: 
 */
export function getUserInfo () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: 'yutucc',
        age: 12,
      });
    }, 2000);
  });
}

export function getUserFriends () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Bob', 'David', 'John']);
    }, 2000);
  });
}

export function getFavoriteMovie () {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(['The Shawshank Redemption', 'The Godfather', 'The Dark Knight']);
    }, 2000);
  });
}