const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',  // プロトコルを指定
                hostname: 'api.lp1.av5ja.srv.nintendo.net',  // 外部画像のドメインを指定
                port: '',  // ポート番号があれば指定（通常は省略）
                pathname: '/**',  // 任意のパスを許可するワイルドカード
            },
        ],
    },
}

// eslint-disable-next-line no-undef
module.exports = nextConfig;