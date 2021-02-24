import Link from 'next/link';
import Image from 'next/image';

import styles from './footer.module.scss';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <nav className="inner-wrapper">
          <Link href="/">
            <a className={styles.link}>Disc ’n Dat Custom Electronics</a>
          </Link>

          <Link href="/brands">
            <a className={styles.link}>Brands</a>
          </Link>
        </nav>
      </footer>
    </>
  );
}
