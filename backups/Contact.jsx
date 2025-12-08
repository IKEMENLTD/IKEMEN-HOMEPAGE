import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { FAQ } from '../components/FAQ';

const Contact = () => {
    return (
        <div className="pt-24 pb-20 px-6 bg-white/70 backdrop-blur-sm min-h-screen relative overflow-hidden">
            <SEO title="お問い合わせ" description="株式会社イケメンへのお問い合わせはこちらから。お仕事のご依頼、ご相談などお気軽にご連絡ください。" />

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ikemen-gold/5 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl mx-auto relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-bold text-ikemen-gold mb-16 tracking-widest text-center">CONTACT</h2>

                <div className="mb-20">
                    <FAQ />
                </div>

                <div className="bg-white border border-gray-100 p-8 md:p-16 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-ikemen-gold to-cyan-400"></div>

                    <p className="text-gray-600 mb-12 text-center leading-relaxed">
                        弊社へのお問い合わせは、下記フォームよりお願いいたします。<br />
                        内容を確認の上、担当者よりご連絡させていただきます。
                    </p>

                    <form className="space-y-8">
                        <div className="group">
                            <label htmlFor="name" className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-ikemen-gold transition-colors">お名前 <span className="text-red-400 text-xs ml-1">*</span></label>
                            <input type="text" id="name" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-gray-900 focus:outline-none focus:border-ikemen-gold focus:bg-white focus:shadow-md transition-all duration-300" placeholder="山田 太郎" required />
                        </div>
                        <div className="group">
                            <label htmlFor="email" className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-ikemen-gold transition-colors">メールアドレス <span className="text-red-400 text-xs ml-1">*</span></label>
                            <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-gray-900 focus:outline-none focus:border-ikemen-gold focus:bg-white focus:shadow-md transition-all duration-300" placeholder="info@example.com" required />
                        </div>
                        <div className="group">
                            <label htmlFor="subject" className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-ikemen-gold transition-colors">件名</label>
                            <input type="text" id="subject" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-gray-900 focus:outline-none focus:border-ikemen-gold focus:bg-white focus:shadow-md transition-all duration-300" placeholder="ご用件を入力してください" />
                        </div>
                        <div className="group">
                            <label htmlFor="message" className="block text-sm font-bold text-gray-500 mb-2 group-focus-within:text-ikemen-gold transition-colors">お問い合わせ内容 <span className="text-red-400 text-xs ml-1">*</span></label>
                            <textarea id="message" rows="5" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-6 py-4 text-gray-900 focus:outline-none focus:border-ikemen-gold focus:bg-white focus:shadow-md transition-all duration-300" placeholder="お問い合わせ内容をご記入ください" required></textarea>
                        </div>
                        <div className="text-center pt-4">
                            <button type="submit" className="inline-block px-12 py-4 bg-ikemen-gold text-white font-bold rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 tracking-widest transform hover:-translate-y-1">
                                SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;
