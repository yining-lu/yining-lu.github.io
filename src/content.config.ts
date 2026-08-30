import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 所有可编辑的内容都放在项目根目录的 content/ 文件夹里。
// 这个文件定义每类内容有哪些字段，写错字段名时 npm run build 会直接报错提示。

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/research' }),
  schema: z.object({
    title: z.string(),
    // 期刊/会议/状态，例如 "Working Paper" 或 "Journal of Communication"
    venue: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),
    authors: z.string().optional(),
    // 配图：把图片放进 public/images/，这里写 "/images/文件名.jpg"
    image: z.string().optional(),
    // 折叠时显示的简短摘要（建议 2-3 行）
    summary: z.string(),
    // 数字越小越靠前
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
  }),
});

export const collections = { research, teaching };
