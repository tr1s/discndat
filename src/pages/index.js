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
              <strong>For over 30 years...</strong> Disc n Dat has provided top quality residential
              and commercial custom electronics from the best manufacturers to suit your needs.
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

        <figure class={styles.map}>
          <a
            href="https://www.google.com/maps/place/Disc+'N+Dat+Custom+Electronics/@42.3038963,-82.871485,17z/data=!3m1!4b1!4m5!3m4!1s0x883b2c6cadcbb7e7:0x3efd83593ddfd15e!8m2!3d42.3038963!4d-82.8692963"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/map.png" alt="" />
          </a>
        </figure>
      </section>
    </Layout>
  );
}
