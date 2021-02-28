import Head from 'next/head';

const Helmet = ({ title, description, image, imageDescription, url }) => {
  const siteName = "Disc 'n Dat Custom Electronics";

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />

      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:url" content={`https://discndat.co/${url}`} key="ogurl" />
      <meta
        property="og:image"
        content={image ? image : 'https://i.imgur.com/db2U35V.jpg'}
        key="ogimage"
      />
      <meta
        property="og:image:alt"
        content={imageDescription ? imageDescription : "Disc 'n Dat logo."}
      />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={title ? title : siteName} key="ogtitle" />
      <meta
        property="og:description"
        content={
          description
            ? description
            : 'Audio Video System Installation and Solution: Disc N Dat provides top quality home electronics & other a/v equipments from best manufacturers. Call (519) 972-1555.'
        }
        key="ogdesc"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
    </Head>
  );
};

export default Helmet;
