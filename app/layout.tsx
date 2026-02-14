import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Decision Analytics",
  description: "Decision analytics and consulting services"
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/cases", label: "Cases" },
  { href: "/blog", label: "Blog" },
  { href: "/contacts", label: "Contacts" },
  { href: "/privacy", label: "Privacy" }
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        <header className="border-b bg-white">
          <nav className="mx-auto flex max-w-5xl flex-wrap gap-4 px-6 py-4 text-sm font-medium">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-slate-700 hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
      </body>
    </html>
  );
}
