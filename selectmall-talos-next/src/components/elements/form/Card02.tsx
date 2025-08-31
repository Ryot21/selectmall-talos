"use client";
// LPに使用するカード型のフォーム（目的あり）

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { formatPhoneNumber, validateField } from "@/utils/validation";
import type {
  ContactState,
  FormStep,
  Lp02FormData,
  FormErrors,
  Props as FormProps,
} from "@/types/form";

export default function CardContactForm({ customClass }: FormProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  // フォームの状態管理
  const [step, setStep] = useState<FormStep>("input");
  // 送信状態の管理
  const [submitStatus, setSubmitStatus] = useState<ContactState>(null);

  // フォームデータの状態管理を簡素化
  const [formData, setFormData] = useState<Lp02FormData>({
    purpose:
      type === "download"
        ? "資料ダウンロード"
        : type === "contact"
        ? "お問い合わせ"
        : "",
    company: "",
    post: "",
    department: "",
    name: "",
    phone: "",
    email: "",
    considerationStage: "",
  });

  // プライバシーポリシーの同意状態
  const [isAgreed, setIsAgreed] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
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
    const { purpose, company, name, post, department, phone, email } = formData;
    return (
      purpose.trim() !== "" &&
      company.trim() !== "" &&
      name.trim() !== "" &&
      post.trim() !== "" &&
      department.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      isAgreed &&
      !errors.phone &&
      !errors.email
    );
  }, [formData, isAgreed, errors]);

  // フォームの有効性を更新
  useEffect(() => {
    setIsFormValid(isFormValidMemo);
  }, [isFormValidMemo]);

  // gclidをlocalStorageに保存（初回マウント時）
  useEffect(() => {
    if (typeof window !== "undefined") {
      const gclidParam = searchParams.get("gclid");
      if (gclidParam) {
        localStorage.setItem("gclid", gclidParam);
      }
    }
  }, [searchParams]);

  // gclid取得関数（searchParams優先、なければlocalStorage）
  const getGclid = useCallback(() => {
    if (typeof window !== "undefined") {
      const gclidParam = searchParams.get("gclid");
      if (gclidParam) return gclidParam;
      return localStorage.getItem("gclid") || "";
    }
    return "";
  }, [searchParams]);

  // メモ化された送信処理を簡素化
  const handleSubmit = useCallback(async () => {
    if (!isFormValid) return;

    try {
      const formDataToSubmit = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSubmit.append(key, value);
      });

      // Newtのフォームエンドポイントに送信
      const response = await fetch(
        "https://money-repair.form.newt.so/v1/9v5NPwe1M",
        {
          method: "POST",
          body: formDataToSubmit,
        }
      );

      if (!response.ok) {
        throw new Error("送信に失敗しました");
      }

      setSubmitStatus({
        status: "success",
        message: "お問い合わせを受け付けました。",
      });

      setFormData({
        purpose: "",
        company: "",
        name: "",
        post: "",
        department: "",
        phone: "",
        email: "",
        considerationStage: "",
      });
      setIsAgreed(false);

      // gclidを取得してサンクスページに引き継ぐ
      const gclid = getGclid();
      if (gclid) {
        router.push(`/lp02/thanks?gclid=${encodeURIComponent(gclid)}`);
      } else {
        router.push("/lp02/thanks");
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({
        status: "error",
        message:
          "エラーが発生しました。しばらく時間をおいて再度お試しください。",
      });
    }
  }, [formData, isFormValid, router, getGclid]);

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
      <div className="c-card -t05">
        <Image
          src="/images/SVG/Lp/ver02/contact-label.svg"
          alt="3分でわかる資料ダウンロード"
          width={334}
          height={50}
        />
        <div className="c-card--inner">
          <div className={`c-form ${customClass}`}>
            <table className="c-form--inner">
              <tbody>
                <tr>
                  <th className="s-S -s16 -b -ls-2">目的</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.purpose}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">会社名</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.company}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">役職・部署</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">
                      {formData.post} {formData.department}
                    </p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">ご担当者名</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.name}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">電話番号</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.phone}</p>
                  </td>
                </tr>
                <tr>
                  <th className="s-S -s16 -b -ls-2">メールアドレス</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">{formData.email}</p>
                  </td>
                </tr>
                {/* <tr>
                  <th className="s-S -s16 -b -ls-2">検討段階</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">
                      {formData.considerationStage}
                    </p>
                  </td>
                </tr> */}
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
        </div>
      </div>
    );
  }

  // 入力画面
  return (
    <div className="c-card -t05  a-fade -tm05 -sp05">
      <Image
        src="/images/SVG/Lp/ver02/contact-label.svg"
        alt="3分でわかる資料ダウンロード"
        width={334}
        height={50}
      />
      <div className="c-card--inner">
        <form
          className={`c-form ${customClass}`}
          onSubmit={handleConfirm}
          method="POST"
        >
          {/* 目的 */}
          <div className="c-form--item">
            <select
              id="purpose"
              name="purpose"
              value={formData.purpose}
              onChange={handleChange}
              required
            >
              <option value="">選択して下さい</option>
              <option value="資料ダウンロード">資料ダウンロード</option>
              <option value="お問い合わせ">お問い合わせ</option>
            </select>
            <span>目的</span>
          </div>
          {/* 会社名 */}
          <div className="c-form--item">
            <input
              id="company"
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <span>会社名</span>
          </div>
          <ul className="c-flex -col2 -jc-sb">
            <li className="flexItem">
              {/* 役職 */}
              <div className="c-form--item">
                <select
                  id="post"
                  name="post"
                  value={formData.post}
                  onChange={handleChange}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="代表取締役">代表取締役</option>
                  <option value="部長">部長</option>
                  <option value="課長">課長</option>
                  <option value="担当者">担当者</option>
                  <option value="その他">その他</option>
                </select>
                <span>役職</span>
              </div>
            </li>
            <li className="flexItem">
              {/* 部署名 */}
              <div className="c-form--item">
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="">選択してください</option>
                  <option value="営業部">営業部</option>
                  <option value="総務部">総務部</option>
                  <option value="人事部">人事部</option>
                  <option value="経理部">経理部</option>
                  <option value="情報システム部">情報システム部</option>
                  <option value="その他">その他</option>
                </select>
                <span>部署名</span>
              </div>
            </li>
          </ul>
          {/* ご担当者名 */}
          <div className="c-form--item">
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder=" "
              required
            />
            <span>ご担当者名</span>
          </div>
          {/* 電話番号 */}
          <div className="c-form--item">
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              className={errors.phone ? "-error" : ""}
            />
            <span>電話番号</span>
            {errors.phone && (
              <p className="s-SS -error mgt1 mgt1s">{errors.phone}</p>
            )}
          </div>
          {/* メールアドレス */}
          <div className="c-form--item">
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder=" "
              className={errors.email ? "-error" : ""}
            />
            <span>メールアドレス</span>
            {errors.email && (
              <p className="s-SS -error mgt1 mgt1s">{errors.email}</p>
            )}
          </div>
          {/* 検討段階 */}
          <div className="c-form--item -radioBtn">
            <ul className="c-flex -radio">
              <li className="flexItem">
                <p className="s-SS -b -left -ls-2" style={{ paddingTop: 8 }}>
                  検討段階
                </p>
              </li>
              <li className="flexItem">
                <div className="c-flex -jc-end">
                  <label>
                    <input
                      type="radio"
                      name="considerationStage"
                      value="情報収集中"
                      checked={formData.considerationStage === "情報収集中"}
                      onChange={handleChange}
                      required
                    />{" "}
                    <pre>調べ中</pre>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="considerationStage"
                      value="検討中"
                      checked={formData.considerationStage === "検討中"}
                      onChange={handleChange}
                      required
                    />{" "}
                    <pre>検討中</pre>
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="considerationStage"
                      value="すぐに導入したい"
                      checked={
                        formData.considerationStage === "すぐに導入したい"
                      }
                      onChange={handleChange}
                      required
                    />{" "}
                    <pre>
                      すぐに
                      <br />
                      導入したい！
                    </pre>
                  </label>
                </div>
              </li>
            </ul>
          </div>
          {/* 送信ボタン */}
          <div id="chk_policy" className="c-form--consent">
            <p id="error" className={!isAgreed ? "visible" : "hidden"}>
              同意するにチェックを入れてください。
            </p>
            {/* 同意 */}
            <div className="policyBox">
              <input
                type="checkbox"
                id="checkbox"
                name="policy_doui"
                checked={isAgreed}
                onChange={handleCheckboxChange}
                value="1"
              />
              <label htmlFor="checkbox">個人情報の取り扱いに同意します*</label>
            </div>

            {/* エラーテキスト */}
            {submitStatus?.status === "error" && (
              <p className="s-M -center -red -ls-2">{submitStatus.message}</p>
            )}

            {/* 送信 */}
            <div className="c-form--btn">
              <button
                type="submit"
                value="確認する"
                className={`ver01 ${!isFormValid ? "disabled" : ""}`}
                id="submit"
                disabled={!isFormValid}
              >
                資料ダウンロード（無料）
              </button>
            </div>
          </div>
          {/* プライバシーポリシー */}
          <p className="c-form--consentText -lh-2 -ls-2">
            ※お客様にお求めのコンテンツを提供するために、上記で送信された個人情報についてインプレームが
            <Link href="/privacy-policy" className="-color03 b-text">
              プライバシーポリシー
            </Link>
            に基づき利用することに同意します。
          </p>
        </form>
      </div>
    </div>
  );
}
