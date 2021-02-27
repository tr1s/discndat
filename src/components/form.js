import styles from './form.module.scss';

export default function Form() {
  return (
    <form
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
        <input type="text" name="name" id="name" />
      </label>

      <label htmlFor="email">
        Email *
        <input type="text" name="email" id="email" />
      </label>

      <label htmlFor="number">
        Phone number *
        <input type="number" name="number" id="number" />
      </label>

      <label htmlFor="message" className={styles.message}>
        Message *
        <textarea
          type="textarea"
          name="number"
          id="number"
          placeholder="What services you are interested in...?"
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
