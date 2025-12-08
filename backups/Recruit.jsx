import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SEO } from '../components/SEO';

const JobAccordion = ({ title, items, footer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
            >
                <h3 className="text-xl font-bold text-ikemen-text flex items-center gap-3">
                    <span className={`text-ikemen-gold transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}>▶</span>
                    {title}
                </h3>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="p-6 pt-0 border-t border-gray-100">
                            <ul className="space-y-3 text-gray-600 text-sm mb-6">
                                {items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <span className="text-ikemen-gold mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            {footer && (
                                <div className="bg-gray-50 p-4 rounded text-ikemen-text font-bold text-sm border-l-4 border-ikemen-gold">
                                    {footer}
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Recruit = () => {
    return (
        <div className="pt-24 pb-20 px-6 bg-white/70 backdrop-blur-sm min-h-screen relative overflow-hidden">
            <SEO title="採用情報" description="株式会社イケメンの採用情報。営業職、営業事務など、共に「カッコイイ」を追求する仲間を募集しています。" />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ikemen-gold/5 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl mx-auto relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-ikemen-gold mb-6 tracking-widest text-center">RECRUIT</h2>
                <p className="text-center text-gray-400 tracking-widest mb-16">採用情報</p>

                <div className="bg-white border border-gray-100 p-8 md:p-12 rounded-2xl shadow-xl mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-ikemen-text mb-6">JOIN OUR TEAM</h3>
                        <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            私たちは「カッコイイ」を再定義し続ける仲間を募集しています。<br />
                            まずは、下記の企業説明資料をご覧ください。
                        </p>
                    </div>

                    <div className="relative w-full aspect-[16/9] mb-12 shadow-2xl rounded-xl overflow-hidden border border-gray-200">
                        <iframe
                            loading="lazy"
                            className="absolute top-0 left-0 w-full h-full border-none p-0 m-0"
                            src="https://www.canva.com/design/DAGd6yr3I1g/Yp_fDBtaYujfW0loevczJA/view?embed"
                            allowFullScreen
                            title="Company Presentation"
                        ></iframe>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-bold text-ikemen-gold mb-8 tracking-widest border-l-4 border-ikemen-gold pl-4">募集職種</h3>
                    <div className="grid grid-cols-1 gap-8">
                        <JobAccordion
                            title="1. 営業職（セールス）"
                            items={[
                                "法人向けソリューション営業（DX支援、マーケティング、営業自動化ツールの提案）",
                                "自社開発の AI, API 活用ツールを活かした営業（SNSリード獲得、営業自動化システム）",
                                "デジタルツールを活用した新規開拓、提案営業（効率的なリード獲得とアプローチ）",
                                "クライアントの課題ヒアリング＆最適ソリューションの提案",
                                "商談・クロージング（オンライン、オフライン問わず対応）",
                                "AI、API を活用した新しい営業スタイルを学びたい方",
                                "従来の属人的な営業ではなく、テクノロジーで営業を効率化したい方",
                                "結果にコミットし、スピード感を持って行動できる方",
                                "新しいことに挑戦するのが好きな方、柔軟な思考ができる方",
                                "学歴、業界不問",
                                "法人営業経験者優遇（経験年数不問）",
                                "未経験者でも「AI × 営業」に興味があれば歓迎（研修制度あり）",
                                "システムやツールを活用した営業に興味がある方",
                                "最先端の AI、API を活用した営業手法を学べる",
                                "営業の属人化を排除し、データとシステムで成果を最大化できる環境",
                                "成果に応じた高インセンティブ制度で年収アップを狙える"
                            ]}
                            footer="「営業は根性論じゃない。テクノロジーで最速の成果を出す。」 営業の新しいスタンダードを学び、次世代のセールスリーダーを目指そう！"
                        />
                        <JobAccordion
                            title="2. 営業事務（セールスアシスタント）"
                            items={[
                                "営業資料の作成・管理（プレゼン資料、提案書、契約書など）",
                                "クライアント対応（CS業務：メール、電話応対、問い合わせ対応、サポート業務）",
                                "データ入力・管理（顧客情報や売上データの整理、CRMシステムの活用）",
                                "自社開発ツールの運用・管理（APIを活用したSNSリード獲得ツールや営業自動化システムの活用・最適化）",
                                "営業チームのサポート全般（スケジュール調整、備品発注、社内調整）",
                                "成長意欲がある方（未経験でも積極的に学び、システムや AI を活用した業務改善に興味がある方）",
                                "ITリテラシーがある方（Excel、Googleスプレッドシート、CRM・SFAツールの活用経験があると尚可）",
                                "スピード感を持って業務を進められる方（効率化を意識し、タスク管理が得意な方）",
                                "クライアントファーストの視点を持てる方（CSとしての対応力、問題解決力がある方）",
                                "学歴、経験不問",
                                "基本的な PC スキル（タイピング、メール対応など）",
                                "営業事務やカスタマーサポート（CS）経験があれば尚可",
                                "システムやツールの活用に抵抗がない方（未経験でも学ぶ意欲があればOK）",
                                "自社開発ツールを活用し、最先端の営業DXを体験できる",
                                "未経験からでも挑戦できる（OJTでしっかりサポート）",
                                "成長企業の中核メンバーとして活躍できる"
                            ]}
                            footer="「カッコイイ営業チームを支える仕事」に挑戦しませんか？ AI とシステムを駆使し、営業の効率化・成果最大化を支援する仲間を募集します！"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Recruit;
