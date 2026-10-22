import { Helmet } from 'react-helmet-async';

export const SEO = ({ title, description, keywords, image = '/logo.png', url, jsonLd }) => {
    const siteTitle = '株式会社イケメン | システム開発・AI・DX支援';
    const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
    const defaultDescription = '株式会社イケメンは、システム開発を主軸に、AI活用・業務自動化・DX支援を行う開発会社です。課題整理から設計・開発・導入・運用改善まで一貫して支援します。';
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
