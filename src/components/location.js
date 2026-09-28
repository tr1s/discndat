import styles from './location.module.scss';

export default function Location() {
  return (
    <div className={styles.location}>
      <a
        className={styles.mapLink}
        href="https://www.google.com/maps/search/?api=1&query=Disc%20%27N%20Dat%20Custom%20Electronics%2C%20271%20Front%20Rd%2C%20LaSalle%2C%20ON%20N9J%201Z6"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Disc ‘n Dat at 271 Front Rd, LaSalle on Google Maps"
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
              href="https://www.google.com/maps/search/?api=1&query=Disc%20%27N%20Dat%20Custom%20Electronics%2C%20271%20Front%20Rd%2C%20LaSalle%2C%20ON%20N9J%201Z6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>271 Front Rd</p>
              <p>LaSalle, ON N9J 1Z6</p>
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
            <p className="bold">Monday – Friday – 9am to 5pm</p>
            <p className="bold">Saturday – by appointment only</p>
            <p>Sunday – Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
