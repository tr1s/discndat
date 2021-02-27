import Head from 'next/head'; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Layout from '../components/layout';
import Contact from '../components/contact';
import Location from '../components/location';

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

          <Contact />
        </div>

        <Location />
      </section>
    </Layout>
  );
}
