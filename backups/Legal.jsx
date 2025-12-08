import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Legal = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-white/70 backdrop-blur-sm relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ikemen-gold/5 rounded-full blur-3xl"></div>
            </div>
            <SEO title="Legal" description="特定商取引法に基づく表記。" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-black text-ikemen-text mb-16 tracking-widest text-center">
                    LEGAL
                </h2>
                <p className="text-center text-gray-500 mb-12 font-mono tracking-widest">特定商取引法に基づく表記</p>

                <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                    <dl className="divide-y divide-gray-100">
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">販売業者</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">株式会社イケメン</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">運営統括責任者</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">沼倉 隆平</dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">所在地</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                〒104-0051<br />
                                東京都品川区大崎4丁目4-24
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">電話番号</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                050-6874-9944（平日 10:00 〜 19:00）
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">メールアドレス</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                info@ikemen.ltd
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">お支払方法</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                クレジットカード（Square, Stripe）、銀行振込（楽天銀行）
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">お支払時期</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                契約締結時、または請求書発行後1週間以内（別途契約で定めた場合を除く）
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">サービスの提供時期</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                契約締結後、速やかに提供を開始いたします。（具体的な納期は別途契約で定めます）
                            </dd>
                        </div>
                        <div className="flex flex-col md:flex-row p-6 hover:bg-gray-50 transition-colors">
                            <dt className="w-full md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">返品・キャンセルについて</dt>
                            <dd className="w-full md:w-2/3 text-gray-600">
                                サービスの性質上、原則として契約締結後の返品・キャンセルはお受けしておりません。<br />
                                ただし、当社の責に帰すべき事由によりサービス提供が不可能となった場合はこの限りではありません。
                            </dd>
                        </div>
                    </dl>
                </div>
            </motion.div>
        </div>
    );
};

export default Legal;
