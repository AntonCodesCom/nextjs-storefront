import CommonProductList2 from '@/Common/components/ProductList2';
import ProductCategoryTabs from '@/Product/components/CategoryTabs';

export default function RouteProducts() {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
        All products
      </h2>
      <ProductCategoryTabs />
      <div className="mb-8" />
      <CommonProductList2 />
    </div>
  );
}
