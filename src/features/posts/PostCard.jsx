import timeAgo from '../../utils/timeAgo';
import { Link } from 'react-router';

const PostCard = (props) => {
  const { post } = props;
  return (
    <div className="post-card">
      <div className="post-title-thumbnail">
        <h3>{post.title}</h3>
        <img src={post.thumbnail} />
      </div>
      <div className="post-score">
        <p>{post.score}</p>
      </div>
      <div className="post-data">
        <p>{`u/${post.author}`}</p>
        <p>{timeAgo(post.created_utc)}</p>
        <Link to={post.permalink}>💬 {post.num_comments}</Link>
      </div>
    </div>
  )
}

export default PostCard;