import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Terms = () => {
    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="Terms of Service"
                description="株式会社イケメンの利用規約。本サービスの利用条件、禁止事項、免責事項などについて定めています。"
                keywords="利用規約,Terms of Service,株式会社イケメン,利用条件"
            />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] bg-center"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.05]">
                    <span className="text-[15vw] font-serif font-black text-black leading-none tracking-tighter">TERMS</span>
                </div>
            </div>

            <div className="max-w-[800px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text tracking-tighter mb-16 text-center">
                        TERMS OF<br /><span className="text-gray-300 italic">SERVICE</span>
                    </h1>

                    <div className="space-y-12 font-serif text-gray-600 leading-loose">
                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">1. 適用</h2>
                            <p>本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">2. 禁止事項</h2>
                            <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
                                <li>法令または公序良俗に違反する行為</li>
                                <li>犯罪行為に関連する行為</li>
                                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                                <li>当社のサービスの運営を妨害するおそれのある行為</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">3. 本サービスの提供の停止等</h2>
                            <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
                                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">4. 免責事項</h2>
                            <p>当社の債務不履行責任は、当社の故意または重過失によらない場合には免責されるものとします。</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Terms;
