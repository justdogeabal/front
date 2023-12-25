import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/Header';
import HeadingText from './components/HeadingText';
import PostListItem from './components/PostListItem';

const queryClient = new QueryClient();

const App = () => (
  <>
    <QueryClientProvider client={queryClient}>
      <Header />
      <HeadingText>베스트셀러</HeadingText>
      <PostListItem />
    </QueryClientProvider>
  </>
);

export default App;
