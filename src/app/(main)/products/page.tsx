import CommonProductList2 from '@/Common/components/ProductList2';

export default function RouteProducts() {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-6">
        All products
      </h2>
      <div className="flex gap-x-12 flex-wrap mb-6">
        <a
          href="#"
          className="py-2 text-sm font-semibold leading-6 text-indigo-600"
        >
          All products
        </a>
        <a href="#" className="py-2 text-sm leading-6 text-gray-900 underline">
          Electronics
        </a>
        <a href="#" className="py-2 text-sm leading-6 text-gray-900 underline">
          Home &amp; Garden
        </a>
        <a href="#" className="py-2 text-sm leading-6 text-gray-900 underline">
          Sports &amp; Outdoor
        </a>
      </div>
      <CommonProductList2 />
    </div>
  );
}
