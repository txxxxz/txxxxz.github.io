# Chendi Zhou Personal Site

一个可直接部署到 GitHub Pages 的双语个人主页，使用 `HTML + CSS + 少量 JavaScript` 构建，定位更接近 AI researcher / AI builder 的个人作品集，而不是传统简历模板。

## 文件结构

- `index.html`：页面结构
- `style.css`：视觉样式与响应式布局
- `script.js`：中英文内容、链接配置、语言切换逻辑
- 简历 PDF 默认不提交到公开仓库，避免公开手机号等个人信息

## 本地预览

直接双击 `index.html` 即可打开页面。

如果你想更接近 GitHub Pages 的访问方式，也可以用固定目录启动一个本地静态服务器：

```bash
python3 -m http.server 8025 --bind 127.0.0.1 --directory /Users/zhouchendi/Desktop/StartOribit/CV
```

然后访问：

```text
http://127.0.0.1:8025
```

如果 `8025` 被占用，可以把命令里的端口换成其他空闲端口，例如 `8030`。

## 部署到 GitHub Pages

1. 新建一个 GitHub 仓库。
2. 将当前目录中的 `index.html`、`style.css`、`script.js`、`README.md` 和 `.gitignore` 上传到仓库根目录。
3. 打开仓库的 `Settings -> Pages`。
4. 在 `Build and deployment` 中选择 `Deploy from a branch`。
5. 选择 `main` 分支和 `/ (root)` 目录。
6. 保存后等待 GitHub Pages 完成发布。
7. 发布完成后，站点会出现在类似 `https://yourname.github.io/repository-name/` 的地址。

如果你希望主页挂在 `https://yourname.github.io/`，可以把仓库命名为 `yourname.github.io`。

## 如何修改个人信息

主要修改入口在 `script.js`。

你可以优先查看这两个对象：

- `SITE_CONFIG`
- `SITE_CONTENT`

### 修改链接

在 `script.js` 顶部找到：

```js
const SITE_CONFIG = {
  links: {
    email: "mailto:...",
    github: "https://github.com/txxxxz",
    linkedin: "",
    resume: "",
  },
};
```

你可以在这里替换：

- `email`
- `github`
- `linkedin`
- `resume`

如果你确认要公开简历 PDF，可以把 PDF 放入仓库并同步修改 `resume` 的路径；默认建议先不要公开包含手机号的版本。

### 修改名字与页头身份信息

在 `SITE_CONTENT.en.brand` 和 `SITE_CONTENT.zh.brand` 中修改品牌区文字。

Hero 区域的主标题、副标题和简介位于：

- `SITE_CONTENT.en.hero`
- `SITE_CONTENT.zh.hero`

## 如何更新中英文内容

所有主要中英文文案都统一放在 `script.js` 的 `SITE_CONTENT` 对象中，没有散落在 HTML 模板里。

你可以直接修改：

- `hero`
- `profile`
- `research`
- `projects`
- `experience`
- `skills`
- `thinking`
- `footer`

### 新增项目

在下面这个数组里继续添加对象即可：

```js
SITE_CONTENT.en.projects.items
SITE_CONTENT.zh.projects.items
```

每个项目包含：

- `title`
- `subtitle`
- `bullets`
- `tags`
- `visual`

建议中英文版本分别单独写，不要逐句硬翻，这样阅读体验会更自然。

## 如何调整样式

样式主要集中在 `style.css` 顶部的 CSS 变量：

```css
:root {
  --paper: #f7f3ea;
  --ink: #171717;
  --muted: #69645d;
  --accent: #315f6d;
}
```

如果你想继续微调视觉风格，优先改这些变量：

- 颜色
- 边框透明度
- 分隔线强度
- 字体与行距
- 页面最大宽度

## 备注

- 默认语言会优先读取浏览器语言；如果用户手动切换，会记住上一次选择。
- 页面已经包含桌面端和移动端适配。
- 页面不依赖构建工具，可直接放到 GitHub Pages 使用。
