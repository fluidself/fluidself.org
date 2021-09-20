// import NextLink from 'next/link';
import Script from 'next/script';
import { Text, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContentBlock from '../components/ContentBlock';

export default function Home() {
  return (
    <>
      <Layout>
        <ContentBlock heading="CONTACT">
          <Text>me@fluidself.org</Text>
          <Link textDecoration="underline" href="https://github.com/fluidself">
            github.com/fluidself
          </Link>
        </ContentBlock>
      </Layout>
      <Script src="https://www.googletagmanager.com/gtag/js?id=UA-92834152-1" />
      <Script>
        {`window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'UA-92834152-1');`}
      </Script>
    </>
  );
}
