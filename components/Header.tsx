import Link from "next/link";
import { Slash } from "lucide-react";

export default function Header() {
  return (
    <>
      <a
        href="#"
        className="fixed -top-16 rounded-br-lg bg-stone-400 px-6 py-2.5 text-black outline-offset-4 outline-red-400 transition-discrete duration-600 hover:top-0 hover:outline-2 focus:top-0 focus:outline-2"
      >
        Skip to content
      </a>

      <header className="mx-auto flex max-w-450 items-center justify-between px-4 pt-12">
        <Link
          href="/"
          className="group grid size-8 place-content-center rounded-lg bg-stone-100"
        >
          <Slash color="black" size={18} strokeWidth={5} />
        </Link>
      </header>
    </>
  );
}
