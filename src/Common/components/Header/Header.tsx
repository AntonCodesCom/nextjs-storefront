'use client';
import { useEffect, useRef, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import './Header.css';

const topCollections = [
  {
    name: 'Electronics',
    slug: 'electronics',
  },
  {
    name: 'Home & Garden',
    slug: 'home-garden',
  },
  {
    name: 'Sports & Outdoor',
    slug: 'sports-outdoor',
  },
];

export default function CommonHeader() {
  const headerRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // initial header state
  useEffect(() => {
    const header = headerRef.current;
    if (!header) {
      return;
    }
    if (window.scrollY > 0) {
      header.classList.remove('Header-bgTransparent');
      header.classList.add('Header-bgWhite');
    } else {
      header.classList.remove('Header-bgWhite');
      header.classList.add('Header-bgTransparent');
    }
  }, []);

  // header state change on scroll
  useEffect(() => {
    const listener = () => {
      const header = headerRef.current;
      if (!header) {
        return;
      }
      if (window.scrollY > 0) {
        header.classList.remove('Header-bgTransparent_transition');
        header.classList.add('Header-bgWhite_transition');
      } else {
        header.classList.remove('Header-bgWhite_transition');
        header.classList.add('Header-bgTransparent_transition');
      }
    };
    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <header ref={headerRef} className="mb-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="font-black text-indigo-600 text-lg">
              StoreDemo
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a
            href="/products"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            All Products
          </a>
          {topCollections.map((x, i) => (
            <a
              key={i}
              href={`/collections/${x.slug}`}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {x.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="/cart"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cart{' '}
            <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
              5
            </span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="font-black text-indigo-600">StoreDemo</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/products"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  All Products
                </a>
                {topCollections.map((x, i) => (
                  <a
                    key={i}
                    href={`/collections/${x.slug}`}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {x.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/cart"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Cart{' '}
                  <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10">
                    5
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
