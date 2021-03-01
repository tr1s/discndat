import styles from './form.module.scss';

export default function Form() {
  return (
    <form
      id="contact"
      name="Disc n Dat Contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      action=""
      className={styles.form}
    >
      {/* Hidden input for Netlify */}
      <input type="hidden" name="form-name" value="Disc n Dat Contact" />

      <label htmlFor="name">
        Name *
        <input type="text" name="name" id="name" placeholder="Gordie Howe" required />
      </label>

      <label htmlFor="email">
        Email *
        <input type="text" name="email" id="email" placeholder="email@domain.com" required />
      </label>

      <label htmlFor="phone">
        Phone number *
        <input
          type="tel"
          name="phone"
          id="phone"
          placeholder="Best number we can reach you at"
          required
        />
      </label>

      <label htmlFor="message" className={styles.message}>
        Message *
        <textarea
          type="textarea"
          name="number"
          id="number"
          placeholder="What services you are interested in?"
          required
        />
      </label>

      <label htmlFor="commercial" className={styles.checkbox}>
        Commercial
        <input type="checkbox" id="commercial" name="commercial" />
      </label>
      <label htmlFor="residential" className={styles.checkbox}>
        Residential
        <input type="checkbox" id="residential" name="residential" />
      </label>

      <label htmlFor="submit">
        <input type="submit" name="submit" id="submit" />
      </label>
    </form>
  );
}
