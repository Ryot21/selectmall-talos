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
  const type = searchParams.get("type") as "download" | "contact" | null;
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
    considerationStage: [],
    question: "",
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

  // マルチセレクト用のハンドラー
  const handleMultiSelectChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      setFormData((prev) => ({
        ...prev,
        considerationStage: checked
          ? [...prev.considerationStage, value]
          : prev.considerationStage.filter((item) => item !== value),
      }));
    },
    []
  );

  // フォームの有効性をメモ化
  const isFormValidMemo = useMemo(() => {
    const {
      purpose,
      company,
      name,
      post,
      department,
      phone,
      email,
      considerationStage,
    } = formData;

    // 必須フィールドのチェック
    const requiredFieldsValid =
      purpose.trim() !== "" &&
      company.trim() !== "" &&
      name.trim() !== "" &&
      post.trim() !== "" &&
      department.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      considerationStage.length > 0;

    // バリデーションエラーのチェック
    const noValidationErrors = !errors.phone && !errors.email;

    // プライバシーポリシーの同意チェック
    const privacyAgreed = isAgreed;

    return requiredFieldsValid && noValidationErrors && privacyAgreed;
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
      // HubSpot API用のデータ構造を作成
      const fields = [
        {
          objectTypeId: "0-1",
          name: "email",
          value: formData.email,
        },
        {
          objectTypeId: "0-1",
          name: "firstname",
          value: formData.name,
        },
        {
          objectTypeId: "0-1",
          name: "name", // HubSpotの会社名フィールド
          value: formData.company,
        },
        {
          objectTypeId: "0-1",
          name: "phone",
          value: formData.phone,
        },
        {
          objectTypeId: "0-1",
          name: "post", // HubSpotの役職フィールド
          value: formData.post,
        },
        {
          objectTypeId: "0-1",
          name: "department", // HubSpotの部署名フィールド
          value: formData.department,
        },
        {
          objectTypeId: "0-1",
          name: "mokuteki", // HubSpotの目的フィールド
          value: formData.purpose,
        },
        {
          objectTypeId: "0-1",
          name: "keg", // HubSpotの気になる商材フィールド
          value: formData.considerationStage.join(", "),
        },
      ];

      // 質問フィールドがある場合のみ追加
      if (formData.question && formData.question.trim() !== "") {
        fields.push({
          objectTypeId: "0-1",
          name: "message", // 質問フィールド（HubSpotに存在する場合）
          value: formData.question,
        });
      }

      const hubspotData = {
        fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title,
        },
      };

      // HubSpot APIエンドポイントに送信
      // 環境変数から取得（.env.localファイルに設定してください）
      const portalId =
        process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID || "YOUR_PORTAL_ID";
      const formGuid =
        process.env.NEXT_PUBLIC_HUBSPOT_FORM_GUID || "YOUR_FORM_GUID";

      if (portalId === "YOUR_PORTAL_ID" || formGuid === "YOUR_FORM_GUID") {
        console.warn(
          "HubSpotの設定が正しくありません。.env.localファイルでNEXT_PUBLIC_HUBSPOT_PORTAL_IDとNEXT_PUBLIC_HUBSPOT_FORM_GUIDを設定してください。"
        );
      }

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(hubspotData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error("HubSpot API Error:", errorData);
        throw new Error(
          `送信に失敗しました: ${response.status} ${response.statusText}`
        );
      }

      const result = await response.json();
      console.log("HubSpot response:", result);

      setSubmitStatus({
        status: "success",
        message: "お問い合わせを受け付けました。",
      });

      setFormData({
        purpose:
          type === "download"
            ? "資料ダウンロード"
            : type === "contact"
            ? "お問い合わせ"
            : "",
        company: "",
        name: "",
        post: "",
        department: "",
        phone: "",
        email: "",
        considerationStage: [],
        question: "",
      });
      setIsAgreed(false);

      // gclidを取得してサンクスページに引き継ぐ
      const gclid = getGclid();
      if (gclid) {
        router.push(`/thanks?gclid=${encodeURIComponent(gclid)}`);
      } else {
        router.push("/thanks");
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
        {/* <Image
          src="/images/SVG/Lp/ver02/contact-label.svg"
          alt="3分でわかる資料ダウンロード"
          width={334}
          height={50}
        /> */}
        <h3 className="s-ML -b -center -ls-2 -lh-1_5 pdt4 pdb4 pdl3 pdr3 pdt4s pdb4s pdl4s pdr3s">
          内容確認
        </h3>
        <div className="c-card--inner">
          <div className={`c-form ${customClass}`}>
            <table className="c-form--inner">
              <tbody>
                <tr>
                  <th className="s-S -s16 -b -ls-2">気になる商材</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">
                      {formData.considerationStage.join(", ")}
                    </p>
                  </td>
                </tr>
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
                  <th className="s-S -s16 -b -ls-2">役職・部署・ご担当者名</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">
                      {formData.post} {formData.department} {formData.name}
                    </p>
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
                <tr>
                  <th className="s-S -s16 -b -ls-2">ご質問</th>
                  <td>
                    <p className="s-SS -s12 -ls-2">
                      {formData.question || "なし"}
                    </p>
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
        </div>
      </div>
    );
  }

  // 入力画面
  return (
    <div className="c-card -t05  a-fade -tm05 -sp05">
      <Image
        src="/images/SVG/Lp/contact-label.svg"
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
          {/* 気になる商材 */}
          <div className="c-form--item -radioBtn">
            <ul className="c-flex -radio">
              <li className="flexItem">
                <p className="s-SS -b -left -ls-2" style={{ paddingTop: 2 }}>
                  気になる
                  <br />
                  ケグ
                </p>
              </li>
              <li className="flexItem">
                <div className="c-flex -jc-end">
                  <label>
                    <input
                      type="checkbox"
                      name="considerationStage"
                      value="単層"
                      checked={formData.considerationStage.includes("単層")}
                      onChange={handleMultiSelectChange}
                    />{" "}
                    <pre>単層</pre>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="considerationStage"
                      value="T-KEG"
                      checked={formData.considerationStage.includes("T-KEG")}
                      onChange={handleMultiSelectChange}
                    />{" "}
                    <pre>T-KEG</pre>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="considerationStage"
                      value="BREWJET"
                      checked={formData.considerationStage.includes("BREWJET")}
                      onChange={handleMultiSelectChange}
                    />{" "}
                    <pre>
                      BREW
                      <br />
                      JET
                    </pre>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="considerationStage"
                      value="TOPPER"
                      checked={formData.considerationStage.includes("TOPPER")}
                      onChange={handleMultiSelectChange}
                    />{" "}
                    <pre>
                      TOP
                      <br />
                      PER
                    </pre>
                  </label>
                </div>
              </li>
            </ul>
          </div>
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
              <option value="見積請求">見積請求</option>
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
                </select>
                <span>役職</span>
              </div>
            </li>
            <li className="flexItem">
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
                  <option value="醸造部">醸造部</option>
                  <option value="品質管理部">品質管理部</option>
                  <option value="マーケティング部">マーケティング部</option>
                  <option value="店舗スタッフ">店舗運営/スタッフ</option>
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
          {/* ご質問 */}
          <div className="c-form--item">
            <textarea
              id="question"
              name="question"
              value={formData.question}
              onChange={handleChange}
              placeholder=" "
              rows={4}
            />
            <span>ご質問</span>
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
                お問い合わせ
              </button>
            </div>
          </div>
          {/* プライバシーポリシー */}
          {/* <p className="c-form--consentText -lh-2 -ls-2">
            ※お客様にお求めのコンテンツを提供するために、上記で送信された個人情報についてセレクトモールが
            <Link href="/privacy-policy" className="-color03 b-text">
              プライバシーポリシー
            </Link>
            に基づき利用することに同意します。
          </p> */}
        </form>
      </div>
    </div>
  );
}
