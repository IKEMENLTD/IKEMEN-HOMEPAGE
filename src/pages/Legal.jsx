import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Legal = () => {
    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="特定商取引法に基づく表記"
                description="株式会社イケメンの特定商取引法に基づく表記。販売業者、運営統括責任者、所在地、連絡先などをご確認いただけます。"
                keywords="特定商取引法,特商法,株式会社イケメン,販売業者,運営統括責任者"
            />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] bg-center"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.05]">
                    <span className="text-[15vw] font-serif font-black text-black leading-none tracking-tighter">LEGAL</span>
                </div>
            </div>

            <div className="max-w-[800px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text tracking-tighter mb-16 text-center">
                        LEGAL<br /><span className="text-gray-300 italic">INFO</span>
                    </h1>

                    <div className="space-y-8 font-serif text-gray-600 leading-loose">
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-8">
                            <div className="md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">販売業者</div>
                            <div className="md:w-2/3">株式会社イケメン</div>
                        </div>
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-8">
                            <div className="md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">運営統括責任者</div>
                            <div className="md:w-2/3">沼倉 隆平</div>
                        </div>
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-8">
                            <div className="md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">所在地</div>
                            <div className="md:w-2/3">〒104-0051 東京都品川区大崎4丁目4-24</div>
                        </div>
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-8">
                            <div className="md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">メールアドレス</div>
                            <div className="md:w-2/3">info@ikemen.ltd</div>
                        </div>
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-8">
                            <div className="md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">販売価格</div>
                            <div className="md:w-2/3">各サービスページに記載</div>
                        </div>
                        <div className="flex flex-col md:flex-row border-b border-gray-200 pb-8">
                            <div className="md:w-1/3 font-bold text-ikemen-text mb-2 md:mb-0">商品代金以外の必要料金</div>
                            <div className="md:w-2/3">消費税、振込手数料</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Legal;
