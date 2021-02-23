import Head from "next/head"; // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import Layout from "../components/layout";

import styles from "./brands.module.scss";

export default function Brands() {
  return (
    <Layout>
      <section className={styles.main}>
        <h1>Brands</h1>
      </section>
    </Layout>
  );
}
