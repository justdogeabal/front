import { PostListContainer, PostListRanking, PostListWrapper } from './styles';
import '../../App.css';
import { loadBestSellerListFromA } from '../../api/bestsellers';

const PostListItem = () => {
  loadBestSellerListFromA();
  return (
    <PostListContainer>
      <PostListWrapper>
        <img
          className="post-list-item"
          src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
        />
        <PostListRanking />
        <img
          className="post-list-item"
          src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
        />
        <img
          className="post-list-item"
          src="https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg"
        />
      </PostListWrapper>
    </PostListContainer>
  );
};

export default PostListItem;
