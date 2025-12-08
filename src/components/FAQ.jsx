import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqData = [
    {
        q: "コンサルティングの費用はどのくらいですか？",
        a: "お客様の課題や規模感に合わせて最適なプランをご提案させていただきます。初回ヒアリングは無料ですので、まずはお気軽にご相談ください。"
    },
    {
        q: "Webサイト制作の期間はどのくらいですか？",
        a: "LiteWEB+プランであれば最短1日での納品が可能です。フルスクラッチ開発の場合は、規模に応じて1ヶ月〜3ヶ月程度のお時間をいただいております。"
    },
    {
        q: "遠方でも依頼は可能ですか？",
        a: "はい、可能です。ZoomやGoogle Meetなどを活用し、全国どこでもオンラインで対応させていただきます。必要に応じて対面での打ち合わせも可能です。"
    },
    {
        q: "補助金の申請サポートのみを依頼することはできますか？",
        a: "はい、可能です。IT導入補助金や小規模事業者持続化補助金など、各種補助金の申請サポートを行っております。採択率を高めるためのノウハウも提供いたします。"
    },
    {
        q: "採用について、未経験でも応募できますか？",
        a: "はい、未経験の方も大歓迎です。弊社では充実した教育カリキュラムを用意しており、入社後にスキルを身につけて活躍している社員が多数在籍しています。"
    }
];

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={onClick}
            >
                <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-ikemen-gold' : 'text-ikemen-text group-hover:text-cyan-600'}`}>
                    {question}
                </span>
                <span className={`relative ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <span className="absolute w-full h-[2px] bg-gray-400 group-hover:bg-ikemen-gold"></span>
                    <span className="absolute h-full w-[2px] bg-gray-400 group-hover:bg-ikemen-gold"></span>
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="pb-6 text-gray-600 leading-relaxed">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-32 px-6 bg-gray-50 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-black text-ikemen-text mb-4 tracking-tight">
                        FAQ
                    </h2>
                    <p className="text-ikemen-gold font-mono tracking-[0.3em]">Q & A</p>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.q}
                            answer={item.a}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
