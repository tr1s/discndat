import styles from './location.module.scss';

export default function Location() {
  return (
    <div className={styles.location}>
      <a
        className={styles.mapLink}
        href="https://www.google.com/maps/place/Disc+'N+Dat+Custom+Electronics/@42.3038963,-82.871485,17z/data=!3m1!4b1!4m5!3m4!1s0x883b2c6cadcbb7e7:0x3efd83593ddfd15e!8m2!3d42.3038963!4d-82.8692963"
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
            <p>1740 Manning Rd</p>
            <p>Windsor, ON N8N 2L9</p>
          </div>
          <div className={styles.locationInfo}>
            <a href="tel:519-972-1555">519-972-1555</a>
            <a href="mailto:info@discndat.co">info@discndat.co</a>
          </div>
          <img src="/disc.svg" alt="" />
          <div>
            <p>Monday – Closed</p>
            <p className="bold">Tuesday – Friday – 9am to 5pm</p>
            <p className="bold">Saturday – 9am to 4pm</p>
            <p>Sunday – Closed</p>
          </div>
        </div>
      </div>
    </div>
  );
}
