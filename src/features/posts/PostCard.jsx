import timeAgo from '../../utils/timeAgo';
import { Link } from 'react-router';
import './PostCard.css';

const PostCard = (props) => {
  const { post } = props;
  const hasValidThumbnail = Boolean(
    post.thumbnail && post.thumbnail.startsWith('http')
  );

  return (
    <article className="post-card">
      <div className="post-header">
        <h3 className="post-title">{post.title}</h3>
      </div>

      {hasValidThumbnail && (
        <div className="post-image-container">
          <img
            src={post.thumbnail}
            alt={post.title}
            loading="lazy"
            className="post-image"
          />
        </div>
      )}

      {post.selftext && !hasValidThumbnail && (
        <p className="post-selftext">{post.selftext}</p>
      )}

      <div className="post-footer">
        <span className="post-score">▲ {post.score.toLocaleString()}</span>
        <span className="post-author">u/{post.author}</span>
        <span className="post-time">{timeAgo(post.created_utc)}</span>
        <Link 
          to={`/r/${post.subreddit}/comments/${post.id}`}
          className="post-comments-link"
        >
          💬 {post.num_comments.toLocaleString()}
        </Link>
      </div>
    </article>
  );
};

export default PostCard;