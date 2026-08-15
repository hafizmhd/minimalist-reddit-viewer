import { useState } from 'react';
import { NavLink, useParams } from 'react-router';
import subreddits from '../../utils/subreddits';
import './SubredditNav.css';


const SubredditNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { subredditName } = useParams();

  return (
    <>
      {/* Mobile toggle button — shows the active subreddit */}
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(prev => !prev)}
      >
        <span>
          Subreddits: <span className="active-sub">r/{subredditName || 'Home'}</span>
        </span>
        <span className={`toggle-arrow${isOpen ? ' open' : ''}`}>▼</span>
      </button>

      <nav className={`subreddit-nav${isOpen ? ' open' : ''}`}>
        <ul>
          {
            subreddits.map(subreddit => {
              return <li key={subreddit}>
                <NavLink
                  to={`/r/${subreddit}`}
                  className={({ isActive }) => isActive ? 'nav-item active' : 'nav-item'}
                  onClick={() => setIsOpen(false)}
                >
                  {subreddit}
                </NavLink>
              </li>
            })
          }
        </ul>
      </nav>
    </>
  );
}

export default SubredditNav;