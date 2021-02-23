import Link from "./activeLink";
import Image from "next/image";

import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* Banner */}
      <div className={styles.banner} />

      {/* Logo */}
      <figure className={styles.logo}>
        <Image src="/logo.png" width="204" height="178" alt="" />
      </figure>

      {/* Nav */}
      <div className="inner-wrapper">
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/">
                <a className={styles.navLink}>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/brands">
                <a className={styles.navLink}>Brands</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a className={styles.navLink}>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
