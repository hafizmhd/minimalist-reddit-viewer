import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router';

import HomePage from './pages/HomePage';
import PostDetailPage from './pages/PostDetailPage';

import subreddits from './utils/subreddits';
import AppLayout from './pages/AppLayout';
const randomSub = subreddits[Math.floor(Math.random() * subreddits.length)];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Navigate to={`/r/${randomSub}`} replace />} />
          <Route path="/r/:subredditName" element={<HomePage />} />
          <Route path="/r/:subredditName/comments/:postId" element={<PostDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
