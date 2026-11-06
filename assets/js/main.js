/*
 * KLIKMEDIS landing page: script.
 *
 * Yang sering diubah:
 *   WA      nomor WhatsApp tujuan (format 62..., tanpa + atau spasi)
 *   VIDEOS  video testimoni: isi "id" dengan ID video YouTube (11 karakter)
 *   T       testimoni yang berjalan di bagian "Apa kata mereka"
 *   track() event pelacakan (dataLayer / gtag / fbq) untuk klik WhatsApp dan form
 */

var WA = "6289699935552"; // ganti dengan nomor WhatsApp KLIKMEDIS
var waBtn = document.getElementById("wa");
if (waBtn) waBtn.href = "https://wa.me/" + WA;
var lt = document.getElementById("lt");
var ln = document.getElementById("ln");
var lp = document.getElementById("lp");
if (ln && lt) {
  ln.onclick = function () {
    lt.scrollBy({ left: lt.clientWidth * 0.6, behavior: "smooth" });
  };
}
if (lp && lt) {
  lp.onclick = function () {
    lt.scrollBy({ left: -lt.clientWidth * 0.6, behavior: "smooth" });
  };
}
var VIDEOS = [
  { id: "_MQZ9GcJcuY", nama: "dr. Budi Santoso, Sp.A", info: "Pemilik Klinik Pratama Sehat" },
  { id: "N6sphcC0CYs", nama: "Siti Rahmawati, A.Md.RMIK", info: "Admin & Rekam Medis Klinik Utama Medika" },
  { id: "6BOne2dBVe4", nama: "dr. Hendra Kusuma", info: "Praktik Mandiri Dokter Umum" },
]; // isi id dengan ID video YouTube (11 karakter setelah v= atau youtu.be/)
(function () {
  var g = document.getElementById("vg");
  if (!g) return;
  VIDEOS.forEach(function (v) {
    var c = document.createElement("div");
    c.className = "vc";
    var thumb = v.id
      ? '<img alt="Thumbnail testimoni ' +
        v.nama +
        '" loading="lazy" decoding="async" src="https://i.ytimg.com/vi/' +
        v.id +
        '/hqdefault.jpg" onerror="this.remove()">'
      : "";
    c.innerHTML =
      '<button class="vf" type="button" aria-label="Putar video ' +
      v.nama +
      '">' +
      thumb +
      '<span class="vp">▶</span><span class="vm">' +
      (v.id ? "Video testimoni" : "Video dummy — belum diisi") +
      '</span></button><div class="vi"><b>' +
      v.nama +
      "</b><span>" +
      v.info +
      "</span>" +
      (v.id
        ? '<br><a target="_blank" rel="noopener" href="https://www.youtube.com/watch?v=' +
          v.id +
          '">Buka di YouTube ↗</a>'
        : "") +
      "</div>";
    var b = c.firstChild;
    b.onclick = function () {
      if (!v.id) return;
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + v.id + "?autoplay=1&rel=0";
      f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
      f.setAttribute("allowfullscreen", "");
      f.title = "Testimoni " + v.nama;
      b.innerHTML = "";
      b.appendChild(f);
      b.onclick = null;
      b.style.cursor = "default";
    };
    g.appendChild(c);
  });
})();
var T = [
  {
    foto: "assets/images/testi-dr-aditya.jpg",
    nama: "dr. Aditya Rahman, Sp.A",
    jabatan: "Klinik Pratama & Anak Sehat Mandiri",
    kota: "Bandung",
    ulasan:
      "Integrasi ke SATUSEHAT Kemenkes langsung lancar tanpa kendala API. Antrean poli anak jadi jauh lebih kondusif dan riwayat imunisasi pasien tercatat sangat rapi.",
    rating: 5,
  },
  {
    foto: "assets/images/testi-dr-sari.jpg",
    nama: "dr. Sari Rahayu",
    jabatan: "Praktik Mandiri Dokter Umum",
    kota: "Jakarta Selatan",
    ulasan:
      "Migrasi dari rekam medis kertas ke KLIKMEDIS sangat mulus. Riwayat keluhan, tensi, dan riwayat obat pasien langsung muncul hanya dengan ketik nama pasien.",
    rating: 5,
  },
  {
    foto: "assets/images/testi-ns-ratna.jpg",
    nama: "Ns. Maina Ratna, S.Kep",
    jabatan: "Kepala Pelayanan & Keperawatan Klinik",
    kota: "Surabaya",
    ulasan:
      "Bridging BPJS PCare sangat cepat. Waktu input pendaftaran admisi berkurang drastis lebih dari 60%, sehingga staf kami bisa lebih fokus melayani pasien.",
    rating: 5,
  },
  {
    foto: "assets/images/testi-dr-budi.jpg",
    nama: "dr. Budi Santoso",
    jabatan: "Penanggung Jawab Klinik Pratama Medika",
    kota: "Semarang",
    ulasan:
      "Laporan harian kasir dan sisa stok farmasi otomatis terekap tiap malam. Tidak perlu lagi lembur manual mencocokkan resep dan rekonsiliasi kasir.",
    rating: 5,
  },
  {
    foto: "assets/images/testi-dr-maya.jpg",
    nama: "drg. Maya Indah",
    jabatan: "Pemilik Dental Care & Aesthetic Clinic",
    kota: "Yogyakarta",
    ulasan:
      "Modul odontogram dan rekam medis giginya sangat mudah digunakan. Pasien juga senang mendapatkan reminder otomatis jadwal kontrol via WhatsApp.",
    rating: 5,
  },
  {
    foto: "assets/images/testi-dr-ahmad.jpg",
    nama: "dr. Ahmad Fauzan, M.Kes",
    jabatan: "Direktur Operasional Klinik Utama",
    kota: "Medan",
    ulasan:
      "Dukungan tim support KLIKMEDIS sangat responsif. Fitur dan alur klinik bisa disesuaikan dengan kebutuhan kami tanpa biaya tersembunyi yang memberatkan.",
    rating: 5,
  },
];

var starSvg =
  '<svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>';
var checkSvg =
  '<svg viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>';

var h = "";
T.concat(T).forEach(function (x) {
  var stars = "";
  for (var i = 0; i < (x.rating || 5); i++) stars += starSvg;
  h +=
    '<div class="card tm">' +
      '<div>' +
        '<div class="tm-stars">' + stars + '</div>' +
        '<p>"' + x.ulasan + '"</p>' +
      '</div>' +
      '<div class="who">' +
        '<div class="av">' +
          '<img src="' + x.foto + '" alt="' + x.nama + '" loading="lazy" decoding="async" onerror="this.src=\'assets/images/foto-support.jpg\'">' +
        '</div>' +
        '<div>' +
          '<b>' + x.nama + '</b>' +
          '<span>' + x.jabatan + ' • ' + x.kota + '</span>' +
          '<div class="tm-badge">' + checkSvg + ' Pengguna Terverifikasi</div>' +
        '</div>' +
      '</div>' +
    '</div>';
});
var trk = document.getElementById("trk");
if (trk) trk.innerHTML = h;
var q = encodeURIComponent("Halo KLIKMEDIS, saya ingin konsultasi / demo.");
[].forEach.call(document.querySelectorAll('a[href="#kontak"]'), function (a) {
  var dm = a.getAttribute("data-msg");
  a.href = "https://wa.me/" + WA + "?text=" + (dm ? encodeURIComponent(dm) : q);
  a.target = "_blank";
  a.rel = "noopener";
});

[].forEach.call(document.querySelectorAll(".pbtn"), function (a) {
  var pl = a.getAttribute("data-plan"),
    pr = a.getAttribute("data-price");
  var m = "Halo KLIKMEDIS, saya tertarik dengan " + pl + (pr ? " (" + pr + ")" : "") + ". Mohon info dan jadwal demo.";
  a.href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(m);
  a.target = "_blank";
  a.rel = "noopener";
});
function track(n, o) {
  try {
    o = o || {};
    dataLayer.push(Object.assign({ event: n }, o));
    if (window.gtag) gtag("event", n, o);
    if (window.fbq && n !== "nav_click") fbq("track", n === "lead_form_submit" ? "Lead" : "Contact");
  } catch (e) {}
}
function srcNote() {
  try {
    var s = new URLSearchParams(location.search),
      o = [];
    ["utm_source", "utm_medium", "utm_campaign"].forEach(function (k) {
      if (s.get(k)) o.push(k.slice(4) + ": " + s.get(k));
    });
    return o.length ? "\n(Sumber: " + o.join(", ") + ")" : "";
  } catch (e) {
    return "";
  }
}
[].forEach.call(document.querySelectorAll('a[href^="https://wa.me/"]'), function (a) {
  var x = srcNote();
  if (x && a.href.indexOf("?text=") > 0) a.href += encodeURIComponent(x);
  a.addEventListener("click", function () {
    var d = a.dataset;
    track("wa_click", { label: d.plan || d.msg || a.getAttribute("aria-label") || a.textContent.trim().slice(0, 40) });
  });
});
var qf = document.getElementById("qf");
if (qf) {
  qf.onsubmit = function (e) {
    e.preventDefault();
    var f = e.target,
      m =
        "Halo KLIKMEDIS, saya ingin konsultasi gratis.\nNama: " +
        f.n.value +
        "\nNo. WhatsApp: " +
        f.h.value +
        "\nJenis fasilitas: " +
        f.j.value +
        srcNote();
    track("lead_form_submit", { facility: f.j.value });
    window.open("https://wa.me/" + WA + "?text=" + encodeURIComponent(m), "_blank", "noopener");
  };
}
try {
  (function () {
    var s = document.getElementById("slides"),
      d = document.getElementById("hdots"),
      hero = document.getElementById("heroS");
    if (!s || !d) return;
    var n = s.children.length,
      i = 0,
      paused = false;
    for (var k = 0; k < n; k++) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Slide " + (k + 1));
      b.setAttribute("data-k", k);
      d.appendChild(b);
    }
    function go(x) {
      i = (x + n) % n;
      s.style.transform = "translateX(-" + i * 100 + "%)";
      for (var j = 0; j < n; j++) {
        d.children[j].className = j === i ? "on" : "";
      }
    }
    d.addEventListener("click", function (e) {
      var k = e.target.getAttribute && e.target.getAttribute("data-k");
      if (k !== null && k !== undefined) {
        go(parseInt(k, 10));
      }
    });
    hero.addEventListener("mouseenter", function () {
      paused = true;
    });
    hero.addEventListener("mouseleave", function () {
      paused = false;
    });
    go(0);
    setInterval(function () {
      if (!paused) go(i + 1);
    }, 4000);
  })();
} catch (err) {}

/* Mobile Navigation Toggle Handler */
(function () {
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");
  var header = document.querySelector("header");

  if (!navToggle || !navMenu) return;

  function updateMenuPosition() {
    if (header && window.innerWidth <= 820) {
      var hHeight = header.offsetHeight;
      navMenu.style.top = hHeight + "px";
      navMenu.style.height = "calc(100dvh - " + hHeight + "px)";
    } else {
      navMenu.style.top = "";
      navMenu.style.height = "";
    }
  }

  function toggleMenu(forceClose) {
    var isOpen = forceClose === true ? false : !navMenu.classList.contains("active");
    if (isOpen) {
      updateMenuPosition();
      navMenu.classList.add("active");
      navToggle.classList.add("active");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.classList.add("menu-open");
      document.body.style.overflow = "hidden";
    } else {
      navMenu.classList.remove("active");
      navToggle.classList.remove("active");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
      document.body.style.overflow = "";
    }
  }

  navToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
  });

  var links = navMenu.querySelectorAll("a");
  links.forEach(function (link) {
    link.addEventListener("click", function () {
      toggleMenu(true);
    });
  });

  var navCta = document.querySelector(".nav-cta");
  if (navCta) {
    navCta.addEventListener("click", function () {
      toggleMenu(true);
    });
  }

  document.addEventListener("click", function (e) {
    if (navMenu.classList.contains("active") && !navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      toggleMenu(true);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      toggleMenu(true);
    }
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 820 && navMenu.classList.contains("active")) {
      toggleMenu(true);
    }
  });
})();



