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
    name: "野口 えゆ",
    role: "日本ウオ",
    img: "../assets/images/noguchi2.png",
    theme: "#d5a8bd",
    stats: [100, 80, 60, 80, 100],
    intro:
      "元気いっぱいムードメーカー。自他ともに認める可愛い顔がチャームポイント。よく女子に間違われるが、中身は結構ちゃんと男。",
    qa: [
      { q: "担当：ボケ・ネタ作り", a: "本名：野口（のぐち）えゆ" },
      { q: "性別：男", a: "身長/体重：166cm/49kg" },
      { q: "年齢：17歳", a: "誕生日：4月16日" },
      { q: "部活：バスケ部キャプテン", a: "きょうだい構成：妹・弟" },
      {
        q: "好き：バスケ、ゲーム、ダンス（HIPHOP、POP）",
        a: "苦手：勉強",
      },
    ],
  },
  {
    id: 1,
    name: "原 裕也",
    role: "日本ウオ",
    img: "../assets/images/hara2.png",
    theme: "#f4e39b",
    stats: [100, 70, 50, 60, 90],
    intro:
      "態度も口も悪い小さきチンピラ。平常心の状態からノータイムでブチギレまで持っていける。対人関係は舐められるか嫌われるかの二択。",
    qa: [
      { q: "担当：ツッコミ・ネタ作り", a: "本名：原裕也（はら ゆうや）" },
      { q: "性別：男", a: "身長/体重：157cm/55kg" },
      { q: "年齢：17歳", a: "誕生日：2月3日" },
      { q: "部活：帰宅部", a: "きょうだい構成：姉" },
      {
        q: "好き：寝ること、食べること",
        a: "苦手：勉強、人付き合い",
      },
    ],
  },
  {
    id: 2,
    name: "石出",
    role: "おっとっと",
    img: "../assets/images/ishide2.png",
    theme: "#a8c7d5",
    stats: [80, 70, 95, 50, 100],
    intro:
      "インテリ常識人。内科医の父と眼科医の母を持つ。陰キャオタクだが友達は多い。相方の河田にはいつも振り回されているが、内心彼に憧れている。",
    qa: [
      {
        q: "担当：ツッコミ・ネタ作り",
        a: "本名：石出 慎太郎（いしで しんたろう）",
      },
      { q: "性別：男", a: "身長/体重：175cm/56kg" },
      { q: "年齢：17歳", a: "誕生日：12月4日" },
      { q: "部活：工学部副部長", a: "きょうだい構成：一人っ子" },
      {
        q: "好き：漫画、アニメ、インターネット",
        a: "苦手：下ネタ、恋愛",
      },
    ],
  },
  {
    id: 3,
    name: "河田 イガラシ",
    role: "おっとっと",
    img: "../assets/images/kawata2.png",
    theme: "#afd69e",
    stats: [80, 80, 80, 70, 20],
    intro:
      "自由奔放な変人。いつもうっすらニヤついている。父が二人おり、どちらも大企業の重役。ボンボン。英・中・仏語が話せる。元子役。",
    qa: [
      {
        q: "担当：ボケ",
        a: "本名：服部 瞬（はっとり しゅん）",
      },
      { q: "性別：男", a: "身長/体重：172cm/60kg" },
      { q: "年齢：17歳", a: "誕生日：11月5日" },
      { q: "部活：帰宅部", a: "きょうだい構成：義理の妹" },
      {
        q: "好き：歌、散歩、ピアノ、バイオリン",
        a: "苦手：じっとしていること、チクチクする素材",
      },
    ],
  },
  {
    id: 4,
    name: "ミサキ",
    role: "ユウシュウのビ",
    img: "../assets/images/misaki2.png",
    theme: "#d2b4de",
    stats: [70, 60, 90, 70, 100],
    intro:
      "お笑い以外に興味が無い重度のお笑いオタク。彼女が作るネタはかなり好き嫌いが分かれる。ポーカーフェイスで飄々としているが、実は人懐っこい。",
    qa: [
      {
        q: "担当：ボケ・ツッコミ・ネタ作り",
        a: "本名：岬 優香（みさき ゆうか）",
      },
      { q: "性別：女", a: "身長/体重：155cm/42kg" },
      { q: "年齢：16歳", a: "誕生日：5月23日" },
      { q: "部活：帰宅部", a: "きょうだい構成：兄" },
      {
        q: "好き：お笑い鑑賞、ネタ作り",
        a: "苦手：豆乳、肉の脂身",
      },
    ],
  },
  {
    id: 5,
    name: "信",
    role: "ユウシュウのビ",
    img: "../assets/images/shin2.png",
    theme: "#cdb68c",
    stats: [60, 40, 70, 40, 10],
    intro:
      "体は大きいが非常に人見知りでコミュ障。ミサキのことを半ば妄信的に慕っている。そばかすと低い声がコンプレックス。馬鹿力。",
    qa: [
      {
        q: "担当：ボケ・ツッコミ",
        a: "本名：田沼 佐和（たぬま さわ）",
      },
      { q: "性別：女", a: "身長/体重：173cm/70kg" },
      { q: "年齢：16歳", a: "誕生日：7月18日" },
      { q: "部活：帰宅部", a: "きょうだい構成：一人っ子" },
      {
        q: "好き：ミサキ",
        a: "苦手：人と話すこと、人前に出ること",
      },
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
