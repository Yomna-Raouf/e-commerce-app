import Link from 'next/link';

import useCartStore from '@/stores/cart-store/cart-store';

import CartIcon from '../Icons/CartIcon';

const Navbar = () => {
  const { cartCount } = useCartStore();

  return (
    <nav className="px-5 py-3.5 lg:px-20 lg:py-5 shadow flex justify-between items-center">
      <Link title="Home" href={'/'} className="font-bold text-[var(--neutral_900)] text-xl">
        E-COMMERCE
      </Link>

      <Link title="My Cart" href={'/my-cart'} className="relative">
        {!!cartCount && (
          <div className="absolute right-0 w-4 h-4 rounded-2xl bg-[var(--purple_500)] text-[var(--neutral_100)] text-xs flex justify-center items-center">
            <span>{cartCount}</span>
          </div>
        )}
        <CartIcon width={35} height={35} fill="var(--purple_800)" />
      </Link>
    </nav>
  );
};

export default Navbar;
