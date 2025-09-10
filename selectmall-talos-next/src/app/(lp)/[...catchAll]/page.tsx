import { notFound } from 'next/navigation';

/**
 * LPページ用のキャッチオールページ
 * - /lp/以下の定義されていないルートパターンへのアクセスをキャッチする
 * - 例：/lp00111（正しくは/lp02/）
 * 
 * 役割：
 * 1. /lp02/以下の不正なURLパターンをキャッチ
 * 2. notFound()を呼び出してカスタム404ページを表示
 * 3. LP用のnot-found.tsxにルーティング
 * 
 * 注：このファイルがないと、不正なURLの場合にNext.jsのデフォルト404ページが表示される
 */
export default function CatchAll() {
  notFound();
} 