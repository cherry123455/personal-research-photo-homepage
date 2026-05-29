# 个人科研与摄影主页

一个使用 React + Vite 搭建的个人主页示例，包含首页、关于我、科研经历、实验技能、职业方向、摄影作品和联系方式。当前内容全部来自本地假数据，不依赖后端或数据库。

## 本地运行

```bash
npm install
npm run dev
```

启动后打开终端里显示的本地地址，通常是 `http://localhost:5173`。

## 常用命令

```bash
npm run build
npm run preview
```

## Vercel 部署配置

本项目已按 Vercel + Vite 的静态前端部署格式整理：

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js Version: `22.x`

这些设置已写入 `vercel.json` 和 `package.json`，通常导入 Vercel 后保持默认即可。

## 上传到 GitHub

如果只上传这个主页项目，建议在当前目录初始化仓库：

```bash
git init
git add .
git commit -m "Initial personal homepage"
git branch -M main
git remote add origin https://github.com/<your-name>/<your-repo>.git
git push -u origin main
```

如果你要把整个上层文件夹作为一个仓库上传，请在 Vercel 导入项目时把 Root Directory 设置为 `personal-research-photo-homepage`。

## 部署到 Vercel

1. 打开 Vercel 控制台并选择 Add New Project。
2. 选择刚上传的 GitHub 仓库。
3. Framework Preset 选择 `Vite`。
4. 确认 Build Command 是 `npm run build`。
5. 确认 Output Directory 是 `dist`。
6. 点击 Deploy。

后续只要推送到 GitHub 的 `main` 分支，Vercel 会自动重新部署。

## 内容位置

- 页面组件：`src/App.jsx`
- 本地假数据：`src/data/profile.js`
- 样式：`src/styles.css`
- 图片素材：`public/assets/`
