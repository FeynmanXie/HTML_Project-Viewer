# Projects Viewer - 项目查看器

这是一个用于展示HTML游戏和应用的项目查看器，支持iframe嵌入和全屏模式。目前展示了Feynman奔跑游戏。

## 功能特点

- 响应式设计，适配各种屏幕尺寸
- 项目列表展示，方便浏览
- 项目详情页面，展示项目信息
- 通过iframe嵌入外部HTML应用
- 支持全屏模式，提供更好的用户体验
- 提供iframe嵌入代码，方便在其他网站使用

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## 开始使用

1. 克隆项目

```bash
git clone https://github.com/yourusername/projects-viewer.git
cd projects-viewer
```

2. 安装依赖

```bash
npm install
```

3. 运行开发服务器

```bash
npm run dev
```

4. 构建生产版本

```bash
npm run build
```

5. 启动生产服务器

```bash
npm run start
```

## 项目结构

```
projects-viewer/
├── public/
│   └── projects/
│       └── feynman-running-game/  # 游戏文件
│           ├── assets/            # 游戏资源
│           ├── embed.html         # iframe嵌入代码示例
│           ├── game.js            # 游戏逻辑
│           ├── index.html         # 游戏入口
│           └── style.css          # 游戏样式
├── src/
│   ├── app/                       # Next.js应用页面
│   │   ├── projects/              # 项目列表和详情页
│   │   ├── globals.css            # 全局样式
│   │   ├── layout.tsx             # 主布局
│   │   └── page.tsx               # 主页（重定向到项目列表）
│   ├── components/                # React组件
│   │   ├── Navbar.tsx             # 导航栏
│   │   ├── ProjectCard.tsx        # 项目卡片
│   │   └── ProjectViewer.tsx      # 项目查看器（iframe容器）
│   ├── data/                      # 数据文件
│   │   └── projects.ts            # 项目数据
│   └── types/                     # 类型定义
│       └── project.ts             # 项目类型
├── next.config.js                 # Next.js配置
├── package.json                   # 项目配置
├── tailwind.config.js             # Tailwind配置
├── postcss.config.js              # PostCSS配置
├── tsconfig.json                  # TypeScript配置
├── LICENSE                        # 许可证
└── README.md                      # 项目说明
```

## 添加新项目

1. 将新项目文件放入 `public/projects/你的项目名称/` 目录
2. 在 `src/data/projects.ts` 文件中添加项目信息
3. 确保新项目有一个 `index.html` 作为入口文件
4. 可选：为项目创建一个 `embed.html` 提供嵌入代码示例

## 自定义项目

您可以根据需要修改项目样式、布局或添加新功能。主要组件：

- `ProjectViewer.tsx`: 负责iframe展示和全屏功能
- `ProjectCard.tsx`: 项目卡片显示
- `projects/[id]/page.tsx`: 项目详情页面

## 许可证

本项目使用 MIT 许可证 - 详情请查看 [LICENSE](./LICENSE) 文件
