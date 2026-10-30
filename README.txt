明道國小家長會網站 V2｜多頁式・莫蘭迪綠

一、網站結構
index.html          首頁
about.html          認識家長會
organization.html  組織與幹部
volunteer.html      志工團
contact.html        家長反應（SurveyCake）
faq.html            常見問題
documents.html      法規章程
records.html        會議與財務
style.css           全站樣式
script.js           手機選單與頁面功能
assets/             圖片與 Logo

二、如何編輯
1. 文字：直接用 VS Code、記事本等開啟對應 .html，搜尋要修改的文字。
2. 圖片：將新的圖片放到 assets/，再修改 HTML 中的圖片檔名；首頁校舍預設圖為 assets/school-hero.jpg。
3. 按鈕：搜尋 <a class="btn ...">，修改顯示文字與 href。
4. 一般連結：修改 <a href="...">。
5. 人員名單：organization.html 直接修改姓名、職稱與聯絡方式。
6. PDF：建立 files/ 資料夾，把正式 PDF 放入後，將 documents.html 的「PDF待放置」連結改成 files/檔名.pdf。
7. 最新消息：首頁 index.html 的「最新消息」區塊可直接增刪。

三、SurveyCake 串接
SurveyCake 官方提供「問卷連結」及「嵌入碼」。若要讓問卷直接顯示在家長會網站：
1. 登入 SurveyCake。
2. 打開已完成的問卷。
3. 進入「分享問卷／發布問卷」。
4. 複製「嵌入碼」。
5. 打開 contact.html。
6. 找到「請貼上 SurveyCake 嵌入碼」區塊。
7. 用你的 iframe 程式碼取代該 placeholder。
若只想用按鈕跳到 SurveyCake，也可以直接把 contact.html 的按鈕 href 改成問卷網址。

四、部署
這是一套純 HTML/CSS/JS 靜態網站，不需要資料庫即可放到一般網站空間、GitHub Pages、Azure Static Web Apps 等。
若未來希望做到「後台登入後直接修改文字、圖片、連結」，則需要再加 CMS 或管理後台；目前 V2 是最容易自行修改檔案的版本。

五、設計方向
依照提供的參考圖重新整理為：
- 真正多頁式網站
- 柔和莫蘭迪綠／灰綠／米白
- 首頁保留「快速服務、最新消息、公開透明」等區塊
- 手機版響應式
- 導覽列、按鈕、卡片、頁尾一致
- 家長反應頁預留 SurveyCake iframe 嵌入位置
