export default function CommonFooter() {
  return (
    <footer className="bg-white">
      <div
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <span className="-m-1.5 p-1.5">
            Made by{' '}
            <a
              className="text-indigo-600 underline"
              href="https://www.linkedin.com/in/antoncodes"
            >
              AntonCodes
            </a>
          </span>
        </div>
        <div className="flex flex-1 justify-end">
          <a
            className="text-gray-500 underline"
            href="https://github.com/AntonCodesCom/nextjs-storefront"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
