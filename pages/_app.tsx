import { CONFIG } from "@libs/config";
import { pageview } from "@libs/ga";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { useEffect } from "react";
import Favicon from "@assets/icon.svg";
import Script from "next/script";
import Head from "next/head";
// custom style
import "@styles/custom_style.css";
import "@styles/grid.scss";
import "@styles/utilities.scss";
import '@styles/spacing.css';
import '@styles/shortcodes.css';
// main style
import "@styles/base.css";
// import "tippy.js/dist/tippy.css";
import "@styles/style.css";

const App = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{CONFIG.SEO.title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href={Favicon} />
        <link rel="canonical" href={CONFIG.SEO.publishDomain} />
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="copyright"
          content="Berkant GÜNAYDIN, berkant@slipyme.com"
        />
        <meta name="theme-color" content={CONFIG.SEO.themeColor} />
        <meta name="author" content="Berkant GÜNAYDIN, berkant@slipyme.com" />
        <meta name="keywords" content={CONFIG.SEO.keywords.join(",")} />
        <meta name="description" content={CONFIG.SEO.description} />
        <meta property="og:title" content={CONFIG.SEO.title} />
        <meta property="og:description" content={CONFIG.SEO.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={CONFIG.SEO.publishDomain} />
        <meta property="og:site_name" content={CONFIG.SEO.title} />
        <meta property="og:image" content={Favicon} />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:locale:alternate" content="tr_TR" />
        <meta property="twitter:url" content={CONFIG.SEO.publishDomain} />
        <meta property="twitter:title" content={CONFIG.SEO.title} />
        <meta property="twitter:description" content={CONFIG.SEO.description} />
        <meta property="twitter:image" content={Favicon} />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <meta property="twitter:card" content={Favicon} />
      </Head>
      <div >
        <Script
          strategy="afterInteractive"
          data-domain={CONFIG.SEO.publishDomain.replace("https://", "")}
          src="https://plausible.io/js/plausible.js"
        />
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.GA_TRACKING_ID}`}
        />
        <Script
          data-ad-client="ca-pub-1698890000300860"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></Script>
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
							window.dataLayer = window.dataLayer || [];
							function gtag() {
								dataLayer.push(arguments);
							}
							gtag("js", new Date());
							gtag("config", "${CONFIG.GA_TRACKING_ID}", {
								page_path: window.location.pathname,
							});
						`,
          }}
        />
        <Script src="https://cdn.polyfill.io/v3/polyfill.min.js" />
        <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />
        <DefaultSeo titleTemplate={CONFIG.SEO.layoutTitle} />
        <Component {...pageProps} />
        <ToastContainer position="bottom-right" />
      </div>
    </>
  );
};

export default App;
