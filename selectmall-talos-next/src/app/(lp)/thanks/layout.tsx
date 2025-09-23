import type { Metadata } from "next";
import LpContactSheet from "@/features/lp/sheet/Contact";

export const metadata: Metadata = {
  title: "お問い合わせいただき誠にありがとうございます。 | セレクトモール",
  description:
    "このたびはお問合せいただき、誠にありがとうございます。3営業日を目安にセレクトモールの担当者よりご連絡いたします。",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "none",
      "max-snippet": 0,
      "max-video-preview": 0,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

// 【animationType】の選択
// “rotate" or "slide" or "svg" or "company"

export default function RootLayout({ children }: Props) {
  return (
    <LpContactSheet animationType="company" mvClass="-contact">
      {children}
    </LpContactSheet>
  );
}
