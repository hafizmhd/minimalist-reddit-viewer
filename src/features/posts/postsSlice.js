import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
  searchTerm: '',
};

const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit) => {
    const response = await fetch(`https://www.reddit.com/r/${subreddit}.json?limit=25`);
    const data = await response.json();
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
  }
);

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      return {
        ...state,
        searchTerm: action.payload,
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        return {
          ...state,
          isLoading: true,
          error: null,
        }
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          posts: action.payload,
        }
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        return {
          ...state,
          isLoading: false,
          error: action.error.message,
        }
      });
  }
});

const selectFilteredPosts = createSelector(
  (state) => state.posts.posts,
  (state) => state.posts.searchTerm,
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