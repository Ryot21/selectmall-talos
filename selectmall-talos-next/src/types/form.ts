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

// フォームデータの型定義
export type FormData = {
  // メディアサイト用
  purpose: string;
  company: string;
  name: string;
  phone: string;
  email: string;
  message: string;
};

export type LpFormData = {
  // LP用
  purpose: string;
  company: string;
  name: string;
  phone: string;
  email: string;
};

export type Lp02FormData = {
  // LP用
  purpose: string;
  company: string;
  post: string;
  department: string;
  name: string;
  phone: string;
  email: string;
  considerationStage: string; // 検討段階
};

// フォームエラーの型定義
export type FormErrors = {
  phone: string;
  email: string;
};
