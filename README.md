# STROKE360 – website

Website demo cho STROKE360 (song ngữ Việt / Anh). Xây bằng **Astro 7**, **React 19**, **Tailwind CSS 4**, **Motion** và **Phosphor Icons**.

Trang chạy tại: https://annguyen30112301.github.io/stroke360/ (bản tiếng Anh ở `/en/`).

## Sửa nội dung (không cần biết code)

Toàn bộ chữ trên website nằm trong 3 file:

| File | Nội dung |
|---|---|
| `src/content/shared.ts` | Hotline, link nhóm Zalo, email (dùng chung cho cả hai ngôn ngữ) |
| `src/content/vi.ts` | Toàn bộ chữ tiếng Việt: các trang, bảng giá, bài học, câu chuyện, nhật ký |
| `src/content/en.ts` | Bản tiếng Anh, **cùng cấu trúc** với `vi.ts` |

- Chỉ sửa chữ trong dấu ngoặc kép `"…"`.
- Sửa tiếng Việt thì nhớ sửa luôn tiếng Anh ở cùng vị trí trong `en.ts`.
- Chữ trong `<b>…</b>` sẽ được in đậm.
- Thêm bài học: thêm một mục vào `lessons` ở **cả hai** file, đặt `ready: true` khi bài đã hoàn chỉnh.

Còn thiếu (TODO): số hotline thật và link nhóm Zalo thật trong `src/content/shared.ts`.

## Chạy thử trên máy

Cần Node.js 22.12 trở lên.

```bash
npm install        # lần đầu
npm run dev        # mở http://localhost:4321/stroke360/
```

## Đưa lên mạng (GitHub Pages)

Website được build ra thư mục `docs/` và commit vào repo.

```bash
npm run build      # kiểm tra lỗi + build ra docs/
git add -A && git commit -m "Cập nhật nội dung" && git push
```

Cài đặt một lần trên GitHub: **Settings → Pages → Source: Deploy from a branch → Branch: `main`, folder: `/docs`**.

## Cấu trúc

```
src/
  content/     nội dung (xem trên)
  views/       giao diện từng trang (dùng chung cho vi + en)
  pages/       đường dẫn: hoc.html, en/hoc.html, bai-hoc/A1.html…
  islands/     phần tương tác (React): chọn gói, câu hỏi nhanh, nhật ký, biểu mẫu…
  components/  khối dùng chung: Icon, PageHero, Counter…
  layouts/     khung trang: header, menu, footer
  styles/      màu sắc, chữ, hiệu ứng
public/        logo, favicon, ảnh chia sẻ
docs/          bản build (đừng sửa tay)
```

Đường dẫn cũ vẫn dùng được: `hoc.html`, `dich-vu.html`… và `bai-hoc.html?id=B3` tự chuyển sang `bai-hoc/B3.html`.
