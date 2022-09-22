import { Text, Link, Stack, UnorderedList, ListItem } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContentBlock from '../components/ContentBlock';

export default function Home() {
  return (
    <Layout>
      <ContentBlock heading="DECK">
        <Stack>
          <Text>
            DECK is an open-source notebook and knowledge graph that helps individuals, DAOs, and other communities capture,
            organize, make sense of, and share complex information. All notes are encrypted and can only by decrypted by the
            intended audience.
          </Text>
          <Text>
            Individuals can use DECK to take notes, journal, and compile their ideas, thoughts, and research in an interconnected
            context.
          </Text>
          <Text>
            DAOs and other communities can carry out collaborative research, manage projects, and create knowledge bases, FAQs,
            and guides. Access to workspaces can be granted using tokens, NFTs, and blockchain identity as keys.
          </Text>
        </Stack>
        <UnorderedList mt={8}>
          <ListItem>
            <Link isExternal href="https://usedeck.vercel.app">
              usedeck.vercel.app
            </Link>
          </ListItem>
          <ListItem>
            <Link isExternal href="https://github.com/fluidself/deck">
              github.com/fluidself/deck
            </Link>
          </ListItem>
        </UnorderedList>
      </ContentBlock>
      <ContentBlock heading="CONTACT">
        <Text>me@fluidself.org</Text>
      </ContentBlock>
    </Layout>
  );
}
