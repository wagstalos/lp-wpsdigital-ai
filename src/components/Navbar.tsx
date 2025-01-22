"use client";
import Link from "next/link";
import { Content } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import ButtonLink from "@/components/ButtonLink";
import WordMark from "@/components/WorldMark";

type NavBarProps = {
  settings: Content.SettingsDocument;
};

export default async function Navbar({ settings }: NavBarProps) {
  return (
    <nav className="md-:py-6 px-4 py-4 md:px-6" aria-label="Main">
      <div className="mx-auto flex max-w-6xl flex-col justify-between py-2 font-medium text-white md:flex-row md:items-center">
        <Link href="/">
          <WordMark />
          <span className="sr-only">Glisten.ia Home page</span>
        </Link>

        <ul className="flex gap-6">
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label} </ButtonLink>
                </li>
              );
            }

            return (
              <li
                key={item.label}
                className="inline-flex min-h-11 items-center"
              >
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
