// コンポーネントのプロップス型定義
export type Props = {
  customClass: string;
};

// フォームの状態管理用の型定義
export type ContactState = {
  status: "success" | "error";
  message: string;
} | null;

// フォームステップの型定義（入力・確認・完了）
export type FormStep = "input" | "confirm" | "thanks";

export type LpHubspotFormData = {
  // HubSpot > LP用
  keg: string[];      // ケグの種類（マルチセレクト）
  mokuteki: string;   // 目的
  company: string;    // 会社名
  post: string;       // 役職
  department: string; // 部署名
  lastname: string;   // 姓
  firstname: string;  // 名
  phone: string;      // 電話番号
  email: string;      // メールアドレス
  content: string;    // お問い合わせ内容
};

// フォームエラーの型定義
export type FormErrors = {
  phone: string;
  email: string;
};
