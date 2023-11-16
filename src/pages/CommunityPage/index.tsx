import { posts } from '../../api/post';
import Page from '../../components/Page';
import PostListItem from '../../components/PostListItem';

const CoummunityPage = () => (
  <>
    <Page header={<h3>커뮤니티</h3>} footer={<></>}>
      <PostListItem posts={posts} />
    </Page>
  </>
);

export default CoummunityPage;
