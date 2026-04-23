const menuBtn = document.getElementById("menu-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (menuBtn && navMenu) {
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
}

// 変更点: 一問一答を10行程度にするため、全員の 'qa' データを5問ずつ（QとAで計10行）に増量しました。
// 自己紹介（intro）の文章量もそれに合わせて少し長めに調整しています。
const profiles = [
  {
    id: 0,
    name: "Sarah Jenkins",
    role: "UI/UX Designer",
    img: "https://picsum.photos/400/500?random=10",
    theme: "#a8c0d5",
    intro:
      "シンプルで直感的なUIデザインを得意としています。ユーザーの心理を第一に考え、触れていて心地よいインターフェースの追求を日々の目標にしています。休日は美術館巡りをしてインスピレーションを得ています。",
    qa: [
      { q: "趣味は？", a: "カフェでのスケッチ" },
      { q: "大切にしていること", a: "ユーザー視点での思考" },
      { q: "好きなツール", a: "Figma" },
      { q: "日課", a: "デザイントレンドの収集" },
      { q: "座右の銘", a: "神は細部に宿る" },
    ],
  },
  {
    id: 1,
    name: "Kenji Sato",
    role: "Front-end Developer",
    img: "https://picsum.photos/400/500?random=11",
    theme: "#d5a8b0",
    intro:
      "デザイナーの意図を完璧にブラウザ上で再現します。特にアニメーションの実装やパフォーマンスチューニングにこだわりを持っています。最近はWebGL表現に夢中です。",
    qa: [
      { q: "休日は？", a: "個人開発や技術書の読書" },
      { q: "好きな食べ物", a: "激辛カレー" },
      { q: "こだわり", a: "メカニカルキーボード" },
      { q: "得意な言語", a: "TypeScript" },
      { q: "ストレス発散", a: "深夜のドライブ" },
    ],
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Project Manager",
    img: "https://picsum.photos/400/500?random=12",
    theme: "#b0d5a8",
    intro:
      "プロジェクトの進行管理とクライアントとの折衝を担当しています。チーム全員が最高のパフォーマンスを発揮できるよう、環境づくりとタスク管理を徹底しています。",
    qa: [
      { q: "リフレッシュ方法", a: "週末のハイキング" },
      { q: "座右の銘", a: "備えあれば憂いなし" },
      { q: "必須アイテム", a: "手書きのノート" },
      { q: "得意なこと", a: "タスクの細分化" },
      { q: "好きな時間", a: "無事リリースを終えた瞬間" },
    ],
  },
  {
    id: 3,
    name: "Michael Lee",
    role: "Backend Engineer",
    img: "https://picsum.photos/400/500?random=13",
    theme: "#e6c888",
    intro:
      "見えない裏側から、安全で高速なシステムを支えます。大規模トラフィックを捌くインフラ設計が得意です。プライベートでは自作PCの構成を考えるのが好きです。",
    qa: [
      { q: "得意な言語", a: "Go, Python" },
      { q: "マイブーム", a: "休日のサウナ巡り" },
      { q: "理想の環境", a: "静かで涼しい部屋" },
      { q: "苦手なもの", a: "不規則なインデント" },
      { q: "尊敬する人", a: "Linuxの開発者" },
    ],
  },
  {
    id: 4,
    name: "Anna Smith",
    role: "Art Director",
    img: "https://picsum.photos/400/500?random=14",
    theme: "#d2b4de",
    intro:
      "プロジェクト全体のビジュアルトーンを決定し、品質を担保します。クライアントの抽象的な要望を、具体的な形に落とし込むプロセスにやりがいを感じています。",
    qa: [
      { q: "好きなアーティスト", a: "クロード・モネ" },
      { q: "仕事のやりがい", a: "美しいものが完成した時" },
      { q: "インプット元", a: "海外の映画や雑誌" },
      { q: "休日の過ごし方", a: "愛猫と遊ぶこと" },
      { q: "好きな色", a: "淡いラベンダー" },
    ],
  },
  {
    id: 5,
    name: "David Kim",
    role: "Data Analyst",
    img: "https://picsum.photos/400/500?random=15",
    theme: "#88e6d9",
    intro:
      "データからユーザーの行動を読み解き、ロジカルな改善案を提案します。数字の裏にある「ユーザーの本当の気持ち」を見つけ出すことが私のミッションです。",
    qa: [
      { q: "日課は？", a: "海外テックニュースの確認" },
      { q: "好きな時間", a: "早朝のコーヒータイム" },
      { q: "得意なこと", a: "SQLでの複雑な抽出" },
      { q: "趣味", a: "チェスやボードゲーム" },
      { q: "性格を一言で", a: "超合理的" },
    ],
  },
  {
    id: 6,
    name: "Lisa Wong",
    role: "Digital Marketer",
    img: "https://picsum.photos/400/500?random=16",
    theme: "#e69b88",
    intro:
      "魅力的なプロダクトを、必要としている人に正しく届けます。SNSマーケティングから広告運用まで幅広く担当し、ブランドのファン作りを加速させます。",
    qa: [
      { q: "特技は？", a: "人の心に刺さるコピー作成" },
      { q: "休日の過ごし方", a: "愛犬と一緒にドッグランへ" },
      { q: "マイブーム", a: "ポッドキャスト配信" },
      { q: "好きな本", a: "行動心理学の書籍" },
      { q: "モットー", a: "まずはやってみる" },
    ],
  },
  {
    id: 7,
    name: "Tom Brown",
    role: "QA Engineer",
    img: "https://picsum.photos/400/500?random=17",
    theme: "#b0b5be",
    intro:
      "少しのバグも見逃さず、品質の最後の砦として活躍します。あらゆるエッジケースを想定したテストシナリオを作成し、ユーザーに安心を届けます。",
    qa: [
      { q: "性格を一言で", a: "几帳面で慎重" },
      { q: "趣味", a: "複雑なジグソーパズル" },
      { q: "特技", a: "タイピングの速さ" },
      { q: "好きな言葉", a: "急がば回れ" },
      { q: "仕事の相棒", a: "複数台のテスト用スマホ" },
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

if (
  content &&
  btnPrev &&
  btnNext &&
  elTheme &&
  elImg &&
  elRole &&
  elName &&
  elIntro &&
  elQa
) {
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
}
