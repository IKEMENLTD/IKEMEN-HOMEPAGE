import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const Terms = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-white/70 backdrop-blur-sm relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ikemen-gold/5 rounded-full blur-3xl"></div>
            </div>
            <SEO title="Terms of Service" description="販売業務請負規約。" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-black text-ikemen-text mb-16 tracking-widest text-center">
                    TERMS OF SERVICE
                </h2>
                <p className="text-center text-gray-500 mb-12 font-mono tracking-widest">販売業務請負規約</p>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <h3 className="text-2xl font-bold text-ikemen-text mb-8 text-center">
                        イケメンギルドプラットフォーム利用規約<br />
                        及び<br />
                        イケメンギルドアフィリエイト規約
                    </h3>

                    <h4 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第1条(本契約の発効)</h4>
                    <p>
                        本契約は、法人又は個人が、株式会社イケメンが所有する（イケメンギルドという）プラットフォーム上から運営される各種サービスの登録を行ったと同時に、書面、電子、またオンライン同意などの方法にかかわらず効力を生じます。
                    </p>

                    <h4 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第2条(プログラム提供の拒否権)</h4>
                    <p>
                        当社は、当社の独自の判断により、本プログラムに締結するパートナーが、販売業務請負先としてふさわしくないと判断した場合、本プログラムの提供を拒否することができるほか、事前の通知なしに当社サービスの提供を停止することができる。ふさわしくないという判断は、当社が、当社の基準に基づき、独自に行えるものとし、本プログラム参加パートナーは当社のこのような判断に一切の異議を申し立てないものとします。
                    </p>
                    <p className="mt-4">
                        当社は、当社の独自の判断により、以下の各号のいずれかに該当すると判断したパートナーに対し、事前の通知なしに、本プログラム本登録の解除を行えるものとし、本プログラム本登録のパートナーは、当社のこのような判断に一切の異議を申し立てないものとします。当社は、本項に該当するパートナーに対していかなるサービスおよびプログラム(本プログラムを含みます。) の提供を拒否できるものとします。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>未成年者などの制限行為能力者が運営している場合。ただし18歳以上で法定代理人の同意を得ている場合は除く。</li>
                        <li>虚偽情報により本登録している場合。</li>
                        <li>公序良俗に反している場合。</li>
                        <li>違法な活動をしているもしくはその奨励をしている場合。</li>
                        <li>他人の名誉の侵害、特定の個人や団体を誹謗中傷(当社の名誉を侵害ないし誹謗中傷する場合も含みます。) している場合。</li>
                        <li>著作権等の知的財産権、肖像権等の人格権その他法律上の権利もしくは保護に値する権利の侵害、または関連する法規に違反している場合。</li>
                        <li>景品表示法などの法令に違反する表現を記載している場合。</li>
                        <li>内容が不明または乏しい、外観が異様な場合。</li>
                        <li>報酬発生条件の事項に違反している場合。</li>
                        <li>第三者から受取る現金、電子マネー、ポイント、マイレージなど(以下「現金など」といいます。) を原資として、自己の会員もしくはそれに準じるユーザーに対し、利益を付与している場合。(ただし、当社が承諾した場合を除きます。)</li>
                        <li>パートナーの営業行為（オンライン含む）の内容が当社から付与されたカテゴリーから大幅に変更された場合。</li>
                        <li>法令に違反またはそのおそれがあると判断した場合。</li>
                        <li>本プログラム締結者が自身または自社を顧客として販売した場合。</li>
                        <li>本プログラムにふさわしくないパートナーとして当社の基準にて判断された場合。</li>
                    </ul>

                    <h4 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第3条(判断理由の非開示)</h4>
                    <p>
                        当社は独自の判断によりパートナーへの本プログラム提供の可否を行えるものとし、その判断理由は、原則としてパートナーに対して開示されないものとします。パートナーは、当社がその判断基準に基づいて行った判断に対して、一切の異議を申し立てないものとします。また、当社は、当該行為によって発生するパートナーまたは第三者のいかなる不利益に関しても一切の責任を負わないものとします。
                    </p>

                    <h4 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第4条(申込事項および届出事項)</h4>
                    <p>
                        （以下、当社規定に準ずる）
                    </p>

                    <div className="mt-16 text-right text-sm text-gray-500">
                        <p>株式会社イケメン</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Terms;
