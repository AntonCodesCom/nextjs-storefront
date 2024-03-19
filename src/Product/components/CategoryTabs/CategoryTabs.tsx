export default function ProductCategoryTabs() {
  return (
    <div className="flex gap-x-8 flex-wrap">
      <a className="py-2 text-sm font-semibold leading-6 text-indigo-600">
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
  );
}
