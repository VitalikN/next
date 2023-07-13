import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link className="nav__link" href="/">
            Home
          </Link>
          <Link className="nav__link" href="/blog">
            Blog
          </Link>
          <Link className="nav__link" href="/about">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};
export { Header };
