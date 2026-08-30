// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 网址。影响 sitemap 和每页的 canonical 链接。
//
// 以后如果买了自己的域名，做两件事即可切换：
//   1. 把下面的 site 改成 'https://你的域名'
//   2. 新建文件 public/CNAME，里面只写一行你的域名
export default defineConfig({
  site: 'https://yining-lu.github.io',
  integrations: [sitemap()],
  build: { format: 'directory' },
});
