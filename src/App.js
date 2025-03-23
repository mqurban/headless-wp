import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const credentials = btoa('admin:wyHe rfYd 6nNn ASX1 jnmf T5An');
    
    fetch("https://3dtailorplugin.com/wp-json/wp/v2/posts", {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Authorization': `Basic ${credentials}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Origin': 'https://headless-wp-pearl.vercel.app'
      }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setPosts(data);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setError("Failed to load posts. Please try again later.");
      });
  }, []);

  return (
    <div>
      <h1>Latest Posts</h1>
      {error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
          </div>
        ))
      )}
    </div>
  );
}

export default App;
