# 甜點工坊

甜點設計小遊戲。支援蛋糕、杯子蛋糕、派／塔、芭菲、布丁與鬆餅；可以旋轉觀看、切換剖面、添加水果與裝飾，匯出帶相框的 PNG。

## 技術與檔案

本專案是純靜態網站，不需要 npm install、編譯或後端。Three.js r160 已放在專案內。

| 路徑 | 用途 |
| --- | --- |
| `dist/index.html` | 網頁入口與介面結構 |
| `dist/style.css` | 配色、版面、響應式設定 |
| `dist/app.js` | 3D 模型、製作流程、互動與存檔 |
| `dist/frames.js` | 相框繪製；預覽與匯出共用 |
| `dist/assets/` | 遊戲圖片素材，需完整保留 |
| `dist/vendor/` | Three.js 與其授權聲明 |
| `.github/workflows/pages.yml` | 推送 main 後檢查語法並部署 dist |

## 1. 在 Windows 本機執行

將下載包解壓縮。用 VS Code 開啟包含本 README 的 `petit-gateau` 資料夾，在終端機選 PowerShell。

已安裝 Python 時：

```powershell
py -m http.server 8000 --bind 127.0.0.1 --directory dist
```

如果你的 Python 指令是 `python`，可將 `py` 改為 `python`。在瀏覽器開啟 http://localhost:8000 ，停止服務用 Ctrl+C。

不要直接雙擊 index.html：專案使用 ES modules，需要透過 HTTP 開啟。瀏覽器必須支援並啟用 WebGL。

## 2. 建立 GitHub repository

在 GitHub 右上角「＋」選 New repository：

- Repository name：`petit-gateau`
- Description：`A soft vintage 3D dessert-making playground.`
- 使用免費 GitHub Pages 路線時選 Public；這表示程式與素材也會公開。
- 不勾選 Add README、不新增 .gitignore、不選 License，因為本機已有檔案。

建立後，複製 GitHub 顯示的 HTTPS repository URL。公開 repository 與選擇開源授權是兩回事；本包沒有替你的原創程式及美術選定授權。Three.js 授權已另附。

## 3. 初始化並上傳

先確認 PowerShell 位於包含 README.md、dist、.github 的資料夾，而不是 dist 裡面。

```powershell
git --version
git init
git branch -M main
git add .
git status
git commit -m "Initial dessert studio"
```

如果 Git 要求身分，將以下兩個示例值換成你希望顯示的提交者名稱與 GitHub 提交電子郵件，再重試 commit；可以使用 GitHub Settings → Emails 提供的 noreply 位址。

```powershell
git config user.name "YOUR_NAME"
git config user.email "YOUR_COMMIT_EMAIL"
```

將下列 URL 換成你剛建立的 repository HTTPS URL：

```powershell
git remote add origin https://github.com/YOUR_USERNAME/petit-gateau.git
git push -u origin main
```

按 Git 顯示的方式完成 GitHub 登入，不要將密碼或 token 寫進程式或 repository。若 `git` 不存在，先從 https://git-scm.com/downloads/win 安裝 Git for Windows，完成後重開 VS Code。

## 4. 開啟自動部署

1. Repository → Settings → Pages。
2. 在 Build and deployment 的 Source 選 **GitHub Actions**。
3. 本包已附 workflow，不用另外新增範本。
4. 前往 Actions → Deploy dessert studio to GitHub Pages → Run workflow，選 main 執行。
5. 等待綠色勾勾。從部署結果或 Settings → Pages → Visit site 開啟正式網址。

第一次 push 若發生在 Pages 啟用前，可能部署失敗；完成設定後重新執行即可。後續 push 到 main 會自動部署。

一般專案網址形式為 `https://YOUR_USERNAME.github.io/petit-gateau/`，實際網址以 GitHub 回傳結果為準。這不是已經替你部署好的網址。

## 5. 日常修改與管理

每次改動先本機試玩，確認後：

```powershell
git status
git diff
git add dist/app.js dist/style.css
git commit -m "Improve dessert decoration controls"
git push
```

`git add` 後面的檔案要改成這次真正修改的檔案；可先用 `git status` 查看。變更相框就加入 `dist/frames.js`。

- `commit`：在自己的電腦記錄一個版本。
- `push`：將版本送到 GitHub。
- Actions：檢查 JavaScript 語法，將 dist 發佈至 Pages。
- Pages：提供別人能打開的遊戲網址。

大型改動建議先開分支：

```powershell
git switch -c feature/new-dessert
```

修改、測試、commit 後：

```powershell
git push -u origin feature/new-dessert
```

到 GitHub 建立 Pull Request，檢查差異並合併到 main 後才會更新網站。非 main 分支不會由目前的 workflow 部署。

## 6. 版本回復

```powershell
git log --oneline -5
```

找到需要撤回的普通提交 SHA，將示例替換為該 SHA：

```powershell
git revert COMMIT_SHA
git push
```

這會新增一個反向提交，保留歷史並重新部署。若有衝突，先處理衝突；若要中止這次 revert，可用 `git revert --abort`。合併提交的撤回需另行處理，不要直接套用普通提交指令。

## 7. 常見問題

- **404**：確認 Pages Source 是 GitHub Actions、Action 成功、artifact 上傳路徑是 dist。不要把整個 repository 根目錄當成網站入口。
- **只看到轉圈／3D 不出現**：檢查 F12 Console、WebGL／硬體加速是否可用，並確認 assets 與 vendor 有完整上傳。
- **圖片消失**：路徑與檔名大小寫須一致，保留相對路徑；不要改成 `/assets/...`，否則 GitHub 專案子路徑可能找不到素材。
- **更新沒出現**：先看 Actions 是否成功，再按 Ctrl+F5 重新載入。
- **換網址後草稿不見**：草稿存於 localStorage，依瀏覽器與網站來源分開。現有託管網址、localhost、GitHub Pages 不共用草稿。
- **換裝置沒同步**：目前沒有帳號與雲端存檔，請下載 PNG 保存成品。清除網站資料會移除本機草稿。
- **後續讓 AI 修改**：請提供這個 GitHub repository 或同一份本機資料夾，避免只更新原託管網站而沒有同步你的 GitHub 版本。

## 版本與驗證

此包取自甜點與相框版本，來源提交 `7c4f1d4333b722d29a9bd17f3871691d731bff3e`。
保留遊戲檔案，另外加入 GitHub Pages workflow、文件與第三方授權；沒有附帶原託管環境的 Git 記錄或部署設定。

JavaScript 語法、模型幾何、獨立存檔與照片合成流程已有檢查。當時測試瀏覽器無法啟用 WebGL，尚未完整驗證 3D 視覺。GitHub Actions 是否能在你的帳號部署，需在建立 repository 並啟用 Pages 後確認。

## 官方參考

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://github.com/mrdoob/three.js/blob/r160/LICENSE
