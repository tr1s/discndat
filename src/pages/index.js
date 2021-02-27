import Head from 'next/head'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Layout from '../components/layout';
import Form from '../components/form';

import styles from './index.module.scss';

export default function Home() {
  return (
    <Layout>
      <section className={styles.main}>
        <div className="inner-wrapper">
          <div className={styles.info}>
            <h3>
              <strong>For over 30 years,</strong> <span>Disc &#39;n Dat</span> has provided top
              quality residential and commercial custom electronics from the best manufacturers to
              suit your needs.
            </h3>
            <p>
              Our services include holistic audio-video customization, smart home automation,
              lighting, digital network, internet, and security. Our sales consultants take the time
              to answer all of your questions with care, understand your needs and help you find the
              right products for your desired application. Installation of our products in
              consultation with our CEDIA-certified staff will ensure complete satisfaction and
              seamless audio-video pleasure.
            </p>
          </div>

          <div className={styles.contact}>
            <h2>
              <span>Contact Us</span> for a <span>Free Consultation</span>
            </h2>

            <Form />
          </div>
        </div>

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
      </section>
    </Layout>
  );
}
