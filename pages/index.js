import { Text, Link, Stack, UnorderedList, ListItem, Heading } from '@chakra-ui/react';
import Layout from '../components/Layout';
import ContentBlock from '../components/ContentBlock';

export default function Home() {
  return (
    <Layout isRoot>
      <ContentBlock heading="PROJECTS">
        <Stack>
          <Heading size="lg">Dunlin</Heading>
          <Text>
            Dunlin is an open source notebook and knowledge graph that helps individuals, DAOs, and other communities
            capture, organize, make sense of, and share complex information. All notes are encrypted and can only by
            decrypted by the intended audience.
          </Text>
          <Text>
            Individuals can use Dunlin to take notes, journal, and compile their ideas, thoughts, and research in an
            interconnected context.
          </Text>
          <Text>
            DAOs and other communities can manage projects, carry out collaborative research, and create knowledge
            bases, FAQs, and guides. Access to workspaces can be granted using tokens, NFTs, and blockchain identity as
            keys.
          </Text>
        </Stack>
        <UnorderedList mt={8} spacing={1.5}>
          <ListItem>
            <Link isExternal href="https://dunlin.xyz">
              dunlin.xyz
            </Link>
          </ListItem>
          <ListItem>
            <Link isExternal href="https://github.com/fluidself/dunlin">
              github.com/fluidself/dunlin
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
