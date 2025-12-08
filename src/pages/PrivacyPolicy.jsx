import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="w-full min-h-screen bg-white/60 backdrop-blur-md relative overflow-hidden pt-32 pb-40">
            <SEO
                title="Privacy Policy"
                description="株式会社イケメンのプライバシーポリシー（個人情報保護方針）。個人情報の収集、利用目的、管理、第三者提供などについて定めています。"
                keywords="プライバシーポリシー,個人情報保護方針,株式会社イケメン,個人情報"
            />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.08] bg-center"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center opacity-[0.05]">
                    <span className="text-[15vw] font-serif font-black text-black leading-none tracking-tighter">PRIVACY</span>
                </div>
            </div>

            <div className="max-w-[800px] mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-medium text-ikemen-text tracking-tighter mb-16 text-center">
                        PRIVACY<br /><span className="text-gray-300 italic">POLICY</span>
                    </h1>

                    <div className="space-y-12 font-serif text-gray-600 leading-loose">
                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">1. 個人情報の収集について</h2>
                            <p>当社は、適法かつ公正な手段によって個人情報を取得します。ユーザーが当社のサービスを利用する際に、氏名、住所、電話番号、メールアドレスなどの個人情報を提供していただく場合があります。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">2. 個人情報の利用目的</h2>
                            <p>当社は、取得した個人情報を以下の目的で利用します。</p>
                            <ul className="list-disc list-inside mt-4 space-y-2 pl-4">
                                <li>サービスの提供・運営のため</li>
                                <li>ユーザーからのお問い合わせに回答するため</li>
                                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">3. 個人情報の第三者提供</h2>
                            <p>当社は、法令に定める場合を除き、個人情報を事前に本人の同意を得ることなく第三者に提供しません。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">4. 個人情報の管理</h2>
                            <p>当社は、個人情報の正確性を保ち、これを安全に管理します。個人情報の紛失、破壊、改ざん及び漏洩などを防止するため、不正アクセス、コンピュータウイルス等に対する適正な情報セキュリティ対策を講じます。</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-bold text-ikemen-text mb-4 border-b border-gray-200 pb-2">5. お問い合わせ窓口</h2>
                            <p>本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。<br /><br />
                                株式会社イケメン<br />
                                Eメールアドレス：info@ikemen.ltd</p>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
