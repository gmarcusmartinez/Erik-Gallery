import Link from "next/link";

const links = [
  { href: "prints", text: "print work" },
  { href: "zines", text: "zines" },
  { href: "sound", text: "sound" },
  { href: "contact", text: "contact" },
];

export const renderLinks = (bool, cb) => {
  const direction = bool ? "slide-in" : "slide-out";
  const className = `mobile-navigation__link ${direction}`;

  const linkEls = links.map((l, i) => (
    <li key={i} className={`${className}-${i}`} onClick={() => cb(false)}>
      <Link href={l.href}>
        <a>{l.text}</a>
      </Link>
    </li>
  ));
  return linkEls;
};
