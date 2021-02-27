import Form from './form';

import styles from './contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.contact}>
      <h2>
        <span>Contact Us</span> for a <span>Free Consultation</span>
      </h2>

      <Form />
    </div>
  );
}
