# Yining Lu — 个人主页

Astro 构建的静态个人主页，托管在 GitHub Pages。

**网址：https://yining-lu.github.io/**

---

## 一、我要改内容，改哪里？

**你只需要动这两个地方，`src/` 文件夹永远不用碰。**

| 我想改… | 打开这个文件 |
|---|---|
| 姓名、头衔、邮箱、导航栏、首页那排小按钮 | `site.config.ts` |
| About 那三段自我介绍、教育背景 | `content/about.md`（教育列表在 `site.config.ts`）|
| 研究方向（增删改） | `content/research/` 里的 `.md` 文件 |
| **论文 / 会议列表** | `content/publications.md` |
| 教学经历（增删改） | `content/teaching/` 里的 `.md` 文件 |
| **课件 / 讲座 PDF** | 把 PDF 放进 `public/slides/`，再在教学 `.md` 里写 `slides:` |
| 换照片 | 把新图片放进 `public/images/`，覆盖同名文件 |
| 换 CV | 用新的 PDF 覆盖 `public/cv.pdf`（封面图见下面“换 CV”）|

每个文件开头都有中文注释说明怎么填。

### 加一个新的研究项目

复制 `content/research/01-example-project.md`，改个文件名（比如 `03-my-new-paper.md`），
然后修改里面的内容。`order` 数字越小越靠前。**首页只显示前 3 个，Research 页显示全部。**

```markdown
---
title: "论文标题"
authors: "Yining Lu, 合作者"
venue: "期刊或会议名"
year: 2025
summary: "折叠时显示的摘要，最多三行，超出自动省略号。"
image: "/images/my-paper.jpg"   # 没有配图就把这行整行删掉
order: 3
links:
  - label: "PDF"
    url: "https://..."
---

展开后才看到的完整介绍写在这里，建议 300 词以内。
```

> **注意**：上面 `---` 之间的部分对格式敏感，冒号后面要有空格，
> 文字最好用英文双引号 `"` 包起来。中间正文部分随便写，不会出错。

### 更新论文列表

打开 `content/publications.md`，像写 Word 一样直接改。规则很简单：

- `##` 开头 = 分类标题（Peer-Reviewed / Under Review / Work in Progress / Conference）
- `-` 开头 = 一条论文
- 自己的名字用 `**Lu, Y.**` 包起来会变粗
- 期刊名用 `*期刊名*` 包起来会变紫色
- 通讯作者星号写 `\*`（前面那个反斜杠不能省，否则会变成斜体）
- 加链接写 `[DOI](https://...)`

### 换 CV

CV 页和 Teaching 页的课件用的是同一种卡片：折叠时只显示第一页缩略图，
点一下就在网页里展开完整 PDF（带翻页、缩放、下载）。

1. 用新的 PDF 覆盖 `public/cv.pdf`
2. 重新生成封面图（Mac 上直接在项目目录跑这两行）：

```bash
qlmanage -t -s 1400 -o /tmp public/cv.pdf
sips -Z 1000 -s format jpeg -s formatOptions 68 /tmp/cv.pdf.png --out public/images/cv-cover.jpg
```

3. 如果页数变了，去 `site.config.ts` 把 `cvPages` 改成新页数

> 不想要封面图就把 `site.config.ts` 里的 `cvCover` 改成 `''`，卡片会变成一行标题。

### 给一门课挂课件 PDF

1. 把 PDF 放进 `public/slides/`，文件名用英文、不要空格（例如 `dyadic-data.pdf`）
2. 打开对应的 `content/teaching/*.md`，在 `---` 之间加上：

```markdown
slides:
  file: "/slides/dyadic-data.pdf"     # 必填，注意开头的斜杠
  label: "Workshop Slides — Dyadic Data"  # 按钮上显示的名字，可省略
  pages: 31                            # 页数，可省略
  cover: "/images/slides-dyadic-data.jpg"  # 封面预览图，可省略
```

页面上会出现一张可展开的卡片：折叠时显示封面缩略图，点开后直接在网页里翻 PDF，
下面还有 “Open in new tab” 和 “Download PDF” 两个按钮。PDF 只有点开才加载，不会拖慢页面。

> 封面图可以用 Mac 自带命令生成：
> `qlmanage -t -s 1600 -o /tmp public/slides/dyadic-data.pdf`，
> 再把 `/tmp` 里的图片压成 jpg 放进 `public/images/`。

### 删掉一个板块

把 `content/teaching/` 里的文件全部删掉，Teaching 板块就会自动从首页消失。
再去 `site.config.ts` 的 `nav` 里删掉对应那一行，导航栏也会消失。

---

## 二、怎么发布上线？

### 最简单的方式（不用装任何软件）

1. 打开 GitHub 上的仓库网页
2. 点进要改的文件 → 点右上角铅笔图标 ✏️
3. 改完拉到底，点绿色的 **Commit changes**
4. **等 1–2 分钟，网站自动更新**

改完想确认有没有成功，去仓库的 **Actions** 标签页看，绿色勾 ✅ 就是发布成功了，
红色叉 ❌ 就是哪里写错了（多半是上面说的 `---` 格式问题）。

### 在电脑上预览（可选）

```bash
npm install     # 第一次才需要
npm run dev     # 打开 http://localhost:4321 实时预览
npm run build   # 生成最终静态文件到 dist/
```

---

## 三、首次部署（一次性设置）

1. 把代码推到 GitHub 仓库 `yining-lu/yining-lu.github.io` 的 `main` 分支
2. 仓库 **Settings → Pages → Source** 选 **GitHub Actions**
3. 等 1–2 分钟，访问 https://yining-lu.github.io/

### 以后想用自己的域名

（可选，不做也完全不影响使用）

1. 买一个域名
2. 在域名服务商加 4 条 `A` 记录，指向：
   `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153`
3. 再加 1 条 `CNAME` 记录，`www` → `yining-lu.github.io`
4. 仓库新建文件 `public/CNAME`，里面只写一行你的域名
5. 把 `astro.config.mjs` 里的 `site` 改成你的域名
6. Settings → Pages 填入域名，勾选 **Enforce HTTPS**

> 注意：`yininglu.com` 已被他人注册，需要另选域名。

---

## 四、给 AI 助手看的说明

如果让 AI（Claude / ChatGPT 等）帮忙改这个网站，可以直接告诉它：

> 这是一个 Astro 5 静态站。所有可编辑内容在根目录 `content/`（Markdown）和
> `site.config.ts`。内容 schema 定义在 `src/content.config.ts`。
> 样式集中在 `src/styles/site.css`，主题色改 `--purple` 系列变量。
> 改完跑 `npm run build` 验证，不要引入任何客户端 JavaScript。

---

## 五、技术说明

- **Astro 5** 静态生成，构建产物 **0 KB JavaScript**，纯 HTML + CSS
- 研究卡片的展开/收起用原生 `<details>` 标签，不依赖 JS
- 自动生成 `sitemap-index.xml`，配合每页的 `<meta description>` 和 canonical 链接，利于 Google 收录
- 响应式，手机端已验证无横向溢出
- 配色为清华紫 `#660874`，改 `src/styles/site.css` 顶部的 `--purple` 三个变量即可换主题色

### 目录结构

```
site.config.ts              ← 基本信息（常改）
content/
  about.md                  ← About 正文（常改）
  publications.md           ← 论文/会议列表（常改）
  research/*.md             ← 研究方向（常改）
  teaching/*.md             ← 教学经历（常改）
  personal-photo/           ← 原始照片存档
  cv-source/                ← CV 的 Word 原件存档
public/
  images/                   ← 网站用的图片
  cv.pdf                    ← CV 文件
  CNAME                     ← 自定义域名
src/                        ← 页面模板和样式（一般不用动）
  content.config.ts         ← 内容字段定义
  layouts/Base.astro        ← 导航栏 + 页脚
  components/               ← 研究卡片、课程卡片
  pages/                    ← 5 个页面
  styles/site.css           ← 全站样式
```
