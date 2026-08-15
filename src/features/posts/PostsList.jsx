import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import PostCard from "./PostCard";
import { useSearchParams } from "react-router";

const PostsList = () => {
  const rawPosts = useSelector(selectPosts);
  const [searchParams] = useSearchParams();

  const query = (searchParams.get('q') || '').toLowerCase();

  const posts = query
    ? rawPosts.filter(post => post.title.toLowerCase().includes(query))
    : rawPosts;

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