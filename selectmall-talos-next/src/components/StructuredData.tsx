/**
 * 構造化データ（JSON-LD）
 * SEO最適化のため、検索エンジンにコンテンツの意味を伝える
 */

import { faqItems } from "@/constants/faqItems";

const SITE_URL = "https://selectmall-keg.jp";

// FAQ（ページ表示内容と完全一致）
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

// 組織情報
export const organizationStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "セレクトモール株式会社",
  alternateName: ["Talos ケグ", "タロスケグ", "TALOS ワンウェイケグ"],
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/logo/selectmall-logo_old.svg`,
  description:
    "Talos ケグ（タロスケグ）の正規販売代理店。TALOS（タロス）ワンウェイケグのお見積・導入相談を承ります。",
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${SITE_URL}/`,
  },
  sameAs: [`${SITE_URL}/`],
};

// パンくずリスト
export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "ホーム",
      item: `${SITE_URL}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Talos ケグ（タロスケグ）",
      item: `${SITE_URL}/`,
    },
  ],
};

// WebSite
export const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Talos ケグ（タロスケグ）公式｜セレクトモール",
  alternateName: [
    "Talos ケグ",
    "タロスケグ",
    "タロス ケグ",
    "TALOS ケグ",
    "TALOS ワンウェイケグ",
  ],
  url: SITE_URL,
  inLanguage: "ja",
  publisher: {
    "@type": "Organization",
    name: "セレクトモール株式会社",
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/images/logo/selectmall-logo_old.svg`,
    },
  },
};

// 商品（Talos ケグ / タロスケグ）
export const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Talos ケグ（タロスケグ）",
  alternateName: [
    "Talos ケグ",
    "タロスケグ",
    "タロス ケグ",
    "TALOS ケグ",
    "TALOS ワンウェイケグ",
    "タロス ワンウェイケグ",
  ],
  description:
    "Talos ケグ（タロスケグ）は、TALOS（タロス）製の使い捨てワンウェイビールケグ。単層ケグ・T-KEG・BREWJETのラインナップ。回収・洗浄不要で運用コストを削減。",
  brand: {
    "@type": "Brand",
    name: "TALOS",
    alternateName: "Talos",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Talos",
  },
  image: [
    `${SITE_URL}/images/sns/ogp_1200_630.png`,
    `${SITE_URL}/images/keg/tansou-descript.png`,
    `${SITE_URL}/images/keg/TKEG.png`,
    `${SITE_URL}/images/keg/BREWJET-descript.png`,
  ],
  offers: {
    "@type": "Offer",
    url: `${SITE_URL}/#estimate`,
    priceCurrency: "JPY",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "セレクトモール株式会社",
      url: `${SITE_URL}/`,
    },
  },
};
