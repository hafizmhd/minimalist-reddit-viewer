const timeAgo = (utcSeconds) => {
  const now = Date.now() / 1000; // Convert to second
  const diff = now - utcSeconds;


  if (diff < 60) {
    return 'just now';
  } else if (diff < 3600) {
    return `${Math.floor(diff / 60)} minutes ago`;
  } else if (diff < 86400) {
    return `${Math.floor(diff / 3600)} hours ago`;
  } else if (diff < 604800) {
    return `${Math.floor(diff / 86400)} days ago`;
  } else if (diff < 2592000) {
    return `${Math.floor(diff / 604800)} weeks ago`;
  } else if (diff < 31536000) {
    return `${Math.floor(diff / 2592000)} months ago`;
  } else {
    return `${Math.floor(diff / 31536000)} years ago`;
  }
}

export default timeAgo;