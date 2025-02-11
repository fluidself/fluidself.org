import { Container } from '@chakra-ui/react';
import Header from './Header';

function Layout({ children, isRoot }) {
  return (
    <Container maxWidth="container.lg" p={0}>
      <Header isRoot={isRoot} />
      {children}
    </Container>
  );
}

export default Layout;
