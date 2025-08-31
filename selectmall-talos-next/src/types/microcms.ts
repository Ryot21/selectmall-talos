import type {
    MicroCMSImage,
    MicroCMSListContent,
} from "microcms-js-sdk";


// 【 型定義 】
export type Client = {// 投稿者
    name:        string;        // 取引先企業名
    icon:        MicroCMSImage; // アイコン
    address:     string;        // 住所
    businessArea: {             // 事業内容リスト
        business01: string;
        business02: string;
        business03: string;
        business04: string;
        business05: string;
    };
    description: string;        // 企業説明
    purpose?:    string;        // LP > 導入した目的
    clincher?:   string;        // LP > 導入した決め手
    result?:     string;        // LP > 結果
    logo?:       MicroCMSImage; // ロゴ
    url:         string;        // URL
} & MicroCMSListContent;

export type Poster = {// 投稿者
    name:             string;        // お名前
    officialPosition: string;        // 部署名+役職
    description:      string;        // 説明
    image:            MicroCMSImage; // プロフィール画像
    url:              string;        // URL
} & MicroCMSListContent;

export type Category = {// カテゴリー
    name: string;
} & MicroCMSListContent;

export type Recommend = {// 合わせて読みたい記事
    id:          string;
    thumbnail:  MicroCMSImage;
    thumbnailAlt: string;
    mainTitle:   string;
    read?:       string;
    url:         string;
    publishedAt: string;
    createdAt:   string;
} & MicroCMSListContent;

export type Interview = {// ご利用者インタビュー
    id:             string;        // ID
    company:        string;        // 企業名
    client:         Client;        // 取引先情報
    category:       Category;      // カテゴリー
    thumbnail:      MicroCMSImage; // サムネイル
    thumbnailAlt:   string;        // サムネイル_alt
    mainTitle:      string;        // メインタイトル
    subTitle:       string;        // サブタイトル
    read:           string;        // 導入文
    article1Title:  string;        // 本文1_見出し
    article1Body:   string;        // 本文1
    article1Image:  MicroCMSImage; // 本文1
    article2Title:  string;        // 本文2_見出し
    article2Body:   string;        // 本文2
    article2Image:  MicroCMSImage; // 本文2
    article3Title?: string;        // 本文3_見出し
    article3Body?:  string;        // 本文3
    article3Image?: MicroCMSImage; // 本文3
    article4Title?: string;        // 本文4_見出し
    article4Body?:  string;        // 本文4
    article4Image?: MicroCMSImage; // 本文4
    article5Title?: string;        // 本文5_見出し
    article5Body?:  string;        // 本文5
    article5Image?: MicroCMSImage; // 本文5
    article6Title?: string;        // 本文6_見出し
    article6Body?:  string;        // 本文6
    article6Image?: MicroCMSImage; // 本文6
    article7Title?: string;        // 本文7_見出し
    article7Body?:  string;        // 本文7
    article7Image?: MicroCMSImage; // 本文7
    article8Title?: string;        // 本文8_見出し
    article8Body?:  string;        // 本文8
    article8Image?: MicroCMSImage; // 本文8


    publishedAt:    string;        // 更新日
    createdAt:      string;        // 作成日
} & MicroCMSListContent;

export type Information = {// お役立ち情報
    id:               string;        // ID
    mainTitle:        string;        // メインタイトル
    thumbnail:        MicroCMSImage; // サムネイル
    thumbnailAlt:     string;        // サムネイル_alt
    category:         Category;      // カテゴリー
    captionLists: {                  // 見出しリスト
        captionTitle01: string;
        captionTitle02: string;
        captionTitle03: string;
        captionTitle04: string;
        captionTitle05: string;
    };
    poster:           Poster;   // 投稿者
    read:             string;   // 導入文
    article:          string;   // 本文
    recommend?:       Recommend;// 合わせて読みたい記事
    ctaOnOff:         boolean;  // CTA切り替え

    publishedAt:      string;   // 更新日
    createdAt:        string;   // 作成日
} & MicroCMSListContent;

export type Maneripe = {// マネリペ情報
    id: string;
    mainTitle:        string;        // メインタイトル
    thumbnail:        MicroCMSImage; // サムネイル
    thumbnailAlt:     string;        // サムネイル_alt
    captionLists: {                  // 見出しリスト
        captionTitle01: string;
        captionTitle02: string;
        captionTitle03: string;
        captionTitle04: string;
        captionTitle05: string;
    };
    read:             string;   // 導入文
    article:          string;   // 本文
    poster:           Poster;   // 投稿者
    recommend?:       Recommend;// 合わせて読みたい記事
    publishedAt:      string;   // 更新日
    createdAt:        string;   // 作成日

} & MicroCMSListContent;

export type News = {// お知らせ
    id:           string;
    title:        string;   // タイトル
    article:      string;   // 本文
    poster:       Poster;   // 投稿者
    publishedAt:  string;   // 更新日
    createdAt:    string;   // 作成日

} & MicroCMSListContent;