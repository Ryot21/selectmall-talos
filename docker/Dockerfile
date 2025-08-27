# 1. 使用するNode.jsのベースイメージ
FROM node:20.13.1

# 2. 作業ディレクトリを /app に設定
WORKDIR /app

# 3. package.jsonとpackage-lock.jsonをコンテナにコピー
COPY ./selectmall-talos-next/package*.json ./

# 4. 依存関係をインストール
RUN npm install

# 5. sassをインストール
RUN npm install sass

# 6. .env（microCMSの承認コード）ファイルをコピー
# COPY ./selectmall-talos-next/.env .env

# 7. Nextアプリケーションが利用するポート3000を公開
# ENV HOST 0.0.0.0
EXPOSE 3000

# 8. アプリケーションを開発モードで起動
CMD ["npm", "run", "dev"]