import { Text, Link } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContentBlock from '../components/ContentBlock';

export default function Home() {
  return (
    <Layout>
      <ContentBlock heading="CONTACT">
        <Text>me@fluidself.org</Text>
        <Link textDecoration="underline" isExternal href="https://github.com/fluidself">
          github.com/fluidself
        </Link>
      </ContentBlock>
    </Layout>
  );
}
