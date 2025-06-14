'use client';

export default function Terms() {
  return (
    <main className="min-h-screen pt-20 bg-coffee-800">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-white mb-8">利用規約</h1>
        
        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">第1条（適用）</h2>
            <p className="text-white mb-4">
              本規約は、N coffee（以下「当社」）が提供するサービス（以下「本サービス」）の利用条件を定めるものです。
              ユーザーは本規約に同意の上、本サービスを利用するものとします。
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">第2条（禁止事項）</h2>
            <p className="text-white mb-4">
              ユーザーは、以下の行為を行ってはならないものとします：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>法令または公序良俗に違反する行為</li>
              <li>当社または第三者の知的財産権を侵害する行為</li>
              <li>当社または第三者の名誉を毀損する行為</li>
              <li>本サービスの運営を妨害する行為</li>
              <li>その他、当社が不適切と判断する行為</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">第3条（商品の購入）</h2>
            <p className="text-white mb-4">
              商品の購入に関する以下の事項に同意いただく必要があります：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>商品の価格は税込表示となります</li>
              <li>在庫状況により、ご注文いただけない場合がございます</li>
              <li>商品の品質管理のため、発送までに2-3営業日を要する場合がございます</li>
              <li>天候や交通状況により、配送が遅延する場合がございます</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">第4条（返品・交換）</h2>
            <p className="text-white mb-4">
              商品の返品・交換については、以下の条件に従って対応いたします：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>商品到着後7日以内にご連絡いただいた場合に限り、返品・交換を承ります</li>
              <li>お客様都合による返品の場合は、送料はお客様負担となります</li>
              <li>商品の品質に問題がある場合は、送料当社負担で対応いたします</li>
              <li>開封済みの商品は返品をお受けできません</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">第5条（免責事項）</h2>
            <p className="text-white mb-4">
              当社は、以下の事項について一切の責任を負いません：
            </p>
            <ul className="list-disc pl-6 text-white mb-4">
              <li>本サービスの利用により生じた損害</li>
              <li>本サービスの中断、停止、終了、データの消失</li>
              <li>本サービスを利用して行われた取引</li>
              <li>その他、本サービスに関連して生じた損害</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">第6条（規約の変更）</h2>
            <p className="text-white mb-4">
              当社は、必要に応じて本規約を変更することができるものとします。
              変更後の規約は、当社ウェブサイトに掲載した時点で効力を生じるものとします。
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">第7条（準拠法・管轄裁判所）</h2>
            <p className="text-white mb-4">
              本規約の解釈にあたっては、日本法を準拠法とします。
              本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
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