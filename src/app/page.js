import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans ">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16  sm:items-start">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <Link
            href="/producto"
            className="group overflow-hidden rounded-2xl border-2 border-white/20 shadow-xl transition duration-300 hover:scale-105"
          >
            <Image
            src="/promo_1.jpg"
            alt="Promo 1"
            width={400}
            height={300}
            className="w-full h-auto"
            />
            </Link>
            <Link
            href="/producto"
            className="gropu overflow-hidden rounded-2xl border-2 border-white/20 shadow-xl transition duration-300 hover:scale-105"
          >
            <Image
            src="/promo_2.jpg"
            alt="Promo 2"
            width={400}
            height={300}
            className="w-full h-auto"
            />
            </Link>
        </div>
      </main>
    </div>
  );
}
