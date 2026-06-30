import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: 'docs',
  outDir: 'doc_build',
  title: 'Harness Engineering 学习指南',
  description: '从概念理解到独立实践的 Harness Engineering 深度学习档案',
  logoText: 'Harness Engineering',
  lang: 'zh',
  search: {
    codeBlocks: false,
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/yuezheng2006/harness-engineering',
      },
    ],
    footer: {
      message: '基于 Rspress 构建，内容来自 Harness Engineering 学习档案。',
    },
  },
});
