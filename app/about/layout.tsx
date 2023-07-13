import Link from "next/link";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="title">About us</h1>
      <ul className="aboutLayout__list">
        <li className="aboutLayout__item">
          <Link href="/about/contacts">Contacts</Link>
        </li>
        <li className="aboutLayout__item">
          <Link href="/about/team">Team</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
