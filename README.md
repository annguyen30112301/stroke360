# STROKE360 website

Website demo cho STROKE360 (song ngữ Việt / Anh). Xây bằng **Astro 7** (chạy kiểu SPA: bấm link không tải lại trang), **React 19**, **Tailwind CSS 4**, **Motion** và **Phosphor Icons**.

Trang chạy tại: https://annguyen30112301.github.io/stroke360/ (bản tiếng Anh ở `/en/`).

| Trang | Tiếng Việt | English |
|---|---|---|
| Về chúng tôi | `/` | `/en/` |
| Học | `/hoc/` | `/en/learn/` |
| Bài học | `/bai-hoc/a1/` | `/en/lessons/a1/` |
| Cộng đồng | `/cong-dong/` | `/en/community/` |
| Dịch vụ | `/dich-vu/` | `/en/services/` |
| Tác động | `/tac-dong/` | `/en/impact/` |
| Bệnh viện | `/benh-vien/` | `/en/hospitals/` |
| Liên hệ | `/lien-he/` | `/en/contact/` |
| Nhật ký | `/nhat-ky/` | `/en/diary/` |
| Tuyển dụng | `/tuyen-dung/` | `/en/careers/` |

Đường dẫn tiếng Anh đặt trong `src/lib/i18n.ts` (`routes`).

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

## Ảnh

Ảnh đặt ở `public/images/`, đúng tên file dưới đây (JPG). Chưa có ảnh thì trang hiện khung màu teal thay thế.

| File | Dùng ở | Ảnh đã tạo sẵn trong Canva |
|---|---|---|
| `hero-care.jpg` (4:5) | Trang chủ, Bệnh viện | https://www.canva.com/M/MAHXT61UAJA |
| `family-evening.jpg` (3:2) | Trang chủ, câu chuyện | https://www.canva.com/M/MAHXUC-9FO0 |
| `bedside-learn.jpg` (1:1) | Trang chủ, Học | https://www.canva.com/M/MAHXUKnvq1k |
| `home-rehab.jpg` (4:3) | Dịch vụ | https://www.canva.com/M/MAHXUMrd4-8 |

Ảnh do AI tạo, chỉ để minh họa cho bản demo. Thay bằng ảnh thật khi có.

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
  pages/       đường dẫn: /hoc/, /en/learn/, /bai-hoc/a1/…
  islands/     phần tương tác (React): chọn gói, câu hỏi nhanh, nhật ký, biểu mẫu…
  components/  khối dùng chung: Icon, Photo, PageIntro, Counter…
  layouts/     khung trang: header, menu, footer
  styles/      màu sắc, chữ, hiệu ứng
public/        logo, favicon, ảnh chia sẻ
docs/          bản build (đừng sửa tay)
```

