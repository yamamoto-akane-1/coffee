'use client';

export default function Privacy() {
  return (
    <main className="min-h-screen pt-20 bg-coffee-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">プライバシーポリシー</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. 個人情報の取り扱いについて</h2>
            <p className="text-white mb-4">
              N coffee（以下「当社」）は、お客様の個人情報の保護を最重要事項と考え、適切な収集、利用、管理に努めます。
              当社は、個人情報の保護に関する法律、その他の関係法令を遵守し、以下のプライバシーポリシーに従って個人情報を適切に取り扱います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. 収集する個人情報</h2>
            <p className="text-white mb-4">
              当社は、以下の個人情報を収集する場合があります：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>氏名</li>
              <li>住所</li>
              <li>電話番号</li>
              <li>メールアドレス</li>
              <li>決済情報</li>
              <li>その他、サービス提供に必要な情報</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. 個人情報の利用目的</h2>
            <p className="text-white mb-4">
              当社は、収集した個人情報を以下の目的で利用します：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>商品の配送</li>
              <li>お問い合わせへの対応</li>
              <li>サービスの提供・運営</li>
              <li>新商品・サービスの案内</li>
              <li>利用状況の分析・改善</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. 個人情報の管理</h2>
            <p className="text-white mb-4">
              当社は、お客様の個人情報を適切に管理し、以下のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>お客様の同意がある場合</li>
              <li>法令に基づき開示することが必要である場合</li>
              <li>当社の業務委託先に対して、業務委託契約に基づき開示する場合</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. 個人情報の安全対策</h2>
            <p className="text-white mb-4">
              当社は、個人情報の漏洩、滅失または毀損を防止するため、セキュリティ対策を実施し、個人情報の適切な管理を行います。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">6. 個人情報の開示・訂正・利用停止</h2>
            <p className="text-white mb-4">
              当社は、お客様ご本人からの個人情報の開示、訂正、利用停止のご要請に対して、合理的な範囲で対応いたします。
              ご要請の際は、ご本人確認の上、対応させていただきます。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. プライバシーポリシーの変更</h2>
            <p className="text-white mb-4">
              当社は、必要に応じて本プライバシーポリシーを変更することがあります。
              変更後のプライバシーポリシーは、当社ウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <div className="mt-12 text-white">
            <p>制定日：2024年4月1日</p>
            <p>最終更新日：2024年4月1日</p>
          </div>
        </div>
      </div>
    </main>
  );
} 