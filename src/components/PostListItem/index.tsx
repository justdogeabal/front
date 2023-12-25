import { PostListContainer, PostListRanking, PostListWrapper } from './styles';
import '../../App.css';
import { getAladinBestsellers } from '../../api/bestsellers';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Skeleton from '@mui/material/Skeleton';

const PostListItem = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ['Abesetseller'],
    queryFn: getAladinBestsellers,
  });

  console.log(data.item);

  return (
    <div>
      {isLoading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <PostListContainer>
          <PostListWrapper>
            {data.item.map((index: number) => (
              <img
                key={''}
                className="post-list-item"
                src={''}
                alt={`Item ${index + 1}`}
              />
            ))}
            <PostListRanking />
          </PostListWrapper>
        </PostListContainer>
      )}
    </div>
  );
};

export default PostListItem;
