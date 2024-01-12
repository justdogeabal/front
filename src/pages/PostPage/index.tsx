import { Link } from 'react-router-dom';
import Page from '../../components/Page';

const PostPage = () => {
  return (
    <>
      <Page header={<></>} footer={<></>}>
        <Link to="/"></Link>
        <button>좋아요</button>
      </Page>
    </>
  );
};

export default PostPage;
