import React, { useState, useEffect } from 'react';
import '../styles/Feed.css'; // Import a CSS file for styling (create this file)

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Simulate fetching posts from a data source (replace with your data fetching logic)
    setTimeout(() => {
      const fetchedPosts = [
        {
          id: 1,
          author: {
            username: 'john_doe',
            displayName: 'John Doe',
            avatar: '/avatars/john.jpg',
          },
          content: 'Enjoying a beautiful day at the beach! ☀️🏖️',
          timestamp: '2 hours ago',
          likes: 25,
          comments: 8,
        },
        {
          id: 2,
          author: {
            username: 'tony_danza',
            displayName: 'Tony Danza',
            avatar: '/avatars/tony.jpg',
          },
          content: 'This is a sample post!  I had no idea it was so hard to make a social media site.  So now I have to pay reparations.',
          timestamp: '1 hour ago',
          likes: 42,
          comments: 12,
        },
        {
          id: 3,
          author: {
            username: 'lisa_green',
            displayName: 'Lisa Green',
            avatar: '/avatars/lisa.jpg',
          },
          content: 'Exploring new hiking trails this weekend. Nature is amazing! 🌲🌿',
          timestamp: '30 minutes ago',
          likes: 18,
          comments: 5,
        },
        // Add more fetched posts as needed
      ];
      setPosts(fetchedPosts);
    }, 1000); // Simulated delay for fetching data
  }, []);

  return (
    <div className="homepage">
      <header className="header">
        {/* Header content goes here */}
      </header>
      <div className="feed">
        <h2 className="feed-heading">Feed</h2>
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-author">
              <img src={post.author.avatar} alt={`${post.author.displayName}'s avatar`} />
              <span className="author-username">{post.author.username}</span>
            </div>
            <p className="post-content">{post.content}</p>
            <div className="post-actions">
              <span className="timestamp">{post.timestamp}</span>
              <button className="like-button">
                <span role="img" aria-label="Like">❤️</span> {post.likes}
              </button>
              <button className="comment-button">
                <span role="img" aria-label="Comment">💬</span> {post.comments}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;