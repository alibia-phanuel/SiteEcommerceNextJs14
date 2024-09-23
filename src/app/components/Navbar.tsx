import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavBarIcons from "./NavBarIcons";
const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative md:pt-6">
      {/**MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">SHOP</div>
        </Link>
        <Menu />
      </div>
      {/**Bigger scrrens */}
      <div className="">
        <div className="hidden md:flex items-center justify-between h-full gap-8">
          {/**Left */}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
              <div className="text-2xl tracking-wide">SHOP</div>
            </Link>
            <div className="hidden xl:flex gap-4">
              <Link href="/">Accueil</Link>
              <Link href="/">Boutique</Link>
              <Link href="/">Marchés</Link>
              <Link href="/">À propos </Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          {/**RIGHT */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavBarIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
