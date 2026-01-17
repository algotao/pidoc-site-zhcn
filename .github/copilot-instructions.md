<!-- Copilot / AI agent instructions for pidoc-site-zhcn -->
# 快速上手 — AI 代理指南

目的：帮助自动化/辅助编码代理快速理解本仓库结构、常用命令、约定与重要集成点，以便安全且高效地修改文档站点。

- **项目类型**：Docusaurus 文档网站（多语言/中文站），仓库入口脚本见 `package.json`。
- **Node 版本**：在 `package.json` 中声明 `node >= 18`。

必备命令（在仓库根目录）：

- **安装依赖**：`npm install`
- **本地开发**：`npm run start` （运行 Docusaurus 开发服务器）
- **生产构建**：`npm run build`
- **本地预览构建**：`npm run serve`
- **部署（GH Pages）**：`npm run deploy`（依赖 docusaurus 配置中 `organizationName` / `projectName`）

关键位置与约定：

- 文档内容目录： [docs/](docs/) — 主要文档均为 `.mdx` 或 `.md` 文件，子目录按主题组织（如 `computers/`, `program/`, `product/`）。
- 额外 docs 实例： [gpiozero/](gpiozero/) —— 使用额外 plugin（请参阅 `docusaurus.config.js` 中的 plugin 配置）。
- 代码示例/生成页面：`docs/program/` 下含大量以 `_` 开头命名的 `.mdx`（例如 `_gpio_python_led_blink_blink1.py.mdx`），这些通常由脚本或采集器生成/维护。
- 栏目配置：`_category_.json` 用于控制侧边栏分组（示例见 `docs/program/_category_.json`）。
- 侧边栏与路由：`sidebars.js` 控制侧边栏结构，`docusaurus.config.js` 控制站点（标题/导航/插件/主题等）。
- 静态资源：`static/` 下托管自定义脚本、图片、favicon 等。
- 组件与样式：React 组件与 CSS 在 `src/components/` 和 `src/css/`。

工作流程要点（自动化修改时关注）：

- 修改文档内容时，直接编辑相应 `docs/...` 下的 `.mdx` 文件并确保不破坏 frontmatter（若存在）。
- 若新增页面需更新侧边栏，请同步修改 `sidebars.js`（该仓库侧边栏使用手动/代码方式混合定义）。
- 对于批量/自动生成的 program 页面，请检查 `gen_program.sh`（或其它生成脚本），不要直接覆盖生成器产物，除非同步更新生成脚本。
- 搜索功能：Typesense 配置位于 `docusaurus.config.js`（有硬编码的 `apiKey` 与服务器地址），自动变更或查询时注意不要泄露/提交敏感密钥。

代码样式与内容模式：

- 文档中常用 mdx 语法混合：包含代码块（bash、python、c/c++、cmake 等）。`docusaurus.config.js` 已在 `prism.additionalLanguages` 中声明多种语言。
- 保持中文翻译风格与术语一致：仓库来源为 Raspberry Pi 官方英文文档，翻译保留术语（例如 “GPIO”, “Compute Module” 等），修改时参考同目录下现有条目以保持一致。

注意事项（给 AI 代理的约束）：

- 不要修改 `docusaurus.config.js` 中的 Typesense `apiKey` 或发布相关密钥，除非显式被授权并同时更新秘密存储位置。
- 对自动生成文件（例如以 `_` 开头或在 `program/` 中大量重复命名的文件）优先确认它们的生成来源，再决定是修改生成器还是修改产物。
- 任何页面变更推送前，建议运行 `npm run build` 本地构建一次以捕捉潜在的构建错误或语法问题。

快速示例（编辑文档与本地验证）

1. 编辑：修改 `docs/computers/getting-started.mdx`。
2. 本地启动：`npm run start` → 在浏览器验证页面渲染与侧边栏。
3. 构建验证：`npm run build` → `npm run serve` 本地查看构建结果。

参考文件：

- 配置与站点： [docusaurus.config.js](docusaurus.config.js)
- 运行脚本： [package.json](package.json)
- 侧边栏： [sidebars.js](sidebars.js)
- 文档根目录： [docs/](docs/)
- 程序示例： [docs/program/](docs/program/)
- 生成器与发布脚本： [gen_program.sh](gen_program.sh) 、 [pub.sh](pub.sh)

如果本说明中有不清楚或需要补充的仓库细节，请告诉我你希望 AI 代理额外了解的点（例如 CI 流程、部署目标或私有服务凭证位置），我会把它合并进本文件。
