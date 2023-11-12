import { Link as ReactRouterLink } from 'react-router-dom';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/react';

const PostListItem = ({
  posts,
}: {
  posts: { id: number; title: string; description: string }[];
}) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <ChakraLink as={ReactRouterLink} to={`/${post.id}`}>
          {post.title}
        </ChakraLink>
      </li>
    ))}
  </ul>
);

export default PostListItem;
