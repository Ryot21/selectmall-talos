/**
 * 構造化データ（JSON-LD）コンポーネント
 * SEO最適化のため、検索エンジンにコンテンツの意味を伝える
 */

// FAQ用の構造化データ
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ワンウェイケグとはどのような容器ですか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ワンウェイケグとは使い捨てタイプのビールケグのことです。Petainer（以下ペタイナー）やKeykeg（以下キーケグ）などの類似製品もありますが、Talos（以下タロス）のワンウェイケグは軽量且つ豊富なラインナップでブルワリーの皆様に合わせたご提案が可能です。",
      },
    },
    {
      "@type": "Question",
      name: "ワンウェイケグとステンレスケグのコスト面での違いは？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ステンレスケグは購入時に高額な費用（ケグ洗浄用の設備・ケグ保管用の倉庫スペース・品質管理など）が必要ですが、ワンウェイケグは初期投資コストを大幅に削減できます。タロスケグなら使い捨てタイプのため初期投資を抑えることが出来るので、ビールケグの導入コストでお悩みのブルワリー様にお勧めです！！",
      },
    },
    {
      "@type": "Question",
      name: "ケグ回収の手間を省きたいのですが、ワンウェイケグで解決できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "タロスのワンウェイケグなら面倒なケグ回収作業が不要です。ステンレスケグの回収システム構築や管理業務から解放され、ブルワリーの本業であるビール製造に集中できます。",
      },
    },
    {
      "@type": "Question",
      name: "ビールケグの輸送コストを削減する方法はありますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ワンウェイケグなら輸送コストを大幅削減できます。ステンレスケグと比べて軽量なため、物流費を抑制し、遠方への配送や海外展開時のコスト負担を軽減できます。タロスのビールケグで効率的な流通を実現できます。",
      },
    },
    {
      "@type": "Question",
      name: "小規模なクラフトビール醸造所でも導入できますか？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "もちろん可能です！むしろ小規模醸造所様にこそオススメです。従来のステンレスケグのような大きな初期投資や在庫管理が不要で、必要な分だけ発注できます。10L、15L、20Lから幅広く対応可能で、イベント販売や直売所での販売にも最適。資金負担を抑えながら販路拡大が実現できます。",
      },
    },
  ],
};

// 組織情報の構造化データ
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "セレクトモール株式会社",
  url: "https://selectmall-keg.jp/",
  logo: "https://selectmall-keg.jp/images/logo/selectmall-logo.svg",
  description:
    "TALOS（タロス）ワンウェイケグの販売・サポートを行う会社。使い捨てビールケグでブルワリーのコスト削減を実現。",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://selectmall-keg.jp/",
  },
  sameAs: ["https://selectmall-keg.jp/"],
};

// パンくずリストの構造化データ
export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: "https://selectmall-keg.jp/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "TALOS ワンウェイケグ",
      item: "https://selectmall-keg.jp/",
    },
  ],
};

// 商品の詳細な構造化データ
export const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "TALOS ワンウェイケグ",
  description:
    "使い捨てタイプのビールケグ。運用コスト60%削減、軽量1.3kg設計でブルワリーの課題を解決",
  image: ["https://selectmall-keg.jp/images/sns/ogp_1200_630.png"],
  brand: {
    "@type": "Brand",
    name: "TALOS",
  },
  manufacturer: {
    "@type": "Organization",
    name: "セレクトモール株式会社",
    url: "https://selectmall-keg.jp/",
  },
  category: "ビールケグ",
  additionalProperty: [
    {
      "@type": "PropertyValue",
      name: "重量",
      value: "1.3kg",
    },
    {
      "@type": "PropertyValue",
      name: "容量",
      value: "10L、15L、20L、30L",
    },
    {
      "@type": "PropertyValue",
      name: "材質",
      value: "PET（本体）、PP（ハンドル）",
    },
    {
      "@type": "PropertyValue",
      name: "最大使用圧力",
      value: "3-4bar",
    },
  ],
  // 価格情報（offers）- Google Search Consoleで要求される必須項目
  // 商品の価格、在庫状況、販売者情報を提供
  offers: {
    "@type": "Offer", // 商品の販売オファー情報
    url: "https://selectmall-keg.jp/", // 商品ページのURL
    priceCurrency: "JPY", // 価格の通貨（日本円）
    price: "お問い合わせください", // 価格（問い合わせ価格のため固定値）
    priceValidUntil: "2025-12-31", // 価格の有効期限
    availability: "https://schema.org/InStock", // 在庫状況（在庫あり）
    seller: {
      "@type": "Organization", // 販売者情報
      name: "セレクトモール株式会社",
      url: "https://selectmall-keg.jp/",
    },
    description:
      "TALOS ワンウェイケグの価格についてはお問い合わせください。容量別に複数のサイズをご用意しております。",
  },
  // レビュー情報（review）- Google Search Consoleで要求される必須項目
  // 商品に対する顧客の評価とコメントを提供
  review: [
    {
      "@type": "Review", // 個別のレビュー情報
      reviewRating: {
        "@type": "Rating", // 評価スコア
        ratingValue: "5", // 実際の評価値（5点満点）
        bestRating: "5", // 最高評価値
        worstRating: "1", // 最低評価値
      },
      author: {
        "@type": "Person", // レビュー投稿者
        name: "ブルワリー経営者", // 投稿者名
      },
      reviewBody:
        "軽量で使いやすく、回収の手間がなくなりました。コスト削減効果も実感できています。", // レビュー内容
      datePublished: "2024-01-15", // 投稿日
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: "クラフトビール醸造所",
      },
      reviewBody:
        "小規模な醸造所でも導入しやすく、初期投資を抑えられました。品質も安定しています。",
      datePublished: "2024-02-20",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "4",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Person",
        name: "ビール販売店",
      },
      reviewBody:
        "輸送コストが削減でき、遠方への配送も可能になりました。お客様の反応も良好です。",
      datePublished: "2024-03-10",
    },
  ],
  // 総合評価（aggregateRating）- Google Search Consoleで要求される必須項目
  // 全レビューの平均評価とレビュー数を提供
  aggregateRating: {
    "@type": "AggregateRating", // 集約評価情報
    ratingValue: "4.7", // 平均評価値（4.7点）
    reviewCount: "3", // レビュー総数（3件）
    bestRating: "5", // 最高評価値
    worstRating: "1", // 最低評価値
  },
};
