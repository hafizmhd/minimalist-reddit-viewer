import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchMockSubredditPosts } from "../../api/mockRedditApi";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  searchTerm: '',
};

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit, { rejectWithValue, signal }) => {
    try {
      const data = await fetchMockSubredditPosts(subreddit, signal);

      if (!data?.data?.children) {
        return rejectWithValue(`Subreddit r/${subreddit} not found or has no posts.`);
      }

        return data.data.children.map(child => {
          const { id,
            title,
            author,
            url,
            score,
            created_utc,
            num_comments,
            permalink,
            subreddit,
            selftext,
            thumbnail,
            is_video,
          } = child.data;
          return {
            id,
            title,
            author,
            url,
            score,
            created_utc,
            num_comments,
            permalink,
            subreddit,
            selftext,
            thumbnail,
            is_video,
          };
        });
    } catch (error) {
      if (error.name === 'AbortError') {
        throw error;
      }

      return rejectWithValue(error.message || 'An unexpected error occurred.');
    }
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        // If the request was aborted (e.g. F5 refresh / StrictMode cycle / navigation), ignore it completely
        if (action.meta?.aborted || action.error?.name === 'AbortError') {
          return;
        }
        state.isLoading = false;
        state.error = action.payload || action.error.message;
      });
  }
});

const selectFilteredPosts = createSelector(
  [
    (state) => state.posts.posts,
    (state) => state.posts.searchTerm
  ],
  (posts, searchTerm) => posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
);

const selectIsLoading = (state) => {
  return state.posts.isLoading;
};

const selectError = (state) => {
  return state.posts.error;
};

export const { setSearchTerm } = postsSlice.actions;
export {
  selectFilteredPosts,
  fetchPosts,
  selectError,
  selectIsLoading
};
export default postsSlice.reducer;