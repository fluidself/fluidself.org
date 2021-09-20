import { Container } from '@chakra-ui/react';
import Header from './Header';

function Layout({ children }) {
  return (
    <Container maxWidth="container.lg" p={0}>
      <Header />
      {children}
    </Container>
  );
}

export default Layout;
