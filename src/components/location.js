import styles from './location.module.scss';

export default function Location() {
  return (
    <div className={styles.location}>
      <a
        className={styles.mapLink}
        href="https://goo.gl/maps/ec3JeVydMrwmL2a99"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.map} />
      </a>
      <div className="inner-wrapper">
        <div className={styles.locationCard}>
          <div className={styles.locationInfo}>
            <p>Disc ‘n Dat</p>
            <p>Custom Electronics</p>
          </div>
          <div className={styles.locationInfo}>
            <a
              href="https://goo.gl/maps/ec3JeVydMrwmL2a99"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>13350 Lanoue St.</p>
              <p>Windsor, ON N8N 5E1</p>
            </a>
          </div>
          <div className={styles.locationInfo}>
            <a href="tel:519-972-1555" className="bold">
              519-972-1555
            </a>
            <a href="mailto:info@discndat.co">info@discndat.co</a>
          </div>
          <img src="/disc.svg" alt="" />
          <div>
            <p className="bold">Monday – Friday – 8am to 5pm</p>
            <p className="bold">Saturday – by appointment only</p>
            <p>Sunday – Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
