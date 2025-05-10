# Projects Viewer

这是一个用于展示HTML游戏和应用的项目查看器，支持iframe嵌入和全屏模式。

## 功能

- 项目列表展示
- 项目详情查看
- 通过iframe嵌入外部HTML应用
- 支持全屏模式体验
- 响应式设计

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

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

- `src/app/` - Next.js应用页面
- `src/components/` - React组件
- `src/data/` - 示例项目数据
- `src/types/` - TypeScript类型定义

## 添加新项目

编辑 `src/data/projects.ts` 文件，添加新的项目对象到数组中：

```typescript
{
  id: '6',
  title: '新项目',
  description: '项目描述',
  thumbnail: '项目缩略图URL',
  url: '项目URL',
  tags: ['标签1', '标签2'],
  author: '作者',
  createdAt: '创建日期',
}
```

## 许可证

MIT
