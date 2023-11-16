import { Link, useLocation } from 'react-router-dom';

const PostListItem = ({
  posts,
}: {
  posts: { id: number; title: string; description: string }[];
}) => {
  const location = useLocation();
  const post = location.state.post;
  console.log(post);
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={`/${post.id}`}>{post.title}</Link>
          <div></div>
        </li>
      ))}
    </ul>
  );
};

export default PostListItem;
