# Vue 应用示例

这是一个基于 Vite 的 Vue 3 应用，展示如何在 monorepo 中使用共享包。

## 🚀 快速开始

### 安装依赖
```bash
cd apps/vue
pnpm install
```

### 启动开发服务器
```bash
pnpm dev
```
访问 http://localhost:3002

### 构建生产版本
```bash
pnpm build
```

### 预览构建结果
```bash
pnpm preview
```

## 📦 功能特性

- **Vue 3 Composition API** - 使用 `<script setup>` 语法
- **TypeScript 支持** - 完整的类型安全
- **Vite 构建** - 快速的开发体验
- **Monorepo 集成** - 使用 workspace 中的包
- **响应式设计** - 美观的 UI 界面

## 🔗 包引用

### Utils 包
```typescript
import { add, subtract, multiply, divide } from 'utils'
```
- 数学运算函数
- 纯函数，无副作用
- 可直接在 Vue 中使用

### UI 包
```typescript
// 注意：UI 包中的 React 组件不能直接在 Vue 中使用
// 这里展示的是 Utils 包的使用效果
```

## 🏗️ 项目结构

```
apps/vue/
├── src/
│   ├── App.vue          # 主应用组件
│   ├── main.ts          # 应用入口
│   └── vite-env.d.ts    # Vite 类型声明
├── public/               # 静态资源
├── index.html            # HTML 入口
├── vite.config.ts        # Vite 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目配置
```

## ⚙️ 技术栈

- **Vue**: 3.2.47
- **Vite**: 4.1.4
- **TypeScript**: 4.9.5
- **构建工具**: Vite
- **包管理**: pnpm workspace

## 🎯 演示内容

1. **Utils 包演示** - 展示数学运算函数
2. **UI 包说明** - 解释 React 组件在 Vue 中的限制
3. **Vue 特性演示** - 计数器组件展示 Vue 的响应式特性

## 📝 注意事项

- Vue 应用使用 Vite 构建，与 React 应用的 Webpack 构建方式不同
- UI 包中的 React 组件不能直接在 Vue 中使用
- Utils 包中的纯函数可以在任何 JavaScript/TypeScript 环境中使用
- 端口配置为 3002，避免与 React 应用（3000）和 UI 演示（3001）冲突 