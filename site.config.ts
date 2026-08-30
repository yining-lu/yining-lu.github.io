// ============================================================
//  基本信息配置
//  这里放的是几乎不会变的东西：姓名、头衔、邮箱、社交链接。
//  改完保存即可，不需要动其他文件。
// ============================================================

export const site = {
  // 姓名（会显示在左上角和首页大标题）
  name: 'Yining Lu',

  // 浏览器标签页标题
  siteTitle: 'Yining Lu — Tsinghua University',

  // 给搜索引擎看的一句话简介（影响 Google 搜索结果里的描述）
  description:
    'Yining Lu is a Master student in Communication Science at the School of Journalism & Communication, Tsinghua University, studying media psychology, family communication, and digital well-being.',

  // 首页照片：把图片放进 public/images/，这里写文件名
  portrait: '/images/portrait.jpg',

  // 首页大标题下面那行小字（不需要就设为空字符串 ''）
  eyebrow: 'Media Psychology · Family Communication · Digital Well-being',

  // 头衔。可以写 HTML，<a> 就是超链接。
  title: `Master Student in Communication Science<br>
          School of Journalism &amp; Communication,
          <a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a>`,

  // 首页头衔下面那排小圆胶囊按钮。不要的整行删掉，要加就照格式复制一行。
  pills: [
    { label: 'Email', url: 'mailto:luyining0529@gmail.com' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yining-lu-63a9b92aa/' },
    { label: 'CV (PDF)', url: '/cv.pdf' },
  ],

  // 教育背景，显示在首页 About 上方的小卡片里
  education: [
    {
      school: 'Tsinghua University',
      degree: 'M.A. in Communication',
      years: '2024–2027',
    },
    {
      school: 'Zhejiang University',
      degree: 'B.A. in Communication, Distinguished Honor Graduate',
      years: '2020–2024',
    },
    {
      school: 'LMU München',
      degree: 'Exchange Program',
      years: '2023–2024',
    },
  ],

  // 顶部导航栏。顺序就是显示顺序。
  nav: [
    { label: 'About', url: '/#about' },
    { label: 'Research', url: '/research/' },
    { label: 'Teaching', url: '/teaching/' },
    { label: 'CV', url: '/cv/' },
    { label: 'Contact', url: '/contact/' },
  ],

  // Research 页的板块顺序。
  // 这里的名字必须和 content/research/ 里每个 .md 的 area 字段完全一致。
  // 想调整板块顺序，改这个列表的顺序即可。
  // 某个板块下面没有任何论文时，该板块会自动隐藏。
  researchAreas: [
    'Family Communication',
    'Children, Adolescents, and Media',
    'Interpersonal Communication',
    'Others',
  ],

  // Research 页顶部的两句研究总纲（来自你的 PPT）。不想要就把整个 questions 删掉
  questions: [
    {
      q: 'Who is actually affected?',
      a: 'The person affected may not be the person who used the media.',
    },
    {
      q: 'Who is actually acting?',
      a: 'Adolescents manage their connectivity rather than just receive it.',
    },
  ],

  // Contact 页面的内容
  contact: {
    photo: '/images/contact.jpg',
    email: 'luyining0529@gmail.com',
    // 学校邮箱，不想显示就把下面这行删掉
    academicEmail: 'luyn24@mails.tsinghua.edu.cn',
    linkedin: 'https://www.linkedin.com/in/yining-lu-63a9b92aa/',
    // ResearchGate 主页，不想显示就把下面这行删掉
    researchgate: 'https://www.researchgate.net/profile/Yining-Lu-6/research',
  },

  // CV 的 PDF 文件位置（文件放在 public/ 下面）
  cvFile: '/cv.pdf',

  // CV 第一页的预览图（放进 public/images/）。换了 CV 记得一起换；
  // Mac 上可以用：qlmanage -t -s 1400 -o /tmp public/cv.pdf
  // 不想要预览图就改成 ''
  cvCover: '/images/cv-cover.jpg',

  // CV 页数，显示在预览卡片上；不想显示就改成 0
  cvPages: 3,
};
