export const coffeeBeans = [
  {
    id: "ethiopia-yirgacheffe",
    name: "エチオピア イルガチェフェ",
    description: "柑橘系の爽やかな酸味と花のような香りが特徴のエチオピア産コーヒー",
    price: 1800,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    category: "coffee-beans",
    details: {
      origin: "エチオピア",
      roast: "中煎り",
      process: "ウォッシュド",
      altitude: "1,800-2,200m",
      variety: "エチオピアンヘイロー",
      cupping: {
        acidity: 4,
        body: 3,
        sweetness: 4,
        bitterness: 2,
        aroma: 5
      }
    },
    story: "エチオピアのイルガチェフェ地区で栽培された、高品質なアラビカ種のコーヒー豆です。標高の高い地域で栽培されることで、複雑な風味と爽やかな酸味が特徴です。",
    averageRating: 4.8,
    totalReviews: 156
  },
  {
    id: "guatemala-antigua",
    name: "グアテマラ アンティグア",
    description: "チョコレートのような甘みとバランスの取れた味わいが特徴のグアテマラ産コーヒー",
    price: 2000,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    category: "coffee-beans",
    details: {
      origin: "グアテマラ",
      roast: "中深煎り",
      process: "ウォッシュド",
      altitude: "1,500-1,700m",
      variety: "ブルボン、カツアイ",
      cupping: {
        acidity: 3,
        body: 4,
        sweetness: 4,
        bitterness: 3,
        aroma: 4
      }
    },
    story: "グアテマラのアンティグア地区で栽培された、バランスの取れた味わいが特徴のコーヒー豆です。火山性の土壌と適度な降雨量が、豊かな風味を生み出しています。",
    averageRating: 4.7,
    totalReviews: 98
  },
  {
    id: "colombia-supremo",
    name: "コロンビア スプレモ",
    description: "ナッツのような香りとまろやかな味わいが特徴のコロンビア産コーヒー",
    price: 1900,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    category: "coffee-beans",
    details: {
      origin: "コロンビア",
      roast: "中煎り",
      process: "ウォッシュド",
      altitude: "1,200-1,800m",
      variety: "カツアイ、カトゥーラ",
      cupping: {
        acidity: 3,
        body: 4,
        sweetness: 4,
        bitterness: 3,
        aroma: 4
      }
    },
    story: "コロンビアの最高品質のコーヒー豆として知られるスプレモグレードの豆です。バランスの取れた味わいと、ナッツのような香りが特徴です。",
    averageRating: 4.6,
    totalReviews: 112
  },
  {
    id: "kenya-aa",
    name: "ケニア AA",
    description: "ベリーのような酸味と複雑な風味が特徴のケニア産コーヒー",
    price: 2200,
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e",
    category: "coffee-beans",
    details: {
      origin: "ケニア",
      roast: "中煎り",
      process: "ウォッシュド",
      altitude: "1,500-2,100m",
      variety: "SL28, SL34",
      cupping: {
        acidity: 5,
        body: 3,
        sweetness: 4,
        bitterness: 2,
        aroma: 5
      }
    },
    story: "ケニアの最高品質のコーヒー豆として知られるAAグレードの豆です。ベリーのような酸味と、複雑な風味が特徴です。",
    averageRating: 4.9,
    totalReviews: 87
  }
];

export const dripEquipment = [
  {
    id: "ceramic-dripper",
    name: "セラミックドリッパー",
    description: "保温性が高く、安定した抽出が可能なセラミック製のドリッパー",
    price: 3500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "drip-equipment",
    details: {
      material: "セラミック",
      size: "2-4杯用",
      weight: "300g",
      features: [
        "保温性が高い",
        "安定した抽出が可能",
        "洗いやすい",
        "耐久性が高い"
      ]
    },
    story: "職人の手作業で作られた、高品質なセラミックドリッパーです。保温性が高く、安定した抽出が可能です。",
    averageRating: 4.7,
    totalReviews: 89
  },
  {
    id: "paper-filter",
    name: "ペーパーフィルター",
    description: "コーヒーの微粒子をしっかりと濾過する高品質なペーパーフィルター",
    price: 500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "drip-equipment",
    details: {
      material: "漂白なしの紙",
      size: "2-4杯用",
      quantity: "100枚入り",
      features: [
        "微粒子をしっかりと濾過",
        "漂白剤不使用",
        "環境に配慮した素材",
        "安定した抽出が可能"
      ]
    },
    story: "環境に配慮した素材を使用した、高品質なペーパーフィルターです。微粒子をしっかりと濾過し、クリーンな味わいを実現します。",
    averageRating: 4.5,
    totalReviews: 156
  },
  {
    id: "coffee-scoop",
    name: "コーヒースプーン",
    description: "正確な計量が可能なステンレス製のコーヒースプーン",
    price: 800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "drip-equipment",
    details: {
      material: "ステンレススチール",
      capacity: "10g",
      length: "15cm",
      features: [
        "正確な計量が可能",
        "耐久性が高い",
        "洗いやすい",
        "使いやすい形状"
      ]
    },
    story: "正確な計量が可能な、高品質なステンレス製のコーヒースプーンです。使いやすい形状で、毎日のコーヒー作りをサポートします。",
    averageRating: 4.6,
    totalReviews: 78
  },
  {
    id: "coffee-scale",
    name: "コーヒースケール",
    description: "0.1g単位で正確な計量が可能なデジタルスケール",
    price: 4500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "drip-equipment",
    details: {
      material: "プラスチック、ガラス",
      capacity: "2kg",
      precision: "0.1g",
      features: [
        "0.1g単位での計量",
        "タイマー機能付き",
        "自動オフ機能",
        "バックライト付き"
      ]
    },
    story: "0.1g単位で正確な計量が可能な、高品質なデジタルスケールです。タイマー機能も付いており、コーヒー抽出をサポートします。",
    averageRating: 4.8,
    totalReviews: 112
  }
];

export const tumblers = [
  {
    id: "stainless-tumbler",
    name: "ステンレスタンブラー",
    description: "保温性が高く、持ち運びに便利なステンレス製のタンブラー",
    price: 2800,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "tumblers",
    details: {
      material: "ステンレススチール",
      capacity: "350ml",
      features: [
        "保温性が高い",
        "保冷性が高い",
        "漏れにくい",
        "洗いやすい"
      ]
    },
    story: "保温性が高く、持ち運びに便利な、高品質なステンレス製のタンブラーです。",
    averageRating: 4.7,
    totalReviews: 89
  },
  {
    id: "ceramic-tumbler",
    name: "セラミックタンブラー",
    description: "保温性が高く、洗いやすいセラミック製のタンブラー",
    price: 2500,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "tumblers",
    details: {
      material: "セラミック",
      capacity: "300ml",
      features: [
        "保温性が高い",
        "洗いやすい",
        "耐久性が高い",
        "使いやすい形状"
      ]
    },
    story: "保温性が高く、洗いやすい、高品質なセラミック製のタンブラーです。",
    averageRating: 4.6,
    totalReviews: 78
  },
  {
    id: "glass-tumbler",
    name: "ガラスタンブラー",
    description: "透明なガラスで、コーヒーの色を楽しめるタンブラー",
    price: 2000,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "tumblers",
    details: {
      material: "ガラス",
      capacity: "300ml",
      features: [
        "透明なガラス",
        "洗いやすい",
        "耐久性が高い",
        "使いやすい形状"
      ]
    },
    story: "透明なガラスで、コーヒーの色を楽しめる、高品質なガラスタンブラーです。",
    averageRating: 4.5,
    totalReviews: 67
  }
];

export const giftSets = [
  {
    id: "beginner-set",
    name: "コーヒー初心者セット",
    description: "コーヒーを始める方に最適な、基本的な道具が揃ったセット",
    price: 8000,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "gift-sets",
    details: {
      contents: [
        "セラミックドリッパー",
        "ペーパーフィルター（100枚）",
        "コーヒースプーン",
        "コーヒースケール",
        "コーヒー豆（200g）"
      ],
      features: [
        "初心者に最適",
        "基本的な道具が揃っている",
        "使いやすい",
        "高品質な商品"
      ]
    },
    story: "コーヒーを始める方に最適な、基本的な道具が揃ったセットです。",
    averageRating: 4.8,
    totalReviews: 45
  },
  {
    id: "premium-set",
    name: "プレミアムコーヒーセット",
    description: "高品質なコーヒーを楽しむための、上級者向けのセット",
    price: 15000,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "gift-sets",
    details: {
      contents: [
        "セラミックドリッパー",
        "ペーパーフィルター（200枚）",
        "コーヒースプーン",
        "コーヒースケール",
        "コーヒーミル",
        "プレミアムコーヒー豆（500g）"
      ],
      features: [
        "上級者向け",
        "高品質な道具が揃っている",
        "使いやすい",
        "プレミアムな商品"
      ]
    },
    story: "高品質なコーヒーを楽しむための、上級者向けのセットです。",
    averageRating: 4.9,
    totalReviews: 34
  },
  {
    id: "travel-set",
    name: "トラベルコーヒーセット",
    description: "旅行先でも美味しいコーヒーを楽しめる、携帯用のセット",
    price: 12000,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348",
    category: "gift-sets",
    details: {
      contents: [
        "折りたたみドリッパー",
        "ペーパーフィルター（50枚）",
        "コーヒースプーン",
        "コーヒースケール",
        "コーヒー豆（200g）",
        "収納ケース"
      ],
      features: [
        "携帯用",
        "旅行に最適",
        "使いやすい",
        "高品質な商品"
      ]
    },
    story: "旅行先でも美味しいコーヒーを楽しめる、携帯用のセットです。",
    averageRating: 4.7,
    totalReviews: 56
  }
]; 