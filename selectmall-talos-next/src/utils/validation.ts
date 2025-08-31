import type { FormData, FormErrors } from "@/types/form";

/**
 * 電話番号のバリデーション関数
 * 入力された電話番号が有効な形式かどうかをチェックする
 *
 * @param phoneNumber - 検証する電話番号（ハイフンあり/なし両方対応）
 * @returns boolean - 有効な電話番号の場合true、無効な場合false
 *
 * 検証内容：
 * 1. 数字のみで構成されているか
 * 2. 0から始まっているか
 * 3. 桁数が10-11桁の範囲内か
 * 4. 正しい市外局番のパターンか
 *
 * 使用例：
 * validatePhoneNumber("090-1234-5678") // => true
 * validatePhoneNumber("090-1234-567")  // => false（桁数不足）
 * validatePhoneNumber("999-1234-5678") // => false（0から始まっていない）
 */
export const validatePhoneNumber = (phoneNumber: string) => {
  // ハイフンと空白を除去
  const digitsOnly = phoneNumber.replace(/[-ー\s]/g, "");

  // 数字のみで、0から始まることを確認
  if (!/^\d+$/.test(digitsOnly) || !digitsOnly.startsWith("0")) {
    return false;
  }

  // 電話番号の桁数チェック（10-11桁）
  if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    return false;
  }

  // 市外局番のパターンチェック
  const areaCodePatterns = [
    "^0[1-9]0", // 携帯電話など
    "^0[1-9]{2}", // 市外局番2桁
    "^0[1-9]{3}", // 市外局番3桁
    "^0[1-9]{4}", // 市外局番4桁
  ];

  return areaCodePatterns.some((pattern) =>
    new RegExp(pattern).test(digitsOnly)
  );
};

/**
 * メールアドレスのバリデーション関数
 * 入力されたメールアドレスが有効な形式かどうかをチェックする
 *
 * @param email - 検証するメールアドレス
 * @returns boolean - 有効なメールアドレスの場合true、無効な場合false
 */
export const validateEmail = (email: string) => {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(email);
};

/**
 * フォーム全体のバリデーション関数
 * すべての必須項目が正しく入力されているかをチェックする
 *
 * @param formData - フォームの入力データ
 * @param isAgreed - プライバシーポリシーへの同意状態
 * @param errors - 各フィールドのエラー状態
 * @returns boolean - フォームが有効な場合true、無効な場合false
 */
export const validateForm = (
  formData: FormData,
  isAgreed: boolean,
  errors: FormErrors
) => {
  return (
    formData.purpose.trim() !== "" &&
    formData.company.trim() !== "" &&
    formData.name.trim() !== "" &&
    formData.phone.trim() !== "" &&
    validatePhoneNumber(formData.phone) &&
    formData.email.trim() !== "" &&
    validateEmail(formData.email) &&
    formData.message.trim() !== "" &&
    isAgreed &&
    !errors.phone &&
    !errors.email
  );
};

/**
 * 電話番号のフォーマット処理関数
 * 入力された数字を適切なハイフン区切りの電話番号形式に整形する
 *
 * @param value - 整形する電話番号（数字のみ/ハイフンあり両方対応）
 * @returns string - ハイフン区切りに整形された電話番号
 *
 * フォーマット例：
 * 1. 携帯電話：090-XXXX-XXXX
 * 2. 固定電話（2桁）：03-XXXX-XXXX
 * 3. その他：0XXX-XX-XXXX
 *
 * 使用例：
 * formatPhoneNumber("09012345678") // => "090-1234-5678"
 * formatPhoneNumber("0312345678")  // => "03-1234-5678"
 */
export const formatPhoneNumber = (value: string): string => {
  let formattedValue = value.replace(/[^\d]/g, "");

  if (formattedValue.length > 2 && formattedValue.startsWith("0")) {
    if (
      ["090", "080", "070", "050"].some((prefix) =>
        formattedValue.startsWith(prefix)
      )
    ) {
      // 携帯電話番号のフォーマット
      formattedValue = formattedValue.replace(
        /^(\d{3})(\d{4})(\d{4}).*/,
        "$1-$2-$3"
      );
    } else if (
      ["03", "04", "06"].some((prefix) => formattedValue.startsWith(prefix))
    ) {
      // 固定電話（2桁市外局番）のフォーマット
      formattedValue = formattedValue.replace(
        /^(\d{2})(\d{4})(\d{4}).*/,
        "$1-$2-$3"
      );
    } else {
      // その他の市外局番のフォーマット
      formattedValue = formattedValue.replace(
        /^(\d{3,4})(\d{2,3})(\d{4}).*/,
        "$1-$2-$3"
      );
    }
  }

  // 最大13文字に制限（ハイフン含む）
  return formattedValue.slice(0, 13);
};

/**
 * フィールドバリデーション関数
 * 個別の入力フィールドのバリデーションを行う
 *
 * @param name - フィールド名（"phone" または "email"）
 * @param value - 検証する値
 * @returns string - エラーメッセージ（エラーがない場合は空文字）
 */
export const validateField = (name: string, value: string): string => {
  if (name === "phone") {
    if (!value) {
      return "会社の電話番号を入力してください";
    }
    if (!validatePhoneNumber(value)) {
      return "正しい電話番号を入力してください";
    }
  }

  if (name === "email") {
    if (!value) {
      return "会社のメールアドレスを入力してください";
    }
    if (!validateEmail(value)) {
      return "正しいメールアドレスを入力してください";
    }
  }

  return "";
};
