"use client";

import Link from "next/link";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  validateForm,
  formatPhoneNumber,
  validateField,
} from "@/utils/validation";
import type {
  ContactState,
  FormStep,
  FormData,
  FormErrors,
  Props as FormProps,
} from "@/types/form";

export default function SideberContactForm({ customClass }: FormProps) {
  const router = useRouter();
  // フォームの状態管理
  const [step, setStep] = useState<FormStep>("input");
  // 送信状態の管理
  const [submitStatus, setSubmitStatus] = useState<ContactState>(null);

  // URLパラメータから問い合わせ種別を取得
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  // フォームデータの状態管理
  const [formData, setFormData] = useState<FormData>({
    purpose:
      type === "download"
        ? "資料ダウンロード"
        : type === "contact"
        ? "お問い合わせ"
        : "",
    company: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // プライバシーポリシーの同意状態
  const [isAgreed, setIsAgreed] = useState(false);
  // フォーム全体の有効性
  const [isFormValid, setIsFormValid] = useState(false);
  // バリデーションエラーの状態管理
  const [errors, setErrors] = useState<FormErrors>({
    phone: "",
    email: "",
  });

  // メモ化されたフォーム変更ハンドラー
  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      const { name, value } = e.target;

      if (name === "phone") {
        const formattedValue = formatPhoneNumber(value);
        setFormData((prev) => ({ ...prev, phone: formattedValue }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: value }));
      }
    },
    []
  );

  // メモ化されたバリデーション処理
  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  // メモ化されたチェックボックス処理
  const handleCheckboxChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsAgreed(e.target.checked);
    },
    []
  );

  // フォームの有効性をメモ化
  const isFormValidMemo = useMemo(() => {
    return validateForm(formData, isAgreed, errors);
  }, [formData, isAgreed, errors]);

  // フォームの有効性を更新
  useEffect(() => {
    setIsFormValid(isFormValidMemo);
  }, [isFormValidMemo]);

  // メモ化された送信処理
  const handleSubmit = useCallback(async () => {
    if (!isFormValid) return;

    try {
      // FormDataオブジェクトの作成と送信データの設定
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("purpose", formData.purpose);
      formDataToSubmit.append("company", formData.company);
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("phone", formData.phone);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("message", formData.message);

      // Newtのフォームエンドポイントに送信
      const response = await fetch(
        "https://money-repair-media.form.newt.so/v1/YktRisGz0",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      // 送信成功時の処理
      setSubmitStatus({
        status: "success",
        message: "お問い合わせを受け付けました。",
      });
      // フォームデータの初期化
      setFormData({
        purpose: "",
        company: "",
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setIsAgreed(false);

      // サンクスページへのリダイレクト
      router.push("/contact/thanks");
    } catch (error) {
      // エラー時の処理
      console.error("Error:", error);
      setSubmitStatus({
        status: "error",
        message:
          "エラーが発生しました。しばらく時間をおいて再度お試しください。",
      });
    }
  }, [formData, isFormValid, router]);

  // メモ化された確認画面遷移処理
  const handleConfirm = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isFormValid) {
        setStep("confirm");
      }
    },
    [isFormValid]
  );

  // メモ化された戻る処理
  const handleBack = useCallback(() => {
    setStep("input");
  }, []);

  // 確認画面
  if (step === "confirm") {
    return (
      <div className={`c-form ${customClass}`}>
        <table className="c-form--inner mgb5 mgb5s">
          <tbody>
            <tr>
              <th className="s-M -s16 -b -ls-2">目的</th>
              <td>
                <p className="s-S -s12 -ls-2">{formData.purpose}</p>
              </td>
            </tr>
            <tr>
              <th className="s-M -s16 -b -ls-2">会社名</th>
              <td>
                <p className="s-S -s12 -ls-2">{formData.company}</p>
              </td>
            </tr>
            <tr>
              <th className="s-M -s16 -b -ls-2">ご担当者名</th>
              <td>
                <p className="s-S -s12 -ls-2">{formData.name}</p>
              </td>
            </tr>
            <tr>
              <th className="s-M -s16 -b -ls-2">電話番号</th>
              <td>
                <p className="s-S -s12 -ls-2">{formData.phone}</p>
              </td>
            </tr>
            <tr>
              <th className="s-M -s16 -b -ls-2">メールアドレス</th>
              <td>
                <p className="s-S -s12 -ls-2">{formData.email}</p>
              </td>
            </tr>
            <tr>
              <th className="s-M -s16 -b -ls-2">お問い合わせ内容</th>
              <td style={{ whiteSpace: "pre-wrap" }}>
                <p className="s-S -s12 -ls-2">{formData.message}</p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="c-form--btn">
          <button
            type="button"
            onClick={handleBack}
            className="c-link -btn -maru -gray -center s-M -s14 -b -ls-2 mgr2 mgr2s"
          >
            修正する
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            className="c-link -btn -maru -orange -icon -arrow -center s-M -s14 -b -ls-2 primary mgl2 mgl2s"
          >
            送信する
          </button>
        </div>
      </div>
    );
  }

  // 入力画面 (既存のreturn部分)
  return (
    <form
      className={`c-form ${customClass}`}
      onSubmit={handleConfirm}
      method="POST"
    >
      <table className="mgb5 mgb5s">
        <tbody>
          {/* 目的 */}
          <tr>
            <th className="required s-M -s14 -b -ls-2">目的</th>
            <td>
              <select
                id="purpose"
                className="s-S"
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                required
              >
                <option value="">選択して下さい</option>
                <option value="資料ダウンロード">資料ダウンロード</option>
                <option value="お問い合わせ">お問い合わせ</option>
              </select>
            </td>
          </tr>
          {/* 会社名 */}
          <tr>
            <th className="required s-M -s14 -b -ls-2">会社名</th>
            <td>
              <input
                id="company"
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="株式会社インプレーム"
              />
            </td>
          </tr>
          {/* ご担当者名 */}
          <tr>
            <th className="required s-M -s14 -b -ls-2">ご担当者名</th>
            <td>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="インプレーム 太郎"
              />
            </td>
          </tr>
          {/* 電話番号 */}
          <tr>
            <th className="required s-M -s14 -b -ls-2">電話番号</th>
            <td>
              <input
                id="phone"
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="03-1234-5678"
                className={errors.phone ? "-error" : ""}
              />
              {errors.phone && (
                <span className="s-SS -error">{errors.phone}</span>
              )}
            </td>
          </tr>
          {/* メールアドレス */}
          <tr>
            <th className="required s-M -s14 -b -ls-2">メールアドレス</th>
            <td>
              <input
                id="email"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="会社のメールアドレスを入力してください。"
                className={errors.email ? "-error" : ""}
              />
              {errors.email && (
                <span className="s-SS -error">{errors.email}</span>
              )}
            </td>
          </tr>
          {/* 内容 */}
          <tr>
            <th className="required s-M -s14 -b -ls-2 -lh-1_5">
              お問い合わせや
              <br />
              ご質問など
            </th>
            <td>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                cols={30}
                rows={10}
                placeholder="お問い合わせ内容を入力してください。"
              />
            </td>
          </tr>
        </tbody>
      </table>
      {/* プライバシーポリシー */}
      <p className="-center -lh-2 -ls-2 mgb5 mgb5s">
        ※
        <Link href="/privacy-policy" className="-color03 b-text ">
          プライバシーポリシー
        </Link>
        をお読みいただき、同意の上お問い合わせください。
      </p>

      {/* 送信ボタン */}
      <div id="chk_policy" className="c-form--consent">
        <p id="error" className={!isAgreed ? "visible" : "hidden"}>
          同意するにチェックを入れてください。
        </p>
        {/* 同意 */}
        <div className="policyBox">
          <div className="policyBox--inner">
            <input
              type="checkbox"
              id="checkbox"
              name="policy_doui"
              checked={isAgreed}
              onChange={handleCheckboxChange}
              value="1"
            />
            <label className="required" htmlFor="checkbox"><span>同意する</span></label>
          </div>
        </div>
        <p className="mgb5 mgb10s">
          入力内容をご確認のうえ、次の画面へ進んでください。
        </p>

        {/* エラーテキスト */}
        {submitStatus?.status === "error" && (
          <p className="s-M -center -red -ls-2">{submitStatus.message}</p>
        )}

        {/* 送信 */}
        <div className="c-form--btn">
          <button
            type="submit"
            value="確認する"
            className={`c-link -btn -maru -orange -center s-M -s14 -b -ls-2 ${!isFormValid ? "disabled" : ""}`}
            id="submit"
            disabled={!isFormValid}
          >
            内容確認画面へ
          </button>
        </div>
      </div>
    </form>
  );
}
