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
// 変更点: 各個人のデータにレーダーチャート用の 'stats' プロパティを追加しました。
// 値の順番は ['漫才', 'コント', '大喜利', 'トーク', 'ネタ書き'] です。
const profiles = [
  {
    id: 0,
    name: "野口えゆ",
    role: "日本ウオ",
    img: "../assets/images/noguchi2.png",
    theme: "#d5a8bd",
    stats: [100, 80, 60, 80, 100],
    intro:
      "元気いっぱいムードメーカー。自他ともに認める可愛い顔がチャームポイント。よく女子に間違われるが、中身は結構ちゃんと男。",
    qa: [
      { q: "担当：ボケ・ネタ作り", a: "本名：野口えゆ" },
      { q: "性別：男", a: "身長/体重：166cm/49kg" },
      { q: "年齢：17歳", a: "誕生日：4月16日" },
      { q: "部活：バスケ部キャプテン", a: "きょうだい構成：妹・弟" },
      {
        q: "好きなこと：バスケ、ゲーム、ダンス（HIPHOP、POP）",
        a: "苦手なこと：勉強",
      },
    ],
  },
  {
    id: 1,
    name: "Kenji Sato",
    role: "Front-end Developer",
    img: "https://picsum.photos/400/500?random=11",
    theme: "#d5a8b0",
    stats: [70, 95, 75, 90, 80],
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
    stats: [60, 80, 95, 85, 70],
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
    stats: [50, 95, 65, 80, 70],
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
    stats: [95, 55, 85, 70, 100],
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
    stats: [60, 100, 75, 85, 70],
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

  // 変更点: Chart.jsのインスタンスを保持する変数
  let radarChart;

  // 変更点: レーダーチャートを初期化する関数
  function initChart() {
    const canvas = document.getElementById("profile-radar-chart");
    if (!canvas || typeof Chart === "undefined") {
      return;
    }
    const ctx = canvas.getContext("2d");

    // Chart.js のグローバルフォント設定
    Chart.defaults.font.family =
      "'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', sans-serif";
    Chart.defaults.color = "#888";

    radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: ["漫才", "コント", "大喜利", "トーク", "ネタ書き"],
        datasets: [
          {
            label: "Status",
            data: [], // データは切り替え時にセット
            backgroundColor: "rgba(0,0,0,0.2)", // 仮の色
            borderColor: "#000", // 仮の色
            borderWidth: 2,
            pointBackgroundColor: "#fff",
            pointBorderColor: "#000", // 仮の色
            pointBorderWidth: 2,
            pointRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: { display: false, stepSize: 20 },
            grid: { color: "rgba(0, 0, 0, 0.05)" },
            angleLines: { color: "rgba(0, 0, 0, 0.05)" },
            pointLabels: {
              font: { size: 12, weight: "bold" },
              color: "#555",
            },
          },
        },
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }, // 見た目重視のためツールチップはオフ
        },
      },
    });
  }

  // 変更点: テーマカラー(16進数)をrgba(半透明)に変換するヘルパー関数
  function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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

    updateRadarChart(p);
  }

  // 変更点: チャートのデータと色を、人物のテーマカラーに合わせて更新します
  function updateRadarChart(profile) {
    if (!radarChart) {
      return;
    }

    radarChart.data.datasets[0].data = profile.stats;
    radarChart.data.datasets[0].backgroundColor = hexToRgba(profile.theme, 0.4); // 塗りつぶしは半透明
    radarChart.data.datasets[0].borderColor = profile.theme;
    radarChart.data.datasets[0].pointBorderColor = profile.theme;
    radarChart.update();
  }

  // 変更点: ページ読み込み時にチャートを初期化
  initChart();
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
