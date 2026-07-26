export const ESTIMATE_FORMS = {
  tansou: "https://forms.gle/hn1nNSwdXJCmfDbK6",
  tkeg: "https://forms.gle/2DedFLwTzbwtFbzU8",
  brewjet: "https://forms.gle/LWNdYRhZUrbvB4ga9",
} as const;

export type EstimateProductKey = keyof typeof ESTIMATE_FORMS;

export const ESTIMATE_PRODUCTS: {
  key: EstimateProductKey;
  label: string;
  description: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}[] = [
  {
    key: "tansou",
    label: "単層ケグ",
    description: "S/A/G/Tタイプ規格対応",
    image: {
      src: "/images/keg/tansou-descript.png",
      alt: "単層ケグ",
      width: 1644,
      height: 1154,
    },
  },
  {
    key: "tkeg",
    label: "T-KEG",
    description: "卵型・円筒型",
    image: {
      src: "/images/keg/TKEG.png",
      alt: "T-KEG（2層ケグ）",
      width: 1644,
      height: 1154,
    },
  },
  {
    key: "brewjet",
    label: "BREWJET",
    description: "専用カプラー対応",
    image: {
      src: "/images/keg/BREWJET-descript.png",
      alt: "BREWJET",
      width: 1644,
      height: 1154,
    },
  },
];
