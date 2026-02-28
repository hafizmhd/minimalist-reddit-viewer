import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchPosts, selectError, selectIsLoading } from "../features/posts/postsSlice";
import PostsList from "../features/posts/PostsList";


const HomePage = () => {
  const { subredditName } = useParams();
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    // Fetch data from reddit API everytime subredditName changes.
    dispatch(fetchPosts(subredditName));
  }, [subredditName, dispatch]);

  if (isLoading) {
    return <p>Posts is loading...</p>
  } else if (error) {
    return <p>Failed fetching the data</p>
  } else {
    return (
      <div>
        <h1>Home Page</h1>
        <PostsList />
      </div>
    );
  }
};

export default HomePage;