# Monorepo 前端架构项目

一个基于 pnpm workspace 的现代化前端 monorepo 项目，包含 UI 组件库、工具函数库、React 应用和 Vue 应用。

## 🏗️ 项目架构

```
monorepo/
├── packages/           # 共享包
│   ├── ui/            # UI 组件库
│   │   ├── src/       # 源码
│   │   ├── dist/      # 构建输出
│   │   └── dist-demo/ # 演示页面构建输出
│   └── utils/         # 工具函数库
│       ├── src/       # 源码
│       └── dist/      # 构建输出
├── apps/              # 应用
│   ├── react/         # React 应用
│   │   ├── src/       # 源码
│   │   └── dist/      # 构建输出
│   └── vue/           # Vue 应用
│       ├── src/       # 源码
│       └── dist/      # 构建输出
├── package.json       # 根包配置
├── pnpm-workspace.yaml # pnpm 工作空间配置
├── turbo.json         # Turbo 构建配置
└── pnpm-lock.yaml     # 依赖锁定文件
```

## 🚀 快速开始

### 1. 安装依赖

```bash
# 在根目录安装所有依赖
cd monorepo
pnpm install:all
```

### 2. 启动项目

#### 启动 React 应用
```bash
cd apps/react
pnpm dev
# 访问 http://localhost:3000
```

#### 启动 Vue 应用
```bash
cd apps/vue
pnpm dev
# 访问 http://localhost:3002
```

#### 启动 UI 组件库演示
```bash
cd packages/ui
pnpm dev
# 访问 http://localhost:3001
```

### 3. 构建项目

#### 传统方式构建
```bash
# 构建所有包（串行）
pnpm build:all

# 构建特定包
pnpm build:ui      # 构建 UI 组件库
pnpm build:utils   # 构建工具函数库
pnpm build:react   # 构建 React 应用
pnpm build:vue     # 构建 Vue 应用
```

#### 使用 Turbo 构建（推荐）
```bash
# 并行构建所有包
pnpm turbo:build

# 启动所有开发服务器
pnpm turbo:dev

# 清理所有构建文件
pnpm turbo:clean
```

## 📦 包说明

### UI 组件库 (`packages/ui`)
- **功能**: React 组件库，提供可复用的 UI 组件
- **技术栈**: React + TypeScript + Webpack
- **主要组件**: HButton（按钮组件）
- **特点**: 支持独立运行演示页面

### 工具函数库 (`packages/utils`)
- **功能**: 通用工具函数集合
- **技术栈**: TypeScript
- **主要函数**: add, subtract, multiply, divide
- **特点**: 纯函数，无副作用

### React 应用 (`apps/react`)
- **功能**: 示例应用，展示如何使用 UI 和 utils 包
- **技术栈**: React + TypeScript + Webpack + Tailwind CSS
- **特点**: 引用 workspace 中的包

### Vue 应用 (`apps/vue`)
- **功能**: 示例应用，展示如何在 Vue 中使用 utils 包
- **技术栈**: Vue 3 + TypeScript + Vite
- **特点**: 引用 workspace 中的包

## ⚙️ 技术栈

- **包管理**: pnpm + workspace
- **构建工具**: Webpack 5 (React) + Vite (Vue)
- **开发语言**: TypeScript
- **前端框架**: React 18 + Vue 3
- **样式方案**: Tailwind CSS + PostCSS
- **开发服务器**: Webpack Dev Server + Vite Dev Server
- **构建优化**: Turbo

## 🚀 Turbo 构建系统

### 什么是 Turbo？

Turbo 是一个高性能的构建系统，专为 monorepo 设计。它通过智能缓存、并行构建和增量构建来显著提升构建速度。

### 核心特性

- **并行构建**: 没有依赖关系的包同时构建
- **智能缓存**: 缓存构建结果，避免重复工作
- **依赖管理**: 自动分析包之间的依赖关系
- **增量构建**: 只重新构建发生变化的包

### 使用方法

```bash
# 并行构建所有包
pnpm turbo:build

# 启动所有开发服务器
pnpm turbo:dev

# 构建特定包
turbo build --filter=utils

# 构建包及其依赖
turbo build --filter=react...

# 清理缓存
pnpm turbo:clean
```

## ⚡ 构建性能对比

### 传统方式 vs Turbo 方式

我们对比了两种构建方式的性能表现：

| 构建方式 | 总时间 | 用户时间 | 系统时间 | CPU 使用率 | 性能表现 |
|----------|--------|----------|----------|------------|----------|
| **传统方式** | `4.781s` | `6.36s` | `0.89s` | `151%` | 基准线 |
| **Turbo 方式** | `4.037s` | `6.10s` | `0.98s` | `175%` | **提升 15.5%** |

### 构建流程对比

#### 传统方式（串行构建）
```bash
# 构建流程：一个接一个
UI 包 → Utils 包 → React 应用 → Vue 应用

# 时间分布
UI 包: 0.1s
Utils 包: 0.1s  
React 应用: 1.257s
Vue 应用: 0.339s
总时间: 4.781s（包含切换开销）
```

#### Turbo 方式（并行构建）
```bash
# 构建流程：并行执行
UI 包     → 并行执行
Utils 包  → 并行执行  
React 应用 → 并行执行
Vue 应用  → 并行执行

总时间: 4.037s（并行执行 + 并行开销）
```

### 为什么 Turbo 提升有限？

#### 当前项目特点：
1. **项目规模小**: 只有 4 个包
2. **构建时间短**: 总构建时间不到 5 秒
3. **依赖关系简单**: 没有复杂的依赖链

#### Turbo 的优势在大型项目中更明显：
- **10+ 个包**: 提升可达 50-80%
- **复杂依赖**: 智能依赖管理
- **缓存收益**: 增量构建显著提升

### 实际观察到的改进：

#### 并行执行：
- 所有包同时开始构建
- 没有等待前一个包完成
- CPU 使用率从 151% 提升到 175%

#### 智能依赖管理：
- 自动识别依赖关系
- 按正确顺序构建
- 避免依赖问题

## 🔧 开发指南

### 添加新包

1. 在 `packages/` 目录下创建新包
2. 在根目录 `package.json` 中添加构建脚本
3. 在 `pnpm-workspace.yaml` 中注册新包

### 包间依赖

使用 `workspace:*` 协议：
```json
{
  "dependencies": {
    "ui": "workspace:*",
    "utils": "workspace:*"
  }
}
```

### 开发模式

```bash
# 监听模式（TypeScript 编译）
pnpm dev

# 开发服务器（Webpack/Vite）
pnpm start
```

## ⚠️ 注意事项

### 1. 依赖管理
- **不要**在子包中重复安装根目录已有的依赖
- **使用** `peerDependencies` 声明 React 等框架依赖
- **优先**使用 `workspace:*` 引用内部包

### 2. 构建顺序
- `utils` 包必须先构建（被其他包依赖）
- `ui` 包依赖 `utils`，需要后构建
- `react` 和 `vue` 应用最后构建

### 3. 模块解析
- Webpack 别名配置要与 TypeScript 路径映射保持一致
- 避免循环依赖
- 确保导出路径正确

### 4. Turbo 配置
- 确保 `turbo.json` 中的 `outputs` 配置正确
- 正确配置 `dependsOn` 依赖关系
- 敏感信息不要放在缓存中

## 🚨 常见踩坑点

### 1. 模块导入失败
**问题**: `Module not found: Error: Can't resolve 'ui'`
**原因**: Webpack 别名配置错误或 ts-loader 包含路径不正确
**解决**: 检查 `webpack.config.js` 中的 alias 和 include 配置

### 2. TypeScript 编译错误
**问题**: `TS2584: Cannot find name 'console'`
**原因**: tsconfig.json 中缺少 DOM 库
**解决**: 在 `lib` 数组中添加 `"DOM"`

### 3. 组件渲染异常
**问题**: `Objects are not valid as a React child`
**原因**: 组件导出/导入链断裂或 React 运行时上下文不匹配
**解决**: 检查组件导出链和确保 React 版本一致

### 4. 样式不生效
**问题**: Tailwind CSS 类名无效
**原因**: PostCSS 配置错误或 CSS 加载器配置问题
**解决**: 检查 webpack 中的 CSS 相关 loader 配置

### 5. 热重载失效
**问题**: 代码修改后页面不自动刷新
**原因**: Webpack Dev Server 配置错误
**解决**: 检查 `webpack.config.js` 中的 devServer 配置

### 6. 依赖重复安装
**问题**: 多个 `node_modules` 目录
**原因**: 没有正确使用 pnpm workspace
**解决**: 在根目录使用 `pnpm install:all` 统一安装

### 7. Turbo 配置问题
**问题**: `pipeline` 字段错误
**原因**: Turbo 2.0 中 `pipeline` 已重命名为 `tasks`
**解决**: 更新 `turbo.json` 配置

## 🛠️ 故障排除

### 清理重建
```bash
# 清理所有构建文件
pnpm turbo:clean

# 重新安装依赖
pnpm install:all

# 重新构建
pnpm turbo:build
```

### 检查依赖
```bash
# 检查依赖树
pnpm list --depth=0

# 检查特定包的依赖
pnpm list --filter ui
```

### 调试构建
```bash
# 查看 Webpack 构建详情
cd apps/react
pnpm build --verbose

# 查看 Turbo 构建详情
turbo build --summary
```

### Turbo 故障排除
```bash
# 缓存问题
turbo clean
turbo build --force

# 依赖问题
turbo graph
turbo build --dry-run

# 性能分析
turbo build --profile=build-profile.json
```

## 📊 缓存机制

### 本地缓存
- 位置：`node_modules/.cache/turbo`
- 内容：构建输出、依赖图、任务结果
- 清理：`turbo clean`

### 缓存键
- 文件内容哈希
- 依赖关系
- 环境变量
- 任务配置

## 🧹 代码质量工具

### ESLint 配置

ESLint 是一个代码质量检查工具，用于检查代码中的潜在问题和错误。

#### 配置文件：`.eslintrc.cjs`
```javascript
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
    project: ['./apps/**/tsconfig.json', './packages/**/tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {
        project: ['./apps/**/tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': ['error'],
    'react/react-in-jsx-scope': 'off',
    'import/order': [
      'warn',
      {
        groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
  },
  ignorePatterns: [
    '**/dist/**',
    '**/dist-demo/**',
    '**/node_modules/**',
    '**/*.config.js',
    '**/*.config.cjs',
  ],
};
```

#### 主要特性：
- **TypeScript 支持**：使用 `@typescript-eslint/parser` 解析 TypeScript 代码
- **React 规则**：包含 React 和 React Hooks 的最佳实践规则
- **导入排序**：自动整理 import 语句的顺序和分组
- **Prettier 集成**：与 Prettier 配合，避免格式冲突

#### 忽略文件：`.eslintignore`
```
dist/
dist-demo/
node_modules/
*.d.ts
*.js
```

### Prettier 配置

Prettier 是一个代码格式化工具，用于统一代码风格。

#### 配置文件：`.prettierrc`
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

#### 配置说明：
- **`semi: true`** - 语句末尾添加分号
- **`singleQuote: true`** - 使用单引号
- **`trailingComma: "all"`** - 多行时末尾添加逗号
- **`printWidth: 100`** - 每行最大字符数
- **`tabWidth: 2`** - 缩进使用 2 个空格
- **`arrowParens: "always"`** - 箭头函数参数总是使用括号
- **`endOfLine: "lf"`** - 使用 LF 换行符

#### 忽略文件：`.prettierignore`
```
dist/
dist-demo/
node_modules/
*.min.js
*.bundle.js
*.d.ts
```

### 使用方法

```bash
# 检查代码质量
pnpm lint

# 自动修复 ESLint 问题
pnpm lint:fix

# 格式化代码
pnpm format

# 使用 Turbo 并行执行
pnpm turbo:lint
```

### 集成优势

1. **代码一致性**：确保所有开发者使用相同的代码风格
2. **质量保证**：自动检查代码中的潜在问题
3. **团队协作**：减少代码审查中的格式讨论
4. **自动化**：可以在 CI/CD 中自动运行
5. **编辑器集成**：支持 VS Code 等编辑器的实时提示

## 📚 相关资源

- [pnpm Workspace](https://pnpm.io/workspaces)
- [Webpack 5 文档](https://webpack.js.org/)
- [Vite 文档](https://vitejs.dev/)
- [TypeScript 配置](https://www.typescriptlang.org/docs/)
- [React 18 文档](https://react.dev/)
- [Vue 3 文档](https://vuejs.org/)
- [Turbo 官方文档](https://turbo.build/repo/docs)

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 📄 许可证

ISC License

---

**提示**: 遇到问题时，请先检查本文档的注意事项和常见踩坑点部分！

**性能提升**: 使用 Turbo 后，构建速度将显著提升，特别是在大型 monorepo 中！ 