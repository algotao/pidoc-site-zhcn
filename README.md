# Raspberry Pi 文档（中文版）

[项目站点](https://pidoc.cn)

**简介：** 本仓库是 Raspberry Pi 官方文档的中文翻译与本地化版本，内容基于官方英文文档并做适当本地化处理，目标是为中文读者提供便捷的参考资料与示例。

**兼容性：** 本项目基于 Docusaurus 构建，需要 Node.js >= 18 环境。

**快速开始：**

- 安装依赖：

```
npm install
```

- 本地开发（启动热重载服务器）：

```
npm run start
```

- 生成生产构建：

```
npm run build
```

- 本地预览构建：

```
npm run serve
```

**常用脚本（在仓库根目录）：**

- `npm run start`：Docusaurus 本地开发服务器
- `npm run build`：生成静态站点
- `npm run serve`：本地预览生成后的静态站点
- `npm run deploy`：部署到 GitHub Pages（如配置）

**项目重要文件与目录：**

- 配置： [docusaurus.config.js](docusaurus.config.js)
- 侧边栏与路由： [sidebars.js](sidebars.js)
- 文档内容： [docs/](docs/)
- 自动或脚本生成示例： [gen_program.sh](gen_program.sh)
- 静态资源： [static/](static/)

如果你要编辑或新增文档，请优先修改 `docs/` 下的 `.md` / `.mdx` 文件，并确保 frontmatter 正确；若新增页面需在侧边栏显示，请同步更新 [sidebars.js](sidebars.js)。

**翻译与生成器注意事项：**

- 仓库中部分 `program/` 下以 `_` 开头的页面为生成产物，修改前请查阅 `gen_program.sh` 或维护脚本，必要时更新生成器而非直接覆盖产物。
- 请勿修改 `docusaurus.config.js` 中的敏感配置（例如 Typesense 的 `apiKey`）除非你同时管理相应的安全存储与部署流程。

**贡献指南：**

1. Fork 本仓库并新建分支。
2. 编辑或新增 `docs/` 下的文档，遵循现有翻译风格与术语。
3. 提交 PR，描述变更并附上预览截图/构建说明（如需要）。

详见仓库内的 `CONTRIBUTING` 文档（如存在）或直接在 Issues 中讨论译文与结构调整。

**常见问题（FAQ）：**

- 问：如何本地验证修改？
- 答：运行 `npm install` 后执行 `npm run start`，在浏览器中打开本地服务并查看页面渲染情况。

**许可证：**

本项目遵循 [LICENSE](LICENSE) 中声明的许可（通常为 CC-BY-SA 或与上游一致），请在发布或重用内容时遵守许可条款。

**联系方式：**

如果需要讨论翻译、报错或协作，请在仓库 Issues 中提问，或加入项目交流Q群 498908352。

(本 README 已扩展包含快速上手与维护指南，欢迎提出改进建议。)