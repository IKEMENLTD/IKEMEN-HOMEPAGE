import { motion } from 'framer-motion';
import { HelpCircle, Settings, CheckCircle2, TrendingUp } from 'lucide-react';
import { SEO } from '../components/SEO';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "mainEntity": {
            "@type": "Organization",
            "name": "株式会社イケメン",
            "founder": "沼倉 隆平",
            "foundingDate": "2022-04-19",
            "description": "世の中のカッコイイを再定義し続ける会社。"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white relative overflow-hidden">
            <SEO
                title="About Us"
                description="株式会社イケメンの会社概要、代表挨拶、企業理念をご覧いただけます。私たちは世の中の「カッコイイ」を再定義し続けます。"
                keywords="株式会社イケメン,会社概要,代表挨拶,企業理念,沼倉隆平,東京,品川区"
                jsonLd={jsonLd}
            />

            {/* Minimalist Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-50"></div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-40 relative z-10">
                {/* Hero Typography */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-40 md:mb-60"
                >
                    <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-serif font-medium text-ikemen-text tracking-tighter">
                        REDEFINING<br />
                        <span className="ml-[10vw] text-gray-300">THE</span> COOL
                    </h1>
                    <div className="mt-8 flex justify-end">
                        <p className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase">
                            Ikemen Co., Ltd. — Corporate Profile
                        </p>
                    </div>
                </motion.div>

                {/* CEO Message & Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 mb-40">
                    {/* Image Column */}
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="relative aspect-[3/4] overflow-hidden"
                        >
                            <img src="/ceo.jpg" alt="CEO" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-out" />
                            <div className="absolute bottom-0 left-0 p-8 bg-white/90 backdrop-blur-sm w-full">
                                <p className="text-xs font-bold tracking-widest text-gray-400 mb-1">REPRESENTATIVE DIRECTOR</p>
                                <p className="text-xl font-serif font-medium text-ikemen-text">沼倉 隆平</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:col-span-7 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-ikemen-text mb-16 leading-tight">
                                「イケメン」<br />
                                <span className="text-2xl md:text-3xl text-gray-400 mt-4 block">
                                    それは、世の中を測る<br />
                                    新しいものさし。
                                </span>
                            </h2>

                            <div className="space-y-12">
                                <p className="text-lg md:text-xl text-gray-600 leading-loose font-serif">
                                    我々はこの言葉を個人だけに当てず、<br />
                                    世の中を測る基準として定義します。
                                </p>
                                <p className="text-lg md:text-xl text-gray-600 leading-loose font-serif">
                                    <span className="inline-block border-b border-ikemen-gold pb-1 text-ikemen-text font-medium">"世の中のカッコイイを再定義し続ける"</span><br />
                                    このスローガンのもと、<br />
                                    世にあるモノ、仕組み、サービス、情報の<br />
                                    本質的な価値を問い直していきます。
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* The 4 Questions - Editorial Layout */}
                <div className="mb-60">
                    <div className="border-t border-gray-200 mb-20"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
                        {[
                            {
                                num: "01",
                                jp: "本当に必要なモノなのか？",
                                en: "Essential Value",
                                desc: "その存在意義を、根源から問い直す。"
                            },
                            {
                                num: "02",
                                jp: "あの仕組みは本当に素敵な仕組みなのか？",
                                en: "Structural Beauty",
                                desc: "既存の構造における美しさを追求する。"
                            },
                            {
                                num: "03",
                                jp: "このサービスは本当にイイものなのか？",
                                en: "True Quality",
                                desc: "表面的な利便性ではなく、本質的な価値を見極める。"
                            },
                            {
                                num: "04",
                                jp: "この情報の角度はどれほど高いものなのか？",
                                en: "Perspective",
                                desc: "視点の高さと、情報の深度を測る。"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group"
                            >
                                <span className="block text-xs font-mono text-ikemen-gold mb-6 tracking-widest">{item.num} — {item.en}</span>
                                <h3 className="text-2xl md:text-4xl font-serif font-medium text-ikemen-text mb-6 group-hover:text-gray-600 transition-colors duration-300">
                                    {item.jp}
                                </h3>
                                <p className="text-gray-500 font-serif leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Company Profile - Minimal List */}
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xs font-mono text-gray-400 tracking-[0.3em] mb-12 uppercase text-center">Company Information</h3>

                    <div className="space-y-0">
                        {[
                            { label: "会社名", value: "株式会社イケメン" },
                            { label: "代表者", value: "沼倉 隆平" },
                            { label: "設立", value: "令和4年4月19日" },
                            { label: "資本金", value: "300万円" },
                            { label: "所在地", value: "〒141-0032 東京都品川区大崎4丁目4-24" },
                            { label: "事業内容", value: "営業代行業務 / 広告代理店業務 / システム開発" },
                            { label: "取引銀行", value: "楽天銀行" }
                        ].map((row, i) => (
                            <div key={i} className="flex flex-col md:flex-row py-6 border-b border-gray-100 hover:bg-gray-50 transition-colors px-4">
                                <dt className="w-40 text-xs font-bold text-gray-400 tracking-widest uppercase py-1">{row.label}</dt>
                                <dd className="flex-1 text-sm md:text-base text-ikemen-text font-medium">{row.value}</dd>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 pt-10 border-t border-gray-200">
                        <h4 className="text-sm font-bold text-ikemen-text mb-8">LICENSE / ADVISOR</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-gray-50 p-6">
                                <p className="text-xs text-gray-400 mb-2">全省庁統一資格</p>
                                <p className="font-mono text-ikemen-text">0000221111</p>
                            </div>
                            <div className="bg-gray-50 p-6">
                                <p className="text-xs text-gray-400 mb-2">法律顧問</p>
                                <p className="text-ikemen-text text-sm">株式会社Legal Fighter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
