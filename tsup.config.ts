/*
 * @Author: wuqinfa
 * @Date: 2022-12-07 17:59:39
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
});