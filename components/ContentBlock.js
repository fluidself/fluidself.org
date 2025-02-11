import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Heading, Stack } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

export default function ContentBlock({ heading, children, category, slug }) {
  return (
    <>
      {category ? (
        <Breadcrumb fontSize="sm" px={3} mb={2} separator={<ChevronRightIcon />}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/books">books</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            {!slug ? <span>{category}</span> : <BreadcrumbLink href={`/books/${category}`}>{category}</BreadcrumbLink>}
          </BreadcrumbItem>
          {slug ? (
            <BreadcrumbItem>
              <span>{slug}</span>
            </BreadcrumbItem>
          ) : null}
        </Breadcrumb>
      ) : null}
      <Stack border="solid" borderWidth={[2, 3, 3]} paddingBottom={2} marginBottom={5} mx={[0.5, 2, 0]}>
        <Heading borderBottom="solid" borderBottomWidth={[2, 3, 3]} px={3} py={1}>
          {heading}
        </Heading>
        <Box px={3}>{children}</Box>
      </Stack>
    </>
  );
}
