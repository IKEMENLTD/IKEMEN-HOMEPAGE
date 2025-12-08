import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Calendar, Tag, ArrowRight, ExternalLink } from 'lucide-react';

const newsData = [
    {
        id: 1,
        date: '2025.12.08',
        category: 'RELEASE',
        title: '自社プロダクト「SEO TURBO」をリリースしました',
        content: 'AIドリブンSEO最適化プラットフォーム。競合分析、キーワード提案、コンテンツ改善提案をワンストップで提供します。',
        link: 'https://seoturbo.org/',
        external: true
    },
    {
        id: 2,
        date: '2025.12.08',
        category: 'RELEASE',
        title: '自社プロダクト「TaskMate AI」をリリースしました',
        content: 'GPT-4を活用したインテリジェントなタスク管理ツール。自然言語入力で優先度自動判定、サブタスク分解までAIが自動で行います。',
        link: 'https://taskmateai.net/',
        external: true
    },
    {
        id: 3,
        date: '2025.12.08',
        category: 'RELEASE',
        title: '自社プロダクト「LiteWEB+」をリリースしました',
        content: '最短1日納品の高品質Webサイト制作サービス。補助金活用対応で実質負担を大幅削減可能です。',
        link: 'https://litewebplus.com/',
        external: true
    },
    {
        id: 4,
        date: '2025.05.22',
        category: 'PRESS',
        title: 'ツナググ（TSUNAGUGU）に弊社のLiteWEB+についての記事が追加されました。',
        link: 'https://press.portal-th.com/archives/37552',
        external: true
    },
    {
        id: 5,
        date: '2024.08.21',
        category: 'PRESS',
        title: '金融系クローズドASP「プロビジョンアフィリエイト」のプレリリースを開始',
        external: false
    },
    {
        id: 6,
        date: '2024.03.22',
        category: 'PRESS',
        title: 'ビッグローブ株式会社と契約締結、パートナーシップの開始',
        external: false
    },
    {
        id: 7,
        date: '2024.02.27',
        category: 'NEWS',
        title: '全省庁統一資格 取得',
        external: false
    }
];

const News = () => {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "News",
        "description": "株式会社イケメンの最新情報一覧",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": newsData.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.title,
                "datePublished": item.date.replace(/\./g, '-')
            }))
        }
    };

    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="News"
                description="株式会社イケメンの最新情報、プレスリリース、お知らせをご覧いただけます。私たちの活動や成果を随時発信しています。"
                keywords="ニュース,お知らせ,プレスリリース,最新情報,株式会社イケメン"
                jsonLd={jsonLd}
            />

            {/* Background Decoration */}
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {/* Soft Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-80"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] bg-center"></div>

                {/* Large Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.05]">
                    <span className="text-[20vw] font-serif font-black text-black leading-none tracking-tighter">NEWS</span>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>

                {/* Floating Elements */}
                <div className="absolute top-40 right-10 w-20 h-20 border border-gray-200 rounded-full opacity-30"></div>
                <div className="absolute bottom-40 left-10 w-32 h-32 border border-gray-200 rounded-full opacity-30"></div>
                <div className="absolute top-1/3 left-10 text-[10rem] font-serif text-gray-100 opacity-40 select-none">“</div>
                <div className="absolute bottom-1/3 right-10 text-[10rem] font-serif text-gray-100 opacity-40 select-none rotate-180">“</div>
            </div>

            <div className="max-w-[1000px] mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-32 text-center md:text-left"
                >
                    <h1 className="text-6xl md:text-9xl font-serif font-medium text-ikemen-text tracking-tighter mb-6">
                        LATEST<br />
                        <span className="ml-[10vw] text-gray-300 italic">UPDATES</span>
                    </h1>
                    <p className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase md:ml-[12vw]">
                        Ikemen Co., Ltd. — Press & News
                    </p>
                </motion.div>

                {/* News List */}
                <div className="space-y-0 border-t border-gray-200">
                    {newsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            {item.external ? (
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block py-12 border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-500 relative overflow-hidden"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline">
                                        <div className="flex items-center gap-6 min-w-[200px]">
                                            <span className="text-sm font-mono text-gray-400 tracking-wider group-hover:text-ikemen-gold transition-colors duration-300">
                                                {item.date}
                                            </span>
                                            <span className={`text-[10px] px-3 py-1 font-bold tracking-widest uppercase border ${item.category === 'PRESS' ? 'border-ikemen-text text-ikemen-text' :
                                                item.category === 'UPDATE' ? 'border-gray-400 text-gray-400' :
                                                    'border-cyan-600 text-cyan-600'
                                                }`}>
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-3xl font-serif font-medium text-ikemen-text leading-snug group-hover:text-gray-600 transition-colors duration-300 flex items-center gap-3">
                                                {item.title}
                                                <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-ikemen-gold" />
                                            </h3>
                                            {item.content && (
                                                <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-2xl">{item.content}</p>
                                            )}
                                        </div>
                                    </div>
                                </a>
                            ) : (
                                <div className="group block py-12 border-b border-gray-200 hover:bg-gray-50/50 transition-colors duration-500">
                                    <div className="flex flex-col md:flex-row gap-6 md:gap-12 md:items-baseline">
                                        <div className="flex items-center gap-6 min-w-[200px]">
                                            <span className="text-sm font-mono text-gray-400 tracking-wider">
                                                {item.date}
                                            </span>
                                            <span className={`text-[10px] px-3 py-1 font-bold tracking-widest uppercase border ${item.category === 'PRESS' ? 'border-ikemen-text text-ikemen-text' :
                                                item.category === 'UPDATE' ? 'border-gray-400 text-gray-400' :
                                                    'border-cyan-600 text-cyan-600'
                                                }`}>
                                                {item.category}
                                            </span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl md:text-3xl font-serif font-medium text-ikemen-text leading-snug">
                                                {item.title}
                                            </h3>
                                            {item.content && (
                                                <p className="mt-4 text-gray-500 text-sm leading-relaxed max-w-2xl">{item.content}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
