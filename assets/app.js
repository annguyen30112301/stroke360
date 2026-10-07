/* Khung chung: header, footer, nút liên hệ, đếm số, tiến độ học */
(function () {
  const C = window.S360;
  const NAV = [
    ["index.html", "Về chúng tôi"],
    ["hoc.html", "Học"], ["cong-dong.html", "Cộng đồng"], ["dich-vu.html", "Dịch vụ"],
    ["tac-dong.html", "Tác động"], ["benh-vien.html", "Bệnh viện"], ["lien-he.html", "Liên hệ"]
  ];
  const here = location.pathname.split("/").pop() || "index.html";

  document.body.insertAdjacentHTML("afterbegin", `
  <header class="hdr"><div class="wrap">
    <a class="logo" href="index.html" aria-label="Trang chủ STROKE360"><img src="assets/logo.png" alt="Stroke360"></a>
    <button class="menu-btn" aria-label="Mở menu" onclick="this.nextElementSibling.classList.toggle('open')">☰</button>
    <nav class="nav">${NAV.map(([h, t]) => `<a href="${h}" class="${here === h || (here === "bai-hoc.html" && h === "hoc.html") ? "on" : ""}">${t}</a>`).join("")}</nav>
  </div></header>`);

  document.body.insertAdjacentHTML("beforeend", `
  <div class="fab">
    <a class="z" href="${C.contact.zaloGroup}" target="_blank" rel="noopener" aria-label="Nhắn Zalo">Zalo</a>
    <a class="c" href="tel:${C.contact.hotline.replace(/\s/g, "")}" aria-label="Gọi hotline">☎</a>
  </div>
  <footer class="ftr"><div class="wrap">
    <div class="grid g3">
      <div><img src="assets/logo.png" alt="Stroke360" style="height:48px;background:#fff;border-radius:8px;padding:4px 8px;margin-bottom:12px">
        <p>Ban ngày con đi làm, STROKE360 lo. Tối con vào với ba mẹ.</p></div>
      <div><h3>Khám phá</h3>
        <a href="hoc.html">Học cùng Stroke360</a><br><a href="cong-dong.html">Cộng đồng người nhà</a><br>
        <a href="dich-vu.html">Dịch vụ và bảng giá</a><br><a href="nhat-ky.html">Nhật ký chăm sóc</a><br>
        <a href="tuyen-dung.html">Tuyển dụng chăm sóc viên</a></div>
      <div><h3>Liên hệ</h3>Hotline: ${C.contact.hotline}<br>Email: ${C.contact.email}<br>TP. Hồ Chí Minh</div>
    </div>
    <div class="demo">Website demo cho môn Lập kế hoạch kinh doanh. Nhân vật, nhật ký là minh họa; các con số tác động là chỉ tiêu theo kế hoạch, không phải kết quả đã đạt. ${C.lessonDisclaimer}</div>
  </div></footer>`);

  /* Đếm số khi cuộn tới */
  window.S360count = function (root) {
    const io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.v, dec = +(el.dataset.d || 0), t0 = performance.now();
      const fmt = n => n.toLocaleString("vi-VN", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      (function tick(t) {
        const p = Math.min(1, (t - t0) / 1400), k = 1 - Math.pow(1 - p, 3);
        el.textContent = (el.dataset.p || "") + fmt(end * k) + (el.dataset.s || "");
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
      io.unobserve(el);
    }), { threshold: .4 });
    (root || document).querySelectorAll("[data-v]").forEach(el => io.observe(el));
  };
  window.S360stats = (list) => list.map(m => `<div class="card flat stat"><div class="v" data-v="${m.value}" data-d="${m.decimals || 0}" data-p="${m.prefix || ""}" data-s="${m.suffix || ""}">0</div><div class="l">${m.label}</div></div>`).join("");

  /* Tiến độ học lưu trên trình duyệt */
  const KEY = "s360_done";
  window.S360progress = {
    get() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return []; } },
    add(id) { const d = this.get(); if (!d.includes(id)) d.push(id); try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} },
    reset() { try { localStorage.removeItem(KEY); } catch (e) {} }
  };
  window.vnd = n => n.toLocaleString("vi-VN") + " đ";
})();
