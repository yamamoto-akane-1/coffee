import { coffeeBeans, dripEquipment, tumblers, giftSets } from '@/app/data/products';

export default function ProductsPage() {
  const allProducts = [...coffeeBeans, ...dripEquipment, ...tumblers, ...giftSets];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">商品一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">¥{product.price.toLocaleString()}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  カートに追加
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 