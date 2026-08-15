// Realistic Reddit Mock Data Engine
// Mimics the exact Reddit JSON API Listing format

const mockThumbnails = {
  gaming: [
    'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=800&auto=format&fit=crop&q=80',
  ],
  pics: [
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1511497584788-87676104235f?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&auto=format&fit=crop&q=80',
  ],
  movies: [
    'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&auto=format&fit=crop&q=80',
  ],
  technology: [
    'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop&q=80',
  ],
};

const subredditPostTemplates = {
  AskReddit: [
    {
      title: "What's a life lesson you learned the hard way that everyone should know?",
      author: "CuriousPhilosopher",
      score: 18450,
      num_comments: 3420,
      selftext: "Looking for wisdom that people usually only realize after making big mistakes.",
      thumbnail: "self",
      hoursAgo: 3,
    },
    {
      title: "What is an unspoken social rule that too many people break daily?",
      author: "EtiquetteMaster",
      score: 29800,
      num_comments: 5120,
      selftext: "Let people get off the elevator or train before you try to push your way in!",
      thumbnail: "self",
      hoursAgo: 7,
    },
    {
      title: "What is the best $50 you have ever spent in your entire life?",
      author: "BudgetGenius",
      score: 14200,
      num_comments: 2190,
      selftext: "A quality memory foam pillow changed my life completely.",
      thumbnail: "self",
      hoursAgo: 12,
    },
    {
      title: "What website or app feels like a cheat code for life?",
      author: "WebExplorer",
      score: 36700,
      num_comments: 4800,
      selftext: "Could be for productivity, learning new skills, or saving money.",
      thumbnail: "self",
      hoursAgo: 18,
    },
    {
      title: "What is a fact that sounds 100% fake but is completely true?",
      author: "FactChecker99",
      score: 22100,
      num_comments: 1870,
      selftext: "Oxford University is older than the Aztec Empire.",
      thumbnail: "self",
      hoursAgo: 24,
    }
  ],
  gaming: [
    {
      title: "After 120 hours, I finally 100% completed this masterpiece. What game gave you this feeling?",
      author: "PixelKnight",
      score: 15300,
      num_comments: 1240,
      selftext: "The ending credits hit so hard. Gaming truly is an art form.",
      thumbnail: mockThumbnails.gaming[0],
      hoursAgo: 2,
    },
    {
      title: "What is an older video game that still holds up visually and mechanically today?",
      author: "RetroGamer88",
      score: 21400,
      num_comments: 3100,
      selftext: "Portal 2 and BioShock still look and play phenomenally well.",
      thumbnail: mockThumbnails.gaming[1],
      hoursAgo: 6,
    },
    {
      title: "PSA: Remember to take breaks and stay hydrated during long gaming sessions!",
      author: "HealthFirstGamer",
      score: 8900,
      num_comments: 320,
      selftext: "Your wrists and back will thank you in 10 years.",
      thumbnail: "self",
      hoursAgo: 9,
    },
    {
      title: "The soundtrack to this boss fight is an absolute orchestral masterpiece",
      author: "VGM_Enthusiast",
      score: 17800,
      num_comments: 890,
      selftext: "Which game soundtrack gives you goosebumps every time?",
      thumbnail: mockThumbnails.gaming[2],
      hoursAgo: 15,
    }
  ],
  pics: [
    {
      title: "Morning mist settling over the valley during sunrise in the Swiss Alps [OC] [4000x3000]",
      author: "AlpinePhotographer",
      score: 41200,
      num_comments: 980,
      selftext: "",
      thumbnail: mockThumbnails.pics[0],
      hoursAgo: 4,
    },
    {
      title: "A calm autumn afternoon walking through the Kyoto bamboo forest",
      author: "WanderlustSoul",
      score: 28900,
      num_comments: 650,
      selftext: "",
      thumbnail: mockThumbnails.pics[1],
      hoursAgo: 8,
    },
    {
      title: "Golden hour reflection in a mountain lake after a summer thunderstorm",
      author: "NatureFocus",
      score: 34500,
      num_comments: 720,
      selftext: "",
      thumbnail: mockThumbnails.pics[2],
      hoursAgo: 14,
    }
  ],
  movies: [
    {
      title: "What movie has a plot twist that you genuinely never saw coming?",
      author: "CinemaBuff",
      score: 19800,
      num_comments: 2450,
      selftext: "Please remember to use spoiler tags in your comments!",
      thumbnail: mockThumbnails.movies[0],
      hoursAgo: 5,
    },
    {
      title: "Appreciation post for practical effects in 80s and 90s cinema that still outshine modern CGI",
      author: "PracticalFXFan",
      score: 16400,
      num_comments: 1120,
      selftext: "The Thing (1982) and Jurassic Park (1993) are top-tier examples.",
      thumbnail: mockThumbnails.movies[1],
      hoursAgo: 11,
    }
  ],
  google_antigravity: [
    {
      title: "Welcome to google_antigravity! Exploring modern full-stack web architectures",
      author: "DevLead",
      score: 1337,
      num_comments: 128,
      selftext: "A space for discussing high-performance React 19 apps, Redux state management, and modern web tooling.",
      thumbnail: mockThumbnails.technology[0],
      hoursAgo: 1,
    },
    {
      title: "Best practices for client-side state caching and responsive UI design",
      author: "FrontendNinja",
      score: 840,
      num_comments: 64,
      selftext: "How do you structure selectors and optimistic UI updates in large scale web applications?",
      thumbnail: mockThumbnails.technology[1],
      hoursAgo: 5,
    }
  ]
};

// Generic post generator for any other subreddit
function generateSubredditPosts(subreddit) {
  const now = Date.now() / 1000;
  const templates = subredditPostTemplates[subreddit];

  if (templates) {
    return templates.map((tmpl, index) => ({
      id: `${subreddit.toLowerCase()}_${index + 1}`,
      title: tmpl.title,
      author: tmpl.author,
      score: tmpl.score,
      created_utc: now - tmpl.hoursAgo * 3600,
      num_comments: tmpl.num_comments,
      permalink: `/r/${subreddit}/comments/${subreddit.toLowerCase()}_${index + 1}`,
      subreddit: subreddit,
      selftext: tmpl.selftext,
      thumbnail: tmpl.thumbnail,
      is_video: false,
      url: `https://www.reddit.com/r/${subreddit}/comments/${subreddit.toLowerCase()}_${index + 1}`,
    }));
  }

  // Fallback realistic posts for other subreddits
  const titles = [
    `Top discussion and news in r/${subreddit} this week`,
    `What are your favorite recommendations and hidden gems in r/${subreddit}?`,
    `Comprehensive guide and FAQ for beginners joining r/${subreddit}`,
    `Interesting community project showcase and updates`,
    `Monthly question & answer thread for all members of r/${subreddit}`,
    `What is the most underrated aspect of r/${subreddit}?`,
  ];

  return titles.map((title, index) => ({
    id: `${subreddit.toLowerCase()}_${index + 1}`,
    title: title,
    author: `redditor_${index + 101}`,
    score: Math.floor(1000 + Math.random() * 15000),
    created_utc: now - (index * 4 + 1) * 3600,
    num_comments: Math.floor(50 + Math.random() * 1200),
    permalink: `/r/${subreddit}/comments/${subreddit.toLowerCase()}_${index + 1}`,
    subreddit: subreddit,
    selftext: `Welcome to the discussion thread for r/${subreddit}. Share your thoughts, ask questions, and connect with the community!`,
    thumbnail: index % 2 === 0 ? mockThumbnails.gaming[index % 3] : 'self',
    is_video: false,
    url: `https://www.reddit.com/r/${subreddit}/comments/${subreddit.toLowerCase()}_${index + 1}`,
  }));
}

// Sample comments for PostDetailPage
const mockComments = [
  {
    id: 'c1',
    author: 'TopCommenter',
    score: 3420,
    created_utc: Date.now() / 1000 - 7200,
    body: 'This is honestly one of the best explanations I have read on this topic. Thanks for sharing!',
  },
  {
    id: 'c2',
    author: 'CodeEnthusiast',
    score: 1850,
    created_utc: Date.now() / 1000 - 10800,
    body: 'Completely agree with this. I had a very similar experience when I first started out.',
  },
  {
    id: 'c3',
    author: 'CuriousMind',
    score: 920,
    created_utc: Date.now() / 1000 - 14400,
    body: 'Great point! Could you elaborate more on how this applies to larger projects?',
  },
];

export async function fetchMockSubredditPosts(subreddit, signal) {
  // Simulate network delay (200ms) with abort support
  await new Promise((resolve, reject) => {
    const timer = setTimeout(resolve, 200);
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timer);
        const err = new Error('Aborted');
        err.name = 'AbortError';
        reject(err);
      });
    }
  });

  const posts = generateSubredditPosts(subreddit);

  // Return standard Reddit JSON listing envelope
  return {
    kind: 'Listing',
    data: {
      children: posts.map(post => ({
        kind: 't3',
        data: post,
      }))
    }
  };
}

export async function fetchMockPostDetails(subreddit, postId) {
  await new Promise(resolve => setTimeout(resolve, 200));
  const posts = generateSubredditPosts(subreddit);
  const post = posts.find(p => p.id === postId) || posts[0];

  return {
    post,
    comments: mockComments,
  };
}
