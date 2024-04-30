import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cesium from 'vite-plugin-cesium';
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'example',
  },
  plugins: [
    cesium(),
    vue(),
    Icons(),
    createSvgSpritePlugin(),
    Pages({
      pagesDir: [
        { dir: 'src/pages', baseRoute: '' },
        {
          dir: 'src/packages',
          baseRoute: '',
        },
      ],
      exclude: [
        '*/*.vue',
        '*/test/*.vue',
        '*/demo/demo[0-9].vue',
      ],
      extensions: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      'vue-gis/':
        process.env.NODE_ENV !== 'preview'
          ? `${path.resolve(__dirname, './src/packages')}/`
          : `${path.resolve(__dirname, './dist/es')}/`,
      'dist/': `${path.resolve(__dirname, './dist/es')}/`,
    },
  },
})
