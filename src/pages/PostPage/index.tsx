import { Link } from 'react-router-dom';
import Page from '../../components/Page';

const PostPage = () => {
  return (
    <>
      <Page header={<></>} footer={<></>}>
        <Link to="/">1번</Link>
        <button>좋아요</button>
      </Page>
    </>
  );
};

export default PostPage;
