import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, image = '/logo.png', url, jsonLd }) => {
    const siteTitle = '株式会社イケメン | IKEMEN Co., Ltd.';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = '世の中の「カッコイイ」を再定義し続ける。株式会社イケメンは、WEB制作、システム開発、営業コンサルティングなどを通じて、世の中の価値を最大化します。';
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <Helmet>
            <html lang="ja" />
            <title>{fullTitle}</title>
            <meta name="description" content={description || defaultDescription} />
            {keywords && <meta name="keywords" content={keywords} />}
            <link rel="canonical" href={currentUrl} />

            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={currentUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="株式会社イケメン" />
            <meta property="og:locale" content="ja_JP" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image} />

            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};
