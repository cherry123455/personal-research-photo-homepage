export const profile = {
  name: '林知禾',
  englishName: 'Zhihe Lin',
  role: '生命科学方向研究生候选人 / 胶片摄影爱好者',
  location: 'Shanghai · Tokyo-minded',
  email: 'zhihe.lin@example.com',
  links: [
    { label: 'Google Scholar', value: 'scholar.example.com' },
    { label: 'ORCID', value: '0000-0000-0000-0000' },
    { label: 'Instagram', value: '@zhihe.film' },
  ],
  intro:
    '关注细胞微环境、影像分析与科研可视化。喜欢把实验台上的严谨和取景器里的慢节奏放在同一个坐标里。',
  highlights: [
    { label: 'Research Focus', value: 'Cell Biology' },
    { label: 'Lab Years', value: '3+' },
    { label: 'Film Rolls', value: '120+' },
  ],
};

export const about = [
  '我正在准备申请生物医学与转化研究方向的研究岗位，长期兴趣是细胞状态变化、组织微环境和定量影像分析。',
  '摄影是我整理观察力的方式：在实验中寻找可重复的证据，在日常中记录稍纵即逝的光线。这个主页先用本地假数据搭建，方便后续替换成真实简历与作品。',
];

export const researchExperiences = [
  {
    period: '2025.03 - 至今',
    title: '肿瘤微环境影像分析项目',
    lab: '某高校生命科学学院',
    points: [
      '建立免疫荧光图像的批量预处理流程，整理细胞分割与表型标注数据。',
      '协助完成样本元数据规范化，形成可复用的实验记录模板。',
    ],
  },
  {
    period: '2024.02 - 2025.01',
    title: '细胞迁移与药物响应实验',
    lab: '细胞生物学实验室',
    points: [
      '参与划痕实验、活细胞成像和基础统计分析。',
      '将实验结果整理为组会汇报图表，优化图注和版式表达。',
    ],
  },
  {
    period: '2023.09 - 2024.01',
    title: '科研训练与文献复现',
    lab: '本科科研训练计划',
    points: [
      '复现公开数据集中的基础分析流程，练习 R 与 Python 数据清洗。',
      '完成英文文献精读笔记，关注研究设计和图像证据链。',
    ],
  },
];

export const skills = [
  { group: '细胞实验', items: ['细胞培养', '免疫荧光染色', '划痕实验', '显微成像'] },
  { group: '数据分析', items: ['ImageJ/Fiji', 'Python', 'R', 'GraphPad Prism'] },
  { group: '科研表达', items: ['文献检索', '实验记录', '学术海报', '中英文汇报'] },
  { group: '摄影流程', items: ['35mm 胶片', '街头纪实', '静物布光', '作品编排'] },
];

export const careerDirections = [
  {
    title: '科研助理 / RA',
    text: '希望加入重视实验规范、数据质量和跨学科协作的课题组。',
  },
  {
    title: '研究生申请',
    text: '关注细胞生物学、病理影像、转化医学与计算分析交叉方向。',
  },
  {
    title: '科研传播',
    text: '将视觉叙事能力用于科研图像整理、学术海报和公众科普内容。',
  },
];

export const photos = [
  {
    title: '雨后校园',
    year: '2026',
    film: 'Kodak Portra 400',
    src: '/assets/photo-campus.svg',
    alt: '雨后大学走廊的胶片风格照片',
  },
  {
    title: '标本与笔记',
    year: '2026',
    film: 'Fujifilm 400',
    src: '/assets/photo-lab-stilllife.svg',
    alt: '实验台上笔记本与植物标本的胶片风格静物照片',
  },
  {
    title: '海边蓝调',
    year: '2025',
    film: 'Cinestill 400D',
    src: '/assets/photo-coast.svg',
    alt: '蓝调时刻海边小镇街道的胶片风格照片',
  },
];
