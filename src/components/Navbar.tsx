"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/victim", label: "Request Help" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/admin", label: "Control Room" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-lg">
          🛡️ DisasterShield
        </Link>

        <nav className="flex gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded px-3 py-1 text-sm",
                  active ? "bg-black text-white" : "hover:bg-gray-100",
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}