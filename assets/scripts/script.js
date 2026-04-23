const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// ハンバーガーボタンのクリックイベント
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("open");
});

// ナビゲーションのリンクをクリックしたらメニューを閉じる
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("open");
  });
});

// 8人分のダミーデータ
const profiles = [
  {
    id: 0,
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    img: "https://picsum.photos/400/500?random=10",
    theme: "#a8c0d5",
    intro: "シンプルで直感的なUIデザインを得意としています。",
    qa: [
      { q: "趣味は？", a: "スケッチ" },
      { q: "大切にしていること", a: "ユーザー視点" },
    ],
  },
  {
    id: 1,
    name: "Kenji Sato",
    role: "Front-end Developer",
    img: "https://picsum.photos/400/500?random=11",
    theme: "#d5a8b0",
    intro: "デザイナーの意図を完璧にブラウザ上で再現します。",
    qa: [
      { q: "休日は？", a: "プログラミング" },
      { q: "好きな食べ物", a: "激辛カレー" },
    ],
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Project Manager",
    img: "https://picsum.photos/400/500?random=12",
    theme: "#b0d5a8",
    intro: "プロジェクトの進行管理とクライアントとの折衝を担当しています。",
    qa: [
      { q: "リフレッシュ方法", a: "ハイキング" },
      { q: "座右の銘", a: "備えあれば憂いなし" },
    ],
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Backend Engineer",
    img: "https://picsum.photos/400/500?random=13",
    theme: "#e6c888",
    intro: "見えない裏側から、安全で高速なシステムを支えます。",
    qa: [
      { q: "得意な言語", a: "Go, Python" },
      { q: "マイブーム", a: "サウナ" },
    ],
  },
  {
    id: 4,
    name: "Anna Smith",
    role: "Art Director",
    img: "https://picsum.photos/400/500?random=14",
    theme: "#d2b4de",
    intro: "プロジェクト全体のビジュアルトーンを決定し、品質を担保します。",
    qa: [
      { q: "好きなアーティスト", a: "モネ" },
      { q: "仕事のやりがい", a: "美しいものが完成した時" },
    ],
  },
  {
    id: 5,
    name: "David Kim",
    role: "Data Analyst",
    img: "https://picsum.photos/400/500?random=15",
    theme: "#88e6d9",
    intro: "データからユーザーの行動を読み解き、改善案を提案します。",
    qa: [
      { q: "日課は？", a: "最新ニュースのチェック" },
      { q: "好きな時間", a: "早朝のコーヒータイム" },
    ],
  },
  {
    id: 6,
    name: "Lisa Wong",
    role: "Digital Marketer",
    img: "https://picsum.photos/400/500?random=16",
    theme: "#e69b88",
    intro: "魅力的なプロダクトを、必要としている人に正しく届けます。",
    qa: [
      { q: "特技は？", a: "コピーライティング" },
      { q: "休日の過ごし方", a: "愛犬の散歩" },
    ],
  },
  {
    id: 7,
    name: "Tom Brown",
    role: "QA Engineer",
    img: "https://picsum.photos/400/500?random=17",
    theme: "#b0b5be",
    intro: "少しのバグも見逃さず、品質の最後の砦として活躍します。",
    qa: [
      { q: "性格を一言で", a: "几帳面" },
      { q: "趣味", a: "パズル" },
    ],
  },
];

const content = document.getElementById("profile-content");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const elTheme = document.getElementById("theme-bg");
const elImg = document.getElementById("profile-img");
const elRole = document.getElementById("profile-role");
const elName = document.getElementById("profile-name");
const elIntro = document.getElementById("profile-intro");
const elQa = document.getElementById("profile-qa-list");

// URLの ?id=○ を取得して初期インデックスを決定する
const urlParams = new URLSearchParams(window.location.search);
const idParam = urlParams.get("id");
let currentIndex = idParam !== null ? parseInt(idParam, 10) : 0;

// 不正な値（文字や範囲外の数字）が入力された場合の安全対策
if (
  isNaN(currentIndex) ||
  currentIndex < 0 ||
  currentIndex >= profiles.length
) {
  currentIndex = 0;
}

// DOMにデータをセットする関数（アニメーション無し）
function setProfileData(index) {
  const p = profiles[index];
  elTheme.style.setProperty("--theme-color", p.theme);
  elImg.src = p.img;
  elRole.textContent = p.role;
  elName.textContent = p.name;
  elIntro.textContent = p.intro;
  elQa.innerHTML = "";
  p.qa.forEach((item) => {
    const dt = document.createElement("dt");
    dt.textContent = item.q;
    const dd = document.createElement("dd");
    dd.textContent = item.a;
    elQa.appendChild(dt);
    elQa.appendChild(dd);
  });
}

// 初回読み込み時は即座にデータをセット
setProfileData(currentIndex);

// 矢印ボタンで切り替える際の関数（フェードアニメーション有り）
function transitionProfile(index) {
  content.classList.add("fade-out");
  setTimeout(() => {
    setProfileData(index);
    content.classList.remove("fade-out");
  }, 400); // CSSのtransition時間と合わせる
}

btnNext.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % profiles.length;
  transitionProfile(currentIndex);
});

btnPrev.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + profiles.length) % profiles.length;
  transitionProfile(currentIndex);
});
