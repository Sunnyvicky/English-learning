# Lifelong English Learning

英文學習紀錄與複習管理系統。

## 目前功能
- 學習總覽：課程數、累積時間、詞彙數與四階段學習架構
- 新增／編輯／刪除每日學習紀錄
- 記錄詞彙、中文意思、發音、搭配詞／例句
- 記錄聽力、發音、文法、口說、待複習與下一堂目標
- 歷史紀錄搜尋與階段篩選
- JSON 匯出與匯入備份
- PWA 基礎設定與離線快取

## 資料儲存說明
目前資料儲存在使用者裝置的瀏覽器 localStorage。GitHub Pages 是靜態網站代管，不會自動同步不同裝置。跨裝置同步將在下一階段整合 Supabase（含登入、資料庫與存取權限）；在同步功能完成前，請定期匯出 JSON 備份。

## GitHub Pages
在 Repository 的 **Settings → Pages**：
1. Build and deployment 選擇 **Deploy from a branch**
2. Branch 選擇 **main**，資料夾選 **/(root)**
3. 儲存後等待部署完成

網站網址通常為 `https://sunnyvicky.github.io/English-learning/`。

## 後續規劃
- Supabase 跨裝置同步與帳號登入
- 間隔複習（例如 Day 1、2、4、7、14、30）
- 每週／每月學習分析與能力評估
- 學習紀錄匯出與長期進度追蹤
