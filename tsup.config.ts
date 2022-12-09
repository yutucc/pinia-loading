/*
 * @Author: wuqinfa
 * @Date: 2022-12-07 17:59:39
 * @LastEditors: wuqinfa
 * @Description: 
 */
import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: true,
  sourcemap: false,
  clean: true,
  dts: true,
  format: ['esm'],
  external: ['pinia']
});