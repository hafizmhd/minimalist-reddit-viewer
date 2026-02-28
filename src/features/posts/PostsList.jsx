import { useSelector } from "react-redux";
import { selectFilteredPosts } from "./postsSlice";
import PostCard from "./PostCard";

const PostsList = () => {
  const posts = useSelector(selectFilteredPosts);

  if (posts.length === 0) {
    return <p>No post to display</p>
  } else {
    return (
      <div>
        <ul>
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <PostCard post={post} />
              </li>
            );
          })}
        </ul>
      </div>
    )
  }
};

export default PostsList;