import { PostListContainer, PostListRanking, PostListWrapper } from './styles';
import { getAladinBestsellers } from '../../api/bestsellers';
import { useQuery } from '@tanstack/react-query';
import Skeleton from '@mui/material/Skeleton';
import '../../App.css';

const PostListItem = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['Abesetseller'],
    queryFn: getAladinBestsellers,
  });

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="rectangular" width={150} height={200} />
      ) : (
        <PostListContainer>
          <PostListWrapper>
            {data.item.map(
              (item: { itemId: number; cover: string; title: string }) => (
                <img key={item.itemId} src={item.cover} alt={item.title} />
              ),
            )}
            <PostListRanking />
          </PostListWrapper>
        </PostListContainer>
      )}
    </div>
  );
};

export default PostListItem;
