import Helmet from '../components/helmet';
import Layout from '../components/layout';
import Contact from '../components/contact';
import Location from '../components/location';

import styles from './brands.module.scss';

export default function Brands() {
  return (
    <>
      <Helmet url="brands" />
      <Layout>
        <section className={styles.main}>
          <div className="inner-wrapper">
            <div className={styles.info}>
              <h2>Brands</h2>
              <p>
                <strong>Certified Retailer of</strong> Panasonic, Sonos, Yamaha, Samsung,
                SpeakerCraft, Epson, Onkyo, Integra, Marantz, Monitor Audio, KEF, James Loudspeaker,
                Klipsch, Russound, Origin Acoustics, Control4, Key Digital, HEOS by Denon, Qolsys,
                Honeywell, Dahua Technology, and DSC.
              </p>
            </div>

            <ul className={styles.logos}>
              <li>
                <img src="/brands/epson.svg" alt="" />
              </li>
              <li>
                <img src="/brands/integra.svg" alt="" />
              </li>
              <li>
                <img src="/brands/kef.svg" alt="" />
              </li>
              <li>
                <img src="/brands/klipsch.svg" alt="" />
              </li>
              <li>
                <img src="/brands/marantz.svg" alt="" />
              </li>
              <li>
                <img src="/brands/monitor-audio.svg" alt="" />
              </li>
              <li>
                <img src="/brands/onkyo.svg" alt="" />
              </li>
              <li>
                <img src="/brands/panasonic.svg" alt="" />
              </li>
              <li>
                <img src="/brands/sonos.svg" alt="" />
              </li>
              <li>
                <img src="/brands/yamaha.svg" alt="" />
              </li>
              <li>
                <img src="/brands/samsung.svg" alt="" />
              </li>
              <li>
                <img src="/brands/honeywell.svg" alt="" />
              </li>
            </ul>

            <Contact />
          </div>

          <Location />
        </section>
      </Layout>
    </>
  );
}
