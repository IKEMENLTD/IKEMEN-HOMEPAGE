import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';

const PrivacyPolicy = () => {
    return (
        <div className="w-full min-h-screen pt-32 pb-20 px-6 flex flex-col items-center bg-white/70 backdrop-blur-sm relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] bg-center bg-fixed"></div>
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-ikemen-gold/5 rounded-full blur-3xl"></div>
            </div>
            <SEO title="Privacy Policy" description="株式会社イケメンのプライバシーポリシー（個人情報保護方針）について。" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl w-full relative z-10"
            >
                <h2 className="text-3xl md:text-5xl font-black text-ikemen-text mb-16 tracking-widest text-center">
                    PRIVACY POLICY
                </h2>

                <div className="prose prose-lg max-w-none text-gray-600">
                    <p className="mb-8">
                        株式会社イケメン（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
                    </p>

                    <h3 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第1条（個人情報）</h3>
                    <p>
                        「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
                    </p>

                    <h3 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第2条（個人情報の収集方法）</h3>
                    <p>
                        当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
                    </p>

                    <h3 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第3条（個人情報を収集・利用する目的）</h3>
                    <p>当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>当社サービスの提供・運営のため</li>
                        <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                        <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                        <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                        <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                        <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                        <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
                        <li>上記の利用目的に付随する目的</li>
                    </ul>

                    <h3 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第4条（利用目的の変更）</h3>
                    <p>
                        当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。
                        利用目的の変更を行った場合には、変更後の目的について、当社所定の方法によりユーザーに通知し、または本ウェブサイト上に公表するものとします。
                    </p>

                    <h3 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第5条（個人情報の第三者提供）</h3>
                    <p>
                        当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                        <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                    </ul>

                    <h3 className="text-xl font-bold text-ikemen-text mt-12 mb-6 border-l-4 border-ikemen-gold pl-4">第6条（お問い合わせ窓口）</h3>
                    <p>
                        本ポリシーに関するお問い合わせは、下記の窓口までお願いいたします。
                    </p>
                    <div className="bg-gray-50 p-6 rounded-xl mt-6">
                        <p className="font-bold">株式会社イケメン</p>
                        <p>〒104-0051 東京都品川区大崎4丁目4-24</p>
                        <p>代表取締役：沼倉 隆平</p>
                        <p>お問い合わせ：フォームよりご連絡ください</p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;
