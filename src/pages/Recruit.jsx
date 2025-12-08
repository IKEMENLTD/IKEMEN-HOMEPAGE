import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Recruit = () => {
    const jobs = [
        {
            title: "Web Director",
            jpTitle: "Webディレクター",
            desc: "クライアントの課題を解決に導くWebサイトの企画・設計・進行管理。",
            requirements: ["Web制作のディレクション経験", "コミュニケーション能力", "課題解決能力"]
        },
        {
            title: "Frontend Engineer",
            jpTitle: "フロントエンドエンジニア",
            desc: "最新技術を用いたWebサイト・Webアプリケーションの実装。",
            requirements: ["HTML/CSS/JavaScriptの実務経験", "React/Vue.js等のフレームワーク使用経験"]
        },
        {
            title: "Sales",
            jpTitle: "セールス",
            desc: "クライアントのビジネスを加速させるソリューションの提案。",
            requirements: ["法人営業経験", "Webマーケティングの知識", "目標達成意欲"]
        }
    ];

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
        "@type": "WebPage",
        "name": "Recruit",
        "description": "株式会社イケメンの採用情報ページです。",
        "publisher": {
            "@type": "Organization",
            "name": "株式会社イケメン"
        }
    };

    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="Recruit"
                description="株式会社イケメンの採用情報。私たちは「カッコイイ」を追求する仲間を募集しています。募集職種、働く環境、社員インタビューなど。"
                keywords="採用,求人,リクルート,エンジニア,デザイナー,マーケター,東京"
                jsonLd={jsonLd}
            />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                {/* Soft Gradients */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gray-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-80"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] bg-center"></div>

                {/* Large Watermark */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.05]">
                    <span className="text-[20vw] font-serif font-black text-black leading-none tracking-tighter">RECRUIT</span>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
                <div className="absolute top-0 right-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-gray-300 to-transparent opacity-40"></div>
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
                        JOIN<br />
                        <span className="ml-[10vw] text-gray-300 italic">US</span>
                    </h1>
                    <p className="text-sm md:text-base font-mono tracking-widest text-gray-400 uppercase md:ml-[12vw]">
                        Ikemen Co., Ltd. — Recruitment
                    </p>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-40 text-center md:text-left"
                >
                    <h2 className="text-2xl md:text-4xl font-serif font-medium text-ikemen-text leading-relaxed mb-12">
                        「カッコイイ」を<br className="md:hidden" />
                        共に創る仲間を<br className="md:hidden" />
                        探しています。
                    </h2>
                    <p className="text-gray-500 leading-loose font-serif text-lg">
                        私たちは、常識にとらわれない発想と技術で、<br />
                        世の中の新しいスタンダードを創造します。<br />
                        あなたの才能を、ここで発揮してみませんか。
                    </p>
                </motion.div>

                {/* Company Deck Embed */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-40"
                >
                    <h2 className="text-2xl md:text-3xl font-serif font-medium text-ikemen-text mb-8 text-center md:text-left">
                        CULTURE DECK
                    </h2>
                    <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '56.2500%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
                        <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0 }}
                            src="https://www.canva.com/design/DAGd6yr3I1g/Yp_fDBtaYujfW0loevczJA/view?embed" allowFullScreen="allowfullscreen" allow="fullscreen">
                        </iframe>
                    </div>
                </motion.div>

                {/* Job List */}
                <div className="space-y-12">
                    {jobs.map((job, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative border border-gray-200 bg-white/40 backdrop-blur-sm p-8 md:p-12 hover:border-ikemen-gold transition-colors duration-500 overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-1 h-full bg-ikemen-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                            <div className="flex flex-col md:flex-row gap-8 md:items-start justify-between relative z-10">
                                <div>
                                    <h3 className="text-3xl md:text-4xl font-serif font-medium text-ikemen-text mb-2 group-hover:text-ikemen-gold transition-colors duration-300">
                                        {job.title}
                                    </h3>
                                    <p className="text-sm font-mono text-gray-400 tracking-widest uppercase mb-6">{job.jpTitle}</p>
                                    <p className="text-gray-600 mb-6 font-serif">{job.desc}</p>
                                    <div className="flex flex-wrap gap-3">
                                        {job.requirements.map((req, i) => (
                                            <span key={i} className="text-xs border border-gray-300 px-3 py-1 text-gray-500 tracking-wider flex items-center gap-1 bg-white/50">
                                                <CheckCircle2 size={10} className="text-ikemen-gold" />
                                                {req}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-8 md:mt-0">
                                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-ikemen-text border-b border-ikemen-text pb-1 hover:text-ikemen-gold hover:border-ikemen-gold transition-colors opacity-80 hover:opacity-100">
                                        ENTRY <ArrowRight size={16} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Recruit;
