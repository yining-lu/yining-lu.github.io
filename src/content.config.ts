import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 所有可编辑内容都在项目根目录的 content/ 文件夹里。
// 这个文件定义每类内容有哪些字段，写错字段名时 npm run build 会直接报错提示。

// content/research/ 里一个 .md 文件 = 一篇研究（页面上的一个白色卡片）
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/research' }),
  schema: z.object({
    // 论文标题
    title: z.string(),
    // 属于哪个板块。必须和 site.config.ts 里 researchAreas 的名字完全一致
    area: z.string(),
    // 引用信息，显示在标题下方
    citation: z.string().optional(),
    // 状态标签，例如 "Under Review" / "In Preparation" / "ICA 2025"
    status: z.string().optional(),
    // 配图：把图片放进 public/images/，这里写 "/images/文件名"
    // 可以写多张，会依次显示
    images: z.array(z.string()).default([]),
    // 同一板块内，数字越小越靠前
    order: z.number().default(99),
    // 额外链接，例如 [{ label: "PDF", url: "https://..." }]
    links: z
      .array(z.object({ label: z.string(), url: z.string() }))
      .default([]),
  }),
});

const teaching = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/teaching' }),
  schema: z.object({
    title: z.string(),
    code: z.string().optional(),
    institution: z.string().optional(),
    role: z.string().optional(),
    order: z.number().default(99),
    // 课件 / 讲座 PDF：文件放进 public/slides/，这里写 "/slides/文件名.pdf"
    slides: z
      .object({
        file: z.string(),
        // 按钮上显示的名字，不写就是 "Slides"
        label: z.string().optional(),
        // 页数，会显示成 "PDF · 31 slides"；不写就只显示 PDF
        pages: z.number().optional(),
        // 封面预览图（放进 public/images/），不写就不显示预览
        cover: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { research, teaching };
