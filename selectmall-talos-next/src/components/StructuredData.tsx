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
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceValidUntil: "2024-12-31",
    seller: {
      "@type": "Organization",
      name: "セレクトモール株式会社",
    },
  },
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
};
