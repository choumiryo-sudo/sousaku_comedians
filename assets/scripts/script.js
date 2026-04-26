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
    nameRomaji: "Noguchi Eyu",
    role: "日本ウオ",
    img: "../assets/images/noguchi2.png",
    theme: "#f2b5d2",
    stats: [100, 80, 60, 80, 100],
    intro:
      "元気いっぱいムードメーカー。自他ともに認める可愛い顔がチャームポイント。よく女子に間違われるが、中身は結構男。関西弁。",
    qa: [
      { q: "担当：ボケ、ネタ作り", a: "本名：野口（のぐち）えゆ" },
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
    nameRomaji: "Hara Yuuya",
    role: "日本ウオ",
    img: "../assets/images/hara2.png",
    theme: "#f1dc7b",
    stats: [100, 70, 50, 60, 90],
    intro:
      "態度も口も悪い小さきチンピラ。平常心の状態からノータイムでブチギレまで持っていける。対人関係は舐められるか嫌われるかの二択。関西弁。",
    qa: [
      { q: "担当：ツッコミ、ネタ作り", a: "本名：原裕也（はら ゆうや）" },
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
    nameRomaji: "Ishide",
    role: "おっとっと",
    img: "../assets/images/ishide2.png",
    theme: "#a3c9e8",
    stats: [80, 70, 95, 50, 100],
    intro:
      "インテリ常識人。内科医の父と眼科医の母を持つ。陰キャオタクだが友達は多い。相方の河田にはいつも振り回されているが、内心彼に憧れている。",
    qa: [
      {
        q: "担当：ツッコミ、ネタ作り",
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
    nameRomaji: "Kawata Igarashi",
    role: "おっとっと",
    img: "../assets/images/kawata2.png",
    theme: "#afcca3",
    stats: [80, 80, 70, 70, 20],
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
    nameRomaji: "Misaki",
    role: "ユウシュウのビ",
    img: "../assets/images/misaki2.png",
    theme: "#cbb4de",
    stats: [70, 60, 90, 70, 100],
    intro:
      "お笑い以外に興味が無い重度のお笑いオタク。彼女が作るネタはかなり好き嫌いが分かれる。ポーカーフェイスで飄々としているが、実は人懐っこい。",
    qa: [
      {
        q: "担当：ボケ、ツッコミ、ネタ作り",
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
    nameRomaji: "Shin",
    role: "ユウシュウのビ",
    img: "../assets/images/shin2.png",
    theme: "#cdb68c",
    stats: [60, 40, 60, 40, 10],
    intro:
      "体は大きいが非常に人見知りでコミュ障。ミサキのことを半ば妄信的に慕っている。そばかすと低い声がコンプレックス。馬鹿力。",
    qa: [
      {
        q: "担当：ボケ、ツッコミ",
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
  {
    id: 6,
    name: "田中 交子",
    nameRomaji: "Tanaka Kouko",
    role: "ダダダ田",
    img: "../assets/images/tanaka2.png",
    theme: "#cd8f8c",
    stats: [30, 20, 40, 30, 20],
    intro:
      "ちゃらんぽらんな適当人間。女好き。サボり魔で遅刻魔。実家は出ているが家が無いので数の家に居候している。髪色は気分で変える。",
    qa: [
      {
        q: "担当：ボケ、ツッコミ",
        a: "本名：田中 交子（たなか こうこ）",
      },
      { q: "性別：女", a: "身長/体重：166cm/47kg" },
      { q: "年齢：23歳", a: "誕生日：非公表" },
      { q: "職業：無職", a: "きょうだい構成：兄" },
      {
        q: "好き：酒、タバコ、パチンコ",
        a: "苦手：時間管理、勉強、掃除片付け",
      },
    ],
  },
  {
    id: 7,
    name: "山田 数",
    nameRomaji: "Yamada Suu",
    role: "ダダダ田",
    img: "../assets/images/yamada2.png",
    theme: "#a4a4a4",
    stats: [40, 20, 50, 10, 60],
    intro:
      "卑屈で常に（交子に）イライラしている。自意識過剰。プライドは高いが自己肯定感は低い。交子に説教しているが、自分もかなりの社会不適合者。",
    qa: [
      {
        q: "担当：ボケ、ツッコミ、ネタ作り",
        a: "本名：山田 数（やまだ すう）",
      },
      { q: "性別：男", a: "身長/体重：169cm/52kg" },
      { q: "年齢：23歳", a: "誕生日：非公表" },
      { q: "職業：CDショップアルバイト", a: "きょうだい構成：一人っ子" },
      {
        q: "好き：B級映画、インディーズバンド、サブカルチャー全般",
        a: "苦手：人混み",
      },
    ],
  },
  {
    id: 8,
    name: "文尾 綾夢菜",
    nameRomaji: "Bunbi Ayuna",
    role: "耄碌パソコン研究会",
    img: "../assets/images/bunbi2.png",
    theme: "#cd8cc5",
    stats: [60, 40, 50, 50, 10],
    intro:
      "サブカル好きのオタク女子。理系、特に数学が大得意。休日はメイクが濃いが、朝が弱いので平日はすっぴん。一人称は「文尾」。",
    qa: [
      {
        q: "担当：ボケ",
        a: "本名： 中村 莉乃（なかむら りの）",
      },
      { q: "性別：女", a: "身長/体重：145cm/43kg" },
      { q: "年齢：17歳", a: "誕生日：非公表" },
      {
        q: "好き：アニメ、ゲーム（ソシャゲ）、数学",
        a: "苦手：朝起きること、運動",
      },
    ],
  },
  {
    id: 9,
    name: "おぶ",
    nameRomaji: "Obu",
    role: "耄碌パソコン研究会",
    img: "../assets/images/hikawa2.png",
    theme: "#9fc8cf",
    stats: [70, 50, 100, 20, 90],
    intro:
      "とにかく寡黙でポーカーフェイス。何をされても怒らないので、あだ名は「仏像」。「おぶ」は好きなゲームのタイトルから。宮城出身。",
    qa: [
      {
        q: "担当：ツッコミ",
        a: "本名：樋川 海（ひかわ かい）",
      },
      { q: "性別：男", a: "身長/体重：192cm/86kg" },
      { q: "年齢：17歳", a: "誕生日：非公表" },
      {
        q: "好き：機械いじり、大喜利",
        a: "苦手：宮城弁を指摘されること",
      },
    ],
  },
  {
    id: 10,
    name: "たかはた",
    nameRomaji: "Takahata",
    role: "トリリオン",
    img: "../assets/images/takahata2.png",
    theme: "#e7d2ad",
    stats: [10, 80, 20, 60, 95],
    intro:
      "生き物が大好き（特に虫）で、子供のころのあだ名は「ハカセ」。表では「ボク」というが、いつもは「俺」。メガネは伊達で、実は視力2.0。",
    qa: [
      {
        q: "担当：ツッコミ",
        a: "本名：髙畑 篤樹（たかはた あつき）",
      },
      { q: "性別：男", a: "身長/体重：165cm/55kg" },
      { q: "年齢：20歳", a: "誕生日：非公表" },
      { q: "部活：演劇部出身", a: "きょうだい構成：妹" },
      {
        q: "好き：生き物（特に虫）",
        a: "苦手：イジられること",
      },
    ],
  },
  {
    id: 11,
    name: "えはら",
    nameRomaji: "Ehara",
    role: "トリリオン",
    img: "../assets/images/ehara2.png",
    theme: "#c9999e",
    stats: [30, 90, 50, 80, 50],
    intro:
      "ナチュラルボーンお嬢様。上品で明るい性格。基本的に常識人だが、時々世間知らずが露呈する。著名な建築家の父と、手芸作家の母を持つ。",
    qa: [
      {
        q: "担当：ボケ",
        a: "本名：榎原 明治（えはら めいじ）",
      },
      { q: "性別：女", a: "身長/体重：158cm/43kg" },
      { q: "年齢：20歳", a: "誕生日：非公表" },
      { q: "部活：演劇部出身", a: "きょうだい構成：兄" },
      {
        q: "好き：おしゃれ、美術館巡り、カフェ巡り",
        a: "苦手：交通機関の乗り換え、金銭感覚",
      },
    ],
  },
  {
    id: 12,
    name: "くつ",
    nameRomaji: "Kutsu",
    role: "トリリオン",
    img: "../assets/images/kutsu2.png",
    theme: "#bde2f8",
    stats: [20, 90, 70, 60, 30],
    intro:
      "いつもふにゃっとしている。何を考えているか分からないとよく言われる。かなりの天然。猫っ毛と大きな口がチャームポイント。あだ名は「くっつ」。",
    qa: [
      {
        q: "担当：ボケ",
        a: "本名：沓 健人（くつ けんと）",
      },
      { q: "性別：男", a: "身長/体重：170cm/46kg" },
      { q: "年齢：20歳", a: "誕生日：非公表" },
      { q: "部活：演劇部出身", a: "きょうだい構成：一人っ子" },
      {
        q: "好き：お散歩",
        a: "苦手：早く話すこと",
      },
    ],
  },
  {
    id: 13,
    name: "井上100円ショップ",
    nameRomaji: "Inoue 100 En Shop",
    role: "　",
    img: "../assets/images/inoue2.png",
    theme: "#bea07b",
    stats: [50, 60, 95, 80, 95],
    intro:
      "サバサバした姉御肌。優しくはないが面倒見は良い。奈良弁をベースに色々な方言が混ざる。芸名を考える時たまたま100円ショップに居たのでこの名前。",
    qa: [
      {
        q: "担当：ピン",
        a: "本名：井上 好実（いのうえ よしみ）",
      },
      { q: "性別：女", a: "身長/体重：168cm/54kg" },
      { q: "年齢：28歳", a: "誕生日：非公表" },
      {
        q: "好き：酒",
        a: "苦手：喫煙者、「メロい」と言われること",
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
const elNameRomaji = document.getElementById("profile-name-romaji");
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
  elNameRomaji &&
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
    elNameRomaji.textContent = p.nameRomaji;
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

//ここから下はshindan.htmlで使用するデータ構造です。

const questions = [
  {
    text: "質問1：休日は何して過ごす？",
    A: "友達と遊ぶ（E）",
    B: "家で休む（I）",
  },
  {
    text: "質問2：道に迷った時、どうする？",
    A: "まず調べる（S）",
    B: "勘を頼りにする（N）",
  },
  {
    text: "質問3：友達が落ち込んでたら？",
    A: "解決法を考える（T）",
    B: "まずは寄り添う（F）",
  },
  {
    text: "質問4：夏休みの宿題は？",
    A: "計画的に進める（J）",
    B: "なんとかなるでしょ！（P）",
  },
  {
    text: "質問5：あなたは？",
    A: "ボケ気質（個性的）",
    B: "ツッコミ気質（常識人）",
  },
];

// 変更点: 以前の results と profileMapping を統合し、
// 「タイトル」「人物ID」「画像URL」「説明文」を32パターン個別に手動登録できるデータ構造（resultData）に変更しました。
const resultData = {
  AAAAA: {
    title: "井上100円ショップ",
    profileId: 13,
    img: "../assets/images/inoue2.png",
    desc: "思ったことは率直に言うけど、実は思いやりがある。年下から慕われることが多い。",
  },
  AAAAB: {
    title: "たかはた",
    profileId: 10,
    img: "../assets/images/takahata2.png",
    desc: "興味のあることはとことん掘り下げる。ちょっと見栄っ張りなところも？",
  },
  AAABA: {
    title: "田中 交子",
    profileId: 6,
    img: "../assets/images/tanaka2.png",
    desc: "お気楽怠け者タイプ。自由奔放すぎて、時間にルーズなところに注意。",
  },
  AAABB: {
    title: "石出",
    profileId: 2,
    img: "../assets/images/ishide2.png",
    desc: "真面目なインテリタイプ。でも意外と友達とワイワイするのも好き。",
  },
  AABAA: {
    title: "田中",
    profileId: 6,
    img: "../assets/images/tanaka2.png",
    desc: "お気楽怠け者タイプ。自由奔放すぎて、時間にルーズなところに注意。",
  },
  AABAB: {
    title: "牧 かずき",
    profileId: 19,
    img: "../assets/images/maki2.png",
    desc: "心優しき見守りポジション。元気ハツラツなタイプと相性Good。",
  },
  AABBA: {
    title: "野口えゆ",
    profileId: 0,
    img: "../assets/images/noguchi2.png",
    desc: "元気いっぱいなアイドル的存在。人望が厚い。でも実は冷静な一面も？",
  },
  AABBB: {
    title: "野口えゆ",
    profileId: 0,
    img: "../assets/images/noguchi2.png",
    desc: "元気いっぱいなアイドル的存在。人望が厚い。でも実は冷静な一面も？",
  },

  ABAAA: {
    title: "アキオ",
    profileId: 14,
    img: "../assets/images/akio2.png",
    desc: "愛され上手なあざといタイプ。異性の友達は多いけど、恋人作りには苦戦しそう。",
  },
  ABAAB: {
    title: "井上100円ショップ",
    profileId: 13,
    img: "../assets/images/inoue2.png",
    desc: "思ったことは率直に言うけど、実は思いやりがある。年下から慕われることが多い。",
  },
  ABABA: {
    title: "河田イガラシ",
    profileId: 3,
    img: "../assets/images/kawata2.png",
    desc: "とにかくマイペース。「変わり者」って言われることも多いのでは。拾い食いはほどほどに！",
  },
  ABABB: {
    title: "泉 大雅",
    profileId: 21,
    img: "../assets/images/izumi2.png",
    desc: "ちょっぴりチャラい兄貴肌。平凡すぎて芸人にはあんまり向いてないかも。",
  },
  ABBAA: {
    title: "河田イガラシ",
    profileId: 3,
    img: "../assets/images/kawata2.png",
    desc: "とにかくマイペース。「変わり者」って言われることも多いのでは。拾い食いはほどほどに！",
  },
  ABBAB: {
    title: "えはら",
    profileId: 11,
    img: "../assets/images/ehara2.png",
    desc: "いつもニコニコしている癒し系。本当は親しみやすいのに、高嶺の花だと思われがち。",
  },
  ABBBA: {
    title: "岩川 なつは",
    profileId: 18,
    img: "../assets/images/iwakawa2.png",
    desc: "天真爛漫なムードメーカー。ちょっと抜けているけど、周りが助けてくれる。",
  },
  ABBBB: {
    title: "野口えゆ",
    profileId: 0,
    img: "../assets/images/noguchi2.png",
    desc: "元気いっぱいなアイドル的存在。人望が厚い。でも実は冷静な一面も？",
  },

  BAAAA: {
    title: "ミサキ",
    profileId: 4,
    img: "../assets/images/misaki2.png",
    desc: "興味があることにはとことん熱中する。周りからは近寄りがたいと思われがち。",
  },
  BAAAB: {
    title: "ヒラヤマ",
    profileId: 15,
    img: "../assets/images/hirayama2.png",
    desc: "ぱっと見常識人に見えるけど、実は結構な変わり者。職質されがちなのが悩み。",
  },
  BAABA: {
    title: "ミサキ",
    profileId: 4,
    img: "../assets/images/misaki2.png",
    desc: "興味があることにはとことん熱中する。周りからは近寄りがたいと思われがち。",
  },
  BAABB: {
    title: "山田 数",
    profileId: 7,
    img: "../assets/images/yamada2.png",
    desc: "プライドは高いけど自己肯定感は低い。自分の世界に閉じこもりがち。",
  },
  BABAA: {
    title: "くつ",
    profileId: 12,
    img: "../assets/images/kutsu2.png",
    desc: "「何考えてるの？」と言われがちな不思議ちゃん。天然愛されキャラ。",
  },
  BABAB: {
    title: "石出",
    profileId: 2,
    img: "../assets/images/ishide2.png",
    desc: "真面目なインテリタイプ。でも意外と友達とワイワイするのも好き。",
  },
  BABBA: {
    title: "極寒大号泣",
    profileId: 17,
    img: "../assets/images/senda2.png",
    desc: "一見クールだけど、ボソッと言ったことで笑いが取れるかも。逆張りしすぎには注意。",
  },
  BABBB: {
    title: "デジタルレインボー松山",
    profileId: 16,
    img: "../assets/images/matsuyama2.png",
    desc: "繊細メンヘラ気質。SNSの文体で病んでるかどうかわかる。依存体質には注意。",
  },

  BBAAA: {
    title: "泉 志保",
    profileId: 20,
    img: "../assets/images/izumis2.png",
    desc: "夢のためなら努力を惜しまない体育会系。自分の平凡さに思い悩んでいる。",
  },
  BBAAB: {
    title: "おぶ",
    profileId: 9,
    img: "../assets/images/hikawa2.png",
    desc: "朝ポーカーフェイス。感情を表に出さない。本人は寡黙だけど、なぜか周りに人が集まる。",
  },
  BBABA: {
    title: "田中 交子",
    profileId: 6,
    img: "../assets/images/tanaka2.png",
    desc: "お気楽怠け者タイプ。自由奔放すぎて、時間にルーズなところに注意。",
  },
  BBABB: {
    title: "原 裕也",
    profileId: 1,
    img: "../assets/images/hara2.png",
    desc: "トゲトゲしい狂犬タイプ。短気すぎて人を寄せ付けない。でもそこが可愛げ？",
  },
  BBBAA: {
    title: "えはら",
    profileId: 11,
    img: "../assets/images/ehara2.png",
    desc: "いつもニコニコしている癒し系。本当は親しみやすいのに、高嶺の花だと思われがち。",
  },
  BBBAB: {
    title: "信",
    profileId: 5,
    img: "../assets/images/shin2.png",
    desc: "人と話すときに挙動不審になりがち。人前に出るのは苦手。生涯の友達を見つけよう！",
  },
  BBBBA: {
    title: "文尾 綾夢菜",
    profileId: 8,
    img: "../assets/images/bunbi2.png",
    desc: "ハイテンションなオタクタイプ。理系方面に才能アリ。でも病んだらとことん病んじゃう。",
  },
  BBBBB: {
    title: "信",
    profileId: 5,
    img: "../assets/images/shin2.png",
    desc: "人と話すときに挙動不審になりがち。人前に出るのは苦手。生涯の友達を見つけよう！",
  },
};

let currentIndex = 0;
let answers = "";

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("step-indicator").textContent =
    `Question ${currentIndex + 1} / ${questions.length}`;
  document.getElementById("question").textContent = q.text;
  document.getElementById("btnA").textContent = q.A;
  document.getElementById("btnB").textContent = q.B;
}

function answer(choice) {
  answers += choice;
  currentIndex++;

  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-area").style.display = "none";
  document.getElementById("result-area").style.display = "block";

  // 変更点: 回答パターン（例: "AAAAA"）をキーにして、resultData から登録情報を丸ごと取得します
  const data = resultData[answers];

  // 変更点: 取得したデータが存在すればそれを使い、無ければエラー用の表示を出します
  if (data) {
    document.getElementById("result-title").textContent =
      "あなたと相性がいいのは……" + data.title + "かも？";
    document.getElementById("result-img").src = data.img;
    document.getElementById("result-desc").textContent = data.desc;
    document.getElementById("result-link").href =
      `profile.html?id=${data.profileId}`;
  } else {
    document.getElementById("result-title").textContent =
      "未定義のパターンです";
    document.getElementById("result-img").style.display = "none"; // 画像を隠す
    document.getElementById("result-desc").textContent =
      "データが登録されていません。";
    document.getElementById("result-link").style.display = "none"; // リンクを隠す
  }
}

showQuestion();
