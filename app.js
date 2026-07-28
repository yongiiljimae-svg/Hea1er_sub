"use strict";

/* =====================================================
   Data
===================================================== */

const mediaItems = [
  { id: 1, type: "series", title: "وقتی زمستان تمام شود", titleEn: "When Winter Ends", year: 1403, genre: "درام، عاشقانه",
    tags: ["درام", "عاشقانه", "دانشگاهی"], rating: 9.2, status: "completed", episodeLabel: "قسمت ۱۶ از ۱۶",
    duration: "00:62:00", translator: "تیم Healer", downloads: 18450,
    image: "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=700&q=85",
    description: "دو هم‌کلاسی قدیمی سال‌ها بعد در یک شهر کوچک برفی به‌هم برمی‌خورند و باید تصمیم بگیرند با احساسی که هیچ‌وقت واقعاً از بین نرفته بود چه کنند." },

  { id: 2, type: "series", title: "کلاس ضعیف‌ها", titleEn: "Weak Class Heroes", year: 1403, genre: "اکشن، مدرسه‌ای",
    tags: ["اکشن", "مدرسه‌ای"], rating: 9.0, status: "ongoing", episodeLabel: "قسمت ۸ از ۱۲",
    duration: "00:55:00", translator: "Sahar", downloads: 14230,
    image: "https://images.unsplash.com/photo-1527960669566-f882ba85a4c6?auto=format&fit=crop&w=700&q=85",
    description: "دانش‌آموزی آرام که بیشتر با کتاب‌هایش خلوت می‌کند، وقتی زورگویی مدرسه از حد می‌گذرد، ناچار به میدان می‌آید." },

  { id: 3, type: "movie", title: "شکارچیان دشت خاکستری", titleEn: "Greyfield Hunters", year: 1402, genre: "اکشن، هیجانی",
    tags: ["اکشن", "پساآخرالزمانی"], rating: 8.3, status: "completed", episodeLabel: "زیرنویس کامل",
    duration: "01:48:00", translator: "Niloofar", downloads: 9980,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=700&q=85",
    description: "سال‌ها پس از یک فاجعه‌ی بزرگ، گروهی از بازماندگان برای رسیدن آب و دارو وارد منطقه‌ای می‌شوند که کسی زنده از آن برنگشته." },

  { id: 4, type: "show", title: "رفقای پرسرعت", titleEn: "Fast Friends", year: 1403, genre: "واقع‌نما، کمدی",
    tags: ["واقع‌نما", "کمدی", "مسابقه"], rating: 8.9, status: "ongoing", episodeLabel: "قسمت ۷۵۵",
    duration: "01:20:00", translator: "RM Team", downloads: 21120,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=700&q=85",
    description: "شش هنرپیشه و کمدین ثابت هر هفته وارد یک مأموریت و بازی تازه می‌شوند؛ رقابتی پر از خنده و غافلگیری." },

  { id: 5, type: "series", title: "ملکه‌ی اشک‌های ناتمام", titleEn: "Queen of Unfinished Tears", year: 1403, genre: "عاشقانه، کمدی",
    tags: ["عاشقانه", "خانوادگی"], rating: 9.1, status: "completed", episodeLabel: "قسمت ۱۶ از ۱۶",
    duration: "01:10:00", translator: "Healer Team", downloads: 30250,
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=700&q=85",
    description: "زوجی که ازدواجشان رو به سردی رفته، وقتی یکی‌شان بیماری سختی را کشف می‌کند، باره‌دیگر معنای ماندن را می‌آزمایند." },

  { id: 6, type: "movie", title: "اسمم را کسی نمی‌داند", titleEn: "No One Knows My Name", year: 1403, genre: "درام",
    tags: ["درام", "مهاجرت"], rating: 8.6, status: "completed", episodeLabel: "زیرنویس کامل",
    duration: "02:05:00", translator: "Aida", downloads: 7840,
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&w=700&q=85",
    description: "مردی دور از خانه، در شهری غریبه، برای گرفتن هویتی تازه و ساختن زندگی‌ای دیگر می‌جنگد." },

  { id: 7, type: "show", title: "همسفران جاده", titleEn: "Roadmates", year: 1403, genre: "سفر، سرگرمی",
    tags: ["سفر", "سرگرمی"], rating: 8.8, status: "ongoing", episodeLabel: "قسمت ۱۲",
    duration: "01:05:00", translator: "Mina", downloads: 5670,
    image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed?auto=format&fit=crop&w=700&q=85",
    description: "چند بازیگر محبوب بدون برنامه‌ریزی قبلی جاده می‌زنند؛ فقط یک نقشه‌ی کاغذی و کلی وقت آزاد." },

  { id: 8, type: "series", title: "مغازه‌ی نورهای گمشده", titleEn: "The Lost Light Shop", year: 1402, genre: "معمایی، فانتزی",
    tags: ["فانتزی", "معمایی"], rating: 8.9, status: "completed", episodeLabel: "قسمت ۸ از ۸",
    duration: "00:58:00", translator: "Healer Team", downloads: 12690,
    image: "https://images.unsplash.com/photo-1515894347712-4d9164b20a16?auto=format&fit=crop&w=700&q=85",
    description: "در انتهای یک کوچه‌ی فراموش‌شده، مغازه‌ای هست که فقط شب‌ها باز می‌شود و هرکس وارد آن شود، چیزی از گذشته‌اش را پس می‌گیرد." },

  { id: 9, type: "movie", title: "افسر کمربند مشکی", titleEn: "Officer Black Belt", year: 1402, genre: "اکشن، کمدی",
    tags: ["اکشن", "کمدی"], rating: 8.4, status: "completed", episodeLabel: "زیرنویس کامل",
    duration: "01:55:00", translator: "Aria", downloads: 10350,
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=700&q=85",
    description: "رزمی‌کاری جوان که به‌اجبار وارد یگان پلیس محله می‌شود، کم‌کم می‌فهمد قانون همیشه ساده نیست." },

  { id: 10, type: "show", title: "آشپزخانه‌ی کوچک جی‌نی", titleEn: "Jinny's Small Kitchen", year: 1402, genre: "آشپزی، سرگرمی",
    tags: ["آشپزی", "سرگرمی"], rating: 9.1, status: "completed", episodeLabel: "قسمت ۱۱ از ۱۱",
    duration: "01:00:00", translator: "Variety Team", downloads: 8750,
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=700&q=85",
    description: "چند بازیگر بدون هیچ تجربه‌ی آشپزی، رستورانی کوچک در شهری غریبه راه می‌اندازند و با مشتری واقعی روبه‌رو می‌شوند." },

  { id: 11, type: "series", title: "دونده‌ی مهربان", titleEn: "The Kind Runner", year: 1403, genre: "عاشقانه، فانتزی",
    tags: ["فانتزی", "عاشقانه"], rating: 9.3, status: "completed", episodeLabel: "قسمت ۱۶ از ۱۶",
    duration: "01:12:00", translator: "Healer Team", downloads: 27480,
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=700&q=85",
    description: "دختری با بازگشت به گذشته تلاش می‌کند سرنوشت تلخ کسی را که همیشه دوستش داشته تغییر دهد." },

  { id: 12, type: "movie", title: "سرزمین دوباره", titleEn: "Wonderland Again", year: 1402, genre: "علمی‌تخیلی، درام",
    tags: ["علمی‌تخیلی", "درام"], rating: 8.1, status: "completed", episodeLabel: "زیرنویس کامل",
    duration: "01:58:00", translator: "Yas", downloads: 6900,
    image: "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?auto=format&fit=crop&w=700&q=85",
    description: "سرویسی هوشمند به مردم اجازه می‌دهد نسخه‌ای دیجیتال از عزیزان ازدست‌رفته‌شان بسازند؛ اما مرز واقعیت کم‌کم محو می‌شود." },

  { id: 13, type: "series", title: "بندر آخر شهر", titleEn: "The Last Harbor", year: 1403, genre: "درام، جنایی",
    tags: ["درام", "جنایی"], rating: 8.7, status: "ongoing", episodeLabel: "قسمت ۴ از ۱۲",
    duration: "01:00:00", translator: "Poorya", downloads: 6110,
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    description: "در یک بندر رو به تعطیلی، بازرسی جوان به پرونده‌ای قدیمی برمی‌خورد که هیچ‌کس نمی‌خواهد دوباره بازش کند." },

  { id: 14, type: "show", title: "شب‌های استودیو", titleEn: "Studio Nights", year: 1403, genre: "موسیقی، گفت‌وگو",
    tags: ["موسیقی", "گفت‌وگو"], rating: 8.5, status: "ongoing", episodeLabel: "قسمت ۲۰", duration: "00:50:00",
    translator: "Studio Team", downloads: 4320,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=85",
    description: "هر هفته یک هنرمند مهمانِ استودیویی کوچک است، برای یک گفت‌وگوی صمیمی و یک اجرای زنده‌ی کوتاه." },

  { id: 15, type: "movie", title: "روزهای بی‌باران", titleEn: "The Rainless Days", year: 1403, genre: "درام، خانوادگی",
    tags: ["درام", "خانوادگی"], rating: 8.2, status: "completed", episodeLabel: "زیرنویس کامل", duration: "01:42:00",
    translator: "Niloofar", downloads: 5230,
    image: "https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?auto=format&fit=crop&w=700&q=85",
    description: "سه خواهر پس از سال‌ها دوری، برای فروش خانه‌ی پدری‌شان کنار هم جمع می‌شوند و چیزهایی را که پنهان مانده بود دوباره می‌بینند." }
];

const defaultComments = [
  { id: 1, name: "سارا", rating: 5, text: "زیرنویس‌ها هم دقیقن هم زود منتشر می‌شن. برای «دونده‌ی مهربان» حتی قبل از سایت‌های دیگه آماده بود.", date: "دیروز" },
  { id: 2, name: "نگار", rating: 5, text: "طراحی سایت خیلی حس سینمایی داره و پیدا کردن قسمت جدید هر سریال خیلی راحته.", date: "۲ روز پیش" },
  { id: 3, name: "آرمان", rating: 4, text: "آرشیو برنامه‌ها عالیه. اگه بخش درخواست ترجمه‌ی رسمی هم اضافه بشه دیگه کامله.", date: "۴ روز پیش" },
  { id: 4, name: "مهسا", rating: 5, text: "ترجمه‌ی «مغازه‌ی نورهای گمشده» واقعاً روان بود، حتی اصطلاحات عامیانه‌اش هم خوب دراومده بود.", date: "هفته‌ی پیش" }
];

const routeMeta = {
  movies: { type: "movie", title: "فیلم‌های کره‌ای", code: "۰۱ — فیلم", icon: "clapperboard",
    desc: "زیرنویس فارسی فیلم‌های سینمایی کره‌ای، از اکشن تا درام، با ترجمه‌ی روان و هماهنگ با زمان‌بندی اصلی." },
  series: { type: "series", title: "سریال‌های کره‌ای", code: "۰۲ — سریال", icon: "tv",
    desc: "آرشیو زیرنویس سریال‌های در حال پخش و کامل‌شده؛ هر قسمت به‌محض آماده‌شدن منتشر می‌شود." },
  shows: { type: "show", title: "برنامه‌های کره‌ای", code: "۰۳ — برنامه", icon: "mic-2",
    desc: "زیرنویس فارسی برنامه‌های سرگرمی، واقع‌نما، مسابقه‌ای و آشپزی محبوب کره‌ای." }
};

const HERO_IMAGE = "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80";

/* =====================================================
   In-memory state (no localStorage — kept in JS only)
===================================================== */

const state = {
  bookmarks: new Set(),
  comments: [...defaultComments],
  selectedStars: 5,
  catalog: {
    movies: { q: "", status: "all", sort: "latest" },
    series: { q: "", status: "all", sort: "latest" },
    shows: { q: "", status: "all", sort: "latest" }
  }
};

/* =====================================================
   DOM refs
===================================================== */

const $app = document.querySelector("#app");
const $header = document.querySelector("#site-header");
const $navMobile = document.querySelector("#nav-mobile");
const $menuToggle = document.querySelector("#menu-toggle");
const $themeToggle = document.querySelector("#theme-toggle");

const $searchOpen = document.querySelector("#search-open");
const $searchDialog = document.querySelector("#search-dialog");
const $searchInput = document.querySelector("#search-input");
const $searchResults = document.querySelector("#search-results");

const $detailsDialog = document.querySelector("#details-dialog");
const $detailsPanel = document.querySelector("#details-panel");

const $toast = document.querySelector("#toast");
const $toastMsg = document.querySelector("#toast-msg");

const $newsletterForm = document.querySelector("#newsletter-form");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* =====================================================
   Helpers
===================================================== */

const faNumber = (n) => new Intl.NumberFormat("fa-IR").format(n);

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function icons() { if (window.lucide) window.lucide.createIcons(); }

function typeLabel(type) {
  return { movie: "فیلم", series: "سریال", show: "برنامه" }[type] || "";
}

function statusLabel(status) {
  return status === "completed" ? "کامل" : "در حال ترجمه";
}

function starIcons(count) {
  let out = "";
  for (let i = 1; i <= 5; i++) {
    out += `<i data-lucide="star" style="${i > count ? "opacity:.3" : ""}"></i>`;
  }
  return out;
}

function findItem(id) { return mediaItems.find((m) => m.id === Number(id)); }

let toastTimer = null;
function showToast(message) {
  $toastMsg.textContent = message;
  $toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => $toast.classList.remove("show"), 3000);
}

function openOverlay(el) {
  el.hidden = false;
  document.body.classList.add("dialog-open");
}
function closeOverlay(el) {
  el.hidden = true;
  document.body.classList.remove("dialog-open");
}

/* =====================================================
   Card / tile / comment renderers
===================================================== */

function mediaCard(item) {
  const marked = state.bookmarks.has(item.id);
  return `
  <article class="card">
    <div class="card-poster" data-open="${item.id}" tabindex="0" role="button"
         aria-label="مشاهده‌ی جزئیات ${escapeHTML(item.title)}">
      <img src="${item.image}" alt="پوستر ${escapeHTML(item.title)}" loading="lazy">
      <div class="card-top">
        <span class="tag ${item.status}">${statusLabel(item.status)}</span>
        <button class="bookmark ${marked ? "active" : ""}" type="button" data-bookmark="${item.id}"
                aria-label="${marked ? "حذف از علاقه‌مندی‌ها" : "افزودن به علاقه‌مندی‌ها"}">
          <i data-lucide="bookmark"></i>
        </button>
      </div>
      <div class="card-caption">
        <span class="card-timecode">${item.duration}</span>
        <span class="card-rating"><i data-lucide="star"></i>${item.rating}</span>
      </div>
    </div>
    <div class="card-body">
      <h3 class="card-title">${escapeHTML(item.title)}</h3>
      <p class="card-title-en">${escapeHTML(item.titleEn)}</p>
      <div class="card-meta">
        <span><i data-lucide="tag"></i>${escapeHTML(item.genre.split("،")[0])}</span>
        <span><i data-lucide="download"></i>${faNumber(item.downloads)}</span>
      </div>
    </div>
  </article>`;
}

function categoryTile(key) {
  const meta = routeMeta[key];
  const sample = mediaItems.find((m) => m.type === meta.type);
  const count = mediaItems.filter((m) => m.type === meta.type).length;
  return `
  <a href="#/${key}" class="tile">
    <img src="${sample.image}" alt="" aria-hidden="true">
    <div class="tile-body">
      <div class="tile-icon"><i data-lucide="${meta.icon}"></i></div>
      <h3>${meta.title}</h3>
      <p>${faNumber(count)} عنوان در آرشیو</p>
    </div>
  </a>`;
}

function commentCard(c) {
  return `
  <article class="comment-card">
    <div class="comment-top">
      <div class="avatar">${escapeHTML(c.name.charAt(0))}</div>
      <div class="comment-who"><strong>${escapeHTML(c.name)}</strong><span>${escapeHTML(c.date)}</span></div>
    </div>
    <div class="stars">${starIcons(c.rating)}</div>
    <p>${escapeHTML(c.text)}</p>
  </article>`;
}

/* =====================================================
   Views
===================================================== */

function viewHome() {
  const latest = [...mediaItems].sort((a, b) => b.id - a.id).slice(0, 8);

  return `
  <section class="hero">
    <div class="hero-bg"><img src="${HERO_IMAGE}" alt=""></div>
    <div class="wrap hero-inner">
      <span class="hero-eyebrow"><span class="dot"></span>آرشیو زنده‌ی زیرنویس فارسی</span>
      <div class="caption-bar">
        <h1>هر دیالوگ، <b>درست سر وقت.</b></h1>
      </div>
      <p class="hero-sub">Healer Sub زیرنویس فارسی فیلم، سریال و برنامه‌های کره‌ای را با ترجمه‌ی دقیق و هماهنگ با زمان‌بندی اصلی منتشر می‌کند.</p>
      <div class="hero-actions">
        <a href="#/series" class="btn btn-gold"><i data-lucide="download"></i>جدیدترین زیرنویس‌ها</a>
        <a href="#/comments" class="btn btn-outline"><i data-lucide="messages-square"></i>نظرات کاربران</a>
      </div>
      <div class="hero-stats">
        <div class="hero-stat"><strong>${faNumber(mediaItems.length)}+</strong><span>عنوان در آرشیو</span></div>
        <div class="hero-stat"><strong>${faNumber(120)}+</strong><span>مترجم همکار</span></div>
        <div class="hero-stat"><strong>${faNumber(180000)}+</strong><span>دانلود موفق</span></div>
        <div class="hero-stat"><strong>روزانه</strong><span>به‌روزرسانی آرشیو</span></div>
      </div>
    </div>
  </section>

  <section class="section section-line">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="cap">تازه‌ها</span>
          <h2 class="section-title">جدیدترین زیرنویس‌ها</h2>
          <p class="section-desc">آخرین قسمت‌ها و فیلم‌هایی که تیم Healer به‌تازگی ترجمه کرده.</p>
        </div>
        <a href="#/series" class="link-arrow">مشاهده‌ی همه<i data-lucide="arrow-left"></i></a>
      </div>
      <div class="grid">${latest.map(mediaCard).join("")}</div>
    </div>
  </section>

  <section class="section-tight">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="cap">دسته‌ها</span>
          <h2 class="section-title">دنبال چه چیزی می‌گردی؟</h2>
        </div>
      </div>
      <div class="tiles">${categoryTile("movies")}${categoryTile("series")}${categoryTile("shows")}</div>
    </div>
  </section>

  <section class="section section-line">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="cap">چرا Healer</span>
          <h2 class="section-title">فرق ما همین جزئیات کوچیکه</h2>
        </div>
      </div>
      <div class="features">
        <div class="feature"><div class="feature-icon"><i data-lucide="languages"></i></div><h3>ترجمه‌ی طبیعی</h3><p>دیالوگ‌ها را جوری برمی‌گردانیم که حس گفت‌وگوی روزمره داشته باشد، نه ترجمه‌ی خشک کلمه‌به‌کلمه.</p></div>
        <div class="feature"><div class="feature-icon"><i data-lucide="timer"></i></div><h3>هماهنگی دقیق زمان</h3><p>هر فایل با نسخه‌ی اصلی تطبیق داده می‌شود تا زیرنویس درست هم‌زمان با دیالوگ ظاهر شود.</p></div>
        <div class="feature"><div class="feature-icon"><i data-lucide="zap"></i></div><h3>انتشار سریع</h3><p>قسمت‌های در حال پخش معمولاً کمتر از یک روز پس از انتشار اصلی آماده می‌شوند.</p></div>
        <div class="feature"><div class="feature-icon"><i data-lucide="gift"></i></div><h3>آرشیو رایگان</h3><p>تمام زیرنویس‌ها بدون نیاز به عضویت یا هزینه در دسترس همه هستند.</p></div>
      </div>
    </div>
  </section>

  <section class="section-tight">
    <div class="wrap">
      <div class="section-head">
        <div>
          <span class="cap">نظرات</span>
          <h2 class="section-title">حرف کاربران Healer</h2>
        </div>
        <a href="#/comments" class="link-arrow">ثبت نظر<i data-lucide="arrow-left"></i></a>
      </div>
      <div class="comments-preview-grid">${state.comments.slice(0, 3).map(commentCard).join("")}</div>
    </div>
  </section>`;
}

function filteredCatalog(routeKey) {
  const meta = routeMeta[routeKey];
  const f = state.catalog[routeKey];
  let items = mediaItems.filter((m) => m.type === meta.type);

  if (f.q.trim()) {
    const q = f.q.trim().toLowerCase();
    items = items.filter((m) =>
      m.title.toLowerCase().includes(q) ||
      m.titleEn.toLowerCase().includes(q) ||
      m.genre.toLowerCase().includes(q)
    );
  }
  if (f.status !== "all") items = items.filter((m) => m.status === f.status);

  if (f.sort === "rating") items = [...items].sort((a, b) => b.rating - a.rating);
  else if (f.sort === "downloads") items = [...items].sort((a, b) => b.downloads - a.downloads);
  else items = [...items].sort((a, b) => b.id - a.id);

  return items;
}

function viewCatalog(routeKey) {
  const meta = routeMeta[routeKey];
  const f = state.catalog[routeKey];
  const items = filteredCatalog(routeKey);

  const grid = items.length
    ? `<div class="grid">${items.map(mediaCard).join("")}</div>`
    : `<div class="empty">
         <i data-lucide="search-x"></i>
         <h3>چیزی پیدا نشد</h3>
         <p>واژه‌ی دیگری امتحان کن یا فیلترها را پاک کن.</p>
       </div>`;

  return `
  <section class="page-hero">
    <div class="wrap page-hero-row">
      <div>
        <span class="cap">${meta.code}</span>
        <h1 class="page-title">${meta.title}</h1>
        <p class="page-desc">${meta.desc}</p>
      </div>
    </div>
  </section>

  <section class="section-tight">
    <div class="wrap">
      <div class="toolbar">
        <label class="field">
          <i data-lucide="search"></i>
          <input type="search" id="catalog-search" placeholder="جست‌وجو در ${meta.title}..." value="${escapeHTML(f.q)}">
        </label>
        <label class="field">
          <i data-lucide="filter"></i>
          <select id="catalog-status">
            <option value="all" ${f.status === "all" ? "selected" : ""}>همه‌ی وضعیت‌ها</option>
            <option value="completed" ${f.status === "completed" ? "selected" : ""}>کامل</option>
            <option value="ongoing" ${f.status === "ongoing" ? "selected" : ""}>در حال ترجمه</option>
          </select>
        </label>
        <label class="field">
          <i data-lucide="arrow-down-up"></i>
          <select id="catalog-sort">
            <option value="latest" ${f.sort === "latest" ? "selected" : ""}>جدیدترین</option>
            <option value="rating" ${f.sort === "rating" ? "selected" : ""}>بیشترین امتیاز</option>
            <option value="downloads" ${f.sort === "downloads" ? "selected" : ""}>پردانلودترین</option>
          </select>
        </label>
      </div>
      <p class="result-line">${faNumber(items.length)} عنوان یافت شد</p>
      ${grid}
    </div>
  </section>`;
}

function viewComments() {
  const list = [...state.comments].reverse();
  return `
  <section class="page-hero">
    <div class="wrap page-hero-row">
      <div>
        <span class="cap">نظرات</span>
        <h1 class="page-title">نظرات کاربران</h1>
        <p class="page-desc">تجربه‌ات از استفاده از Healer Sub را با بقیه‌ی کیدرامرها به اشتراک بگذار.</p>
      </div>
    </div>
  </section>

  <section class="section-tight">
    <div class="wrap comments-layout">
      <div class="comments-list">${list.map(commentCard).join("")}</div>

      <div class="comment-form-card">
        <h2>ثبت نظر جدید</h2>
        <p>نظر تو همین‌جا، تا پایان این نشست، ذخیره می‌شود.</p>
        <form id="comment-form" novalidate>
          <div class="field-group">
            <label for="c-name">نام</label>
            <input id="c-name" type="text" placeholder="مثلاً سارا" required>
          </div>
          <div class="field-group">
            <label>امتیاز</label>
            <div class="rating-pick" id="rating-pick">
              ${[1, 2, 3, 4, 5].map((n) => `<button type="button" data-star="${n}" class="${n <= state.selectedStars ? "on" : ""}" aria-label="${n} ستاره"><i data-lucide="star"></i></button>`).join("")}
            </div>
          </div>
          <div class="field-group">
            <label for="c-text">نظر</label>
            <textarea id="c-text" placeholder="نظرت رو بنویس..." required></textarea>
          </div>
          <button type="submit" class="btn btn-gold" style="width:100%">
            <i data-lucide="send"></i>ثبت نظر
          </button>
        </form>
      </div>
    </div>
  </section>`;
}

/* =====================================================
   Router
===================================================== */

function parseHash() {
  const raw = (window.location.hash || "#/home").replace(/^#\/?/, "");
  return raw || "home";
}

function render() {
  const route = parseHash();

  if (route === "home") $app.innerHTML = viewHome();
  else if (routeMeta[route]) $app.innerHTML = viewCatalog(route);
  else if (route === "comments") $app.innerHTML = viewComments();
  else $app.innerHTML = viewHome();

  document.querySelectorAll("[data-route]").forEach((a) => {
    a.classList.toggle("active", a.dataset.route === route);
  });

  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "instant" });
  icons();
  bindCatalogControls(route);
  bindCommentForm();
}

window.addEventListener("hashchange", render);

/* =====================================================
   Header scroll + mobile nav + theme
===================================================== */

window.addEventListener("scroll", () => {
  $header.classList.toggle("scrolled", window.scrollY > 12);
}, { passive: true });

$menuToggle.addEventListener("click", () => {
  const open = $navMobile.classList.toggle("open");
  $menuToggle.setAttribute("aria-expanded", String(open));
  $menuToggle.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  icons();
});

document.querySelectorAll(".nav-mobile a").forEach((a) => {
  a.addEventListener("click", () => {
    $navMobile.classList.remove("open");
    $menuToggle.setAttribute("aria-expanded", "false");
    $menuToggle.innerHTML = '<i data-lucide="menu"></i>';
    icons();
  });
});

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  $themeToggle.innerHTML = theme === "light" ? '<i data-lucide="sun"></i>' : '<i data-lucide="moon"></i>';
  icons();
}
applyTheme(window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");

$themeToggle.addEventListener("click", () => {
  applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
});

/* =====================================================
   Search dialog
===================================================== */

function renderSearchResults(query) {
  const q = query.trim().toLowerCase();
  if (!q) {
    $searchResults.innerHTML = `<p class="search-empty">برای شروع، نام یک فیلم، سریال یا برنامه را بنویس.</p>`;
    return;
  }
  const matches = mediaItems.filter((m) =>
    m.title.toLowerCase().includes(q) || m.titleEn.toLowerCase().includes(q)
  ).slice(0, 8);

  if (!matches.length) {
    $searchResults.innerHTML = `<p class="search-empty">نتیجه‌ای برای «${escapeHTML(query)}» پیدا نشد.</p>`;
    return;
  }
  $searchResults.innerHTML = matches.map((m) => `
    <button type="button" class="result-row" data-open="${m.id}" data-close-search="1">
      <img src="${m.image}" alt="">
      <span><strong>${escapeHTML(m.title)}</strong><small>${escapeHTML(m.titleEn)}</small></span>
      <span>${typeLabel(m.type)}</span>
    </button>`).join("");
  icons();
}

$searchOpen.addEventListener("click", () => {
  openOverlay($searchDialog);
  $searchInput.value = "";
  renderSearchResults("");
  window.setTimeout(() => $searchInput.focus(), 30);
});

$searchDialog.addEventListener("click", (e) => { if (e.target === $searchDialog) closeOverlay($searchDialog); });
$searchInput.addEventListener("input", (e) => renderSearchResults(e.target.value));

document.addEventListener("keydown", (e) => {
  if (e.key === "/" && !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) {
    e.preventDefault();
    $searchOpen.click();
  }
  if (e.key === "Escape") {
    if (!$searchDialog.hidden) closeOverlay($searchDialog);
    if (!$detailsDialog.hidden) closeOverlay($detailsDialog);
  }
});

document.querySelectorAll("[data-close-dialog]").forEach((btn) => {
  btn.addEventListener("click", () => closeOverlay(btn.closest(".overlay")));
});

/* =====================================================
   Details dialog
===================================================== */

function openDetails(id) {
  const item = findItem(id);
  if (!item) return;

  const marked = state.bookmarks.has(item.id);

  $detailsPanel.innerHTML = `
    <button class="icon-btn details-close" type="button" data-close-dialog aria-label="بستن"><i data-lucide="x"></i></button>
    <div class="details-poster"><img src="${item.image}" alt="پوستر ${escapeHTML(item.title)}"></div>
    <div class="details-body">
      <h2 id="details-title">${escapeHTML(item.title)}</h2>
      <p class="details-en">${escapeHTML(item.titleEn)}</p>
      <div class="details-tags">
        ${item.tags.map((t) => `<span>${escapeHTML(t)}</span>`).join("")}
        <span>${item.year}</span>
        <span>${statusLabel(item.status)}</span>
      </div>
      <p class="details-desc">${escapeHTML(item.description)}</p>
      <ul class="details-info">
        <li><span>نوع اثر</span><span>${typeLabel(item.type)}</span></li>
        <li><span>وضعیت زیرنویس</span><span>${escapeHTML(item.episodeLabel)}</span></li>
        <li><span>مدت هر قسمت</span><span>${item.duration}</span></li>
        <li><span>مترجم</span><span>${escapeHTML(item.translator)}</span></li>
        <li><span>تعداد دانلود</span><span>${faNumber(item.downloads)}</span></li>
      </ul>
      <div class="details-actions">
        <button type="button" class="btn btn-gold" id="details-download"><i data-lucide="download"></i>دانلود زیرنویس</button>
        <button type="button" class="btn btn-outline" id="details-bookmark">
          <i data-lucide="bookmark"></i>${marked ? "حذف از علاقه‌مندی" : "افزودن به علاقه‌مندی"}
        </button>
      </div>
    </div>`;

  icons();
  openOverlay($detailsDialog);

  $detailsPanel.querySelector("[data-close-dialog]").addEventListener("click", () => closeOverlay($detailsDialog));
  $detailsPanel.querySelector("#details-download").addEventListener("click", () => {
    showToast(`دانلود زیرنویس «${item.title}» شروع شد.`);
  });
  $detailsPanel.querySelector("#details-bookmark").addEventListener("click", () => {
    toggleBookmark(item.id);
    closeOverlay($detailsDialog);
  });
}

$detailsDialog.addEventListener("click", (e) => { if (e.target === $detailsDialog) closeOverlay($detailsDialog); });

/* =====================================================
   Bookmarks
===================================================== */

function toggleBookmark(id) {
  if (state.bookmarks.has(id)) {
    state.bookmarks.delete(id);
    showToast("از علاقه‌مندی‌ها حذف شد.");
  } else {
    state.bookmarks.add(id);
    showToast("به علاقه‌مندی‌ها اضافه شد.");
  }
  render();
}

/* =====================================================
   Global click delegation (cards + search results)
===================================================== */

document.addEventListener("click", (e) => {
  const bookmarkBtn = e.target.closest("[data-bookmark]");
  if (bookmarkBtn) { toggleBookmark(Number(bookmarkBtn.dataset.bookmark)); return; }

  const opener = e.target.closest("[data-open]");
  if (opener) {
    if (opener.dataset.closeSearch) closeOverlay($searchDialog);
    openDetails(opener.dataset.open);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter" && e.key !== " ") return;
  const poster = e.target.closest(".card-poster[data-open]");
  if (poster) { e.preventDefault(); openDetails(poster.dataset.open); }
});

/* =====================================================
   Catalog controls (re-bound after every render)
===================================================== */

function bindCatalogControls(route) {
  const search = document.querySelector("#catalog-search");
  const status = document.querySelector("#catalog-status");
  const sort = document.querySelector("#catalog-sort");
  if (!search || !routeMeta[route]) return;

  search.addEventListener("input", (e) => { state.catalog[route].q = e.target.value; renderCatalogInPlace(route); });
  status.addEventListener("change", (e) => { state.catalog[route].status = e.target.value; renderCatalogInPlace(route); });
  sort.addEventListener("change", (e) => { state.catalog[route].sort = e.target.value; renderCatalogInPlace(route); });
}

function renderCatalogInPlace(route) {
  const focused = document.activeElement && document.activeElement.id;
  $app.innerHTML = viewCatalog(route);
  icons();
  bindCatalogControls(route);
  if (focused === "catalog-search") {
    const el = document.querySelector("#catalog-search");
    if (el) { el.focus(); el.selectionStart = el.selectionEnd = el.value.length; }
  }
}

/* =====================================================
   Comment form
===================================================== */

function bindCommentForm() {
  const form = document.querySelector("#comment-form");
  if (!form) return;

  document.querySelectorAll("#rating-pick [data-star]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.selectedStars = Number(btn.dataset.star);
      document.querySelectorAll("#rating-pick [data-star]").forEach((b) => {
        b.classList.toggle("on", Number(b.dataset.star) <= state.selectedStars);
      });
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.querySelector("#c-name").value.trim();
    const text = document.querySelector("#c-text").value.trim();
    if (!name || !text) { showToast("لطفاً نام و متن نظر را کامل کن."); return; }

    state.comments.push({ id: Date.now(), name, rating: state.selectedStars, text, date: "همین الان" });
    state.selectedStars = 5;
    showToast("نظر تو با موفقیت ثبت شد.");
    render();
  });
}

/* =====================================================
   Newsletter form
===================================================== */

$newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#newsletter-email");
  if (!input.value.trim()) return;
  showToast("عضویت در خبرنامه با موفقیت ثبت شد.");
  input.value = "";
});

/* =====================================================
   Init
===================================================== */

render();
