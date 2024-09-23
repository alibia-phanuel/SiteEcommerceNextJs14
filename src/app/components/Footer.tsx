import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">ALIBIA</div>
          </Link>
          <p>
            N&apos;hésitez pas à nous contacter pour toute demande de
            renseignements ou à passer nous voir directement sur douala !
          </p>
          <span className="font-semibold">phanuel.alibia@gmail.com</span>
          <span className="font-semibold">+237 696603305</span>
          <div className="flex gap-6">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/pinterest.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SOCIÉTÉ</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">À propos de nous</Link>
              <Link href="">Affiliés</Link>
              <Link href="">Blog</Link>
              <Link href="">Nous contacter</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">BOUTIQUE</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Nouveaux arrivages</Link>
              <Link href="">Accessoires</Link>
              <Link href="">Les hommes</Link>
              <Link href="">Les femmes</Link>
              <Link href="">Tous les produits</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg"></h1>
            <div className="flex flex-col gap-6">
              <Link href="">AIDE</Link>
              <Link href="">Mon compte</Link>
              <Link href="">Trouver un magasin</Link>
              <Link href="">Juridique et protection de la vie privée</Link>
              <Link href="">Voiture-cadeau</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">S&apos;ABONNER</h1>
          <p>
            Soyez le premier à recevoir les dernières nouvelles sur les
            tendances, les promotions et et bien plus encore !
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Email address"
              className="p-4 w-3/4"
            />
            <button className="w-1/4 bg-lama text-white">JOINDRE</button>
          </div>
          <span className="font-semibold">Paiements sécurisés</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 alibia Shop</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
          </div>
          <div className="">
            <span className="text-gray-500 mr-4">Monnaie</span>
            <span className="font-medium">FCFA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
