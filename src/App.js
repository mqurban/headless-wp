import React, { useEffect, useState } from "react";
import { Container, Typography, Card, CardContent, Skeleton, Box } from "@mui/material";

const PostSkeleton = () => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Skeleton animation="wave" height={40} width="60%" sx={{ mb: 2 }} />
      <Skeleton animation="wave" height={20} sx={{ mb: 1 }} />
      <Skeleton animation="wave" height={20} sx={{ mb: 1 }} />
      <Skeleton animation="wave" height={20} width="80%" />
    </CardContent>
  </Card>
);

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://patpongmarket.com/wp-json/wp/v2/posts", {
      headers: {
        'Content-Type': 'application/json'
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
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 4 }}>
        Latest Posts
      </Typography>
      
      {error ? (
        <Typography color="error" variant="body1">{error}</Typography>
      ) : posts.length === 0 ? (
        <Box>
          <PostSkeleton />
          <PostSkeleton />
          <PostSkeleton />
        </Box>
      ) : (
        posts.map((post) => (
          <Card key={post.id} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title.rendered}
              </Typography>
              <Typography
                variant="body1"
                component="div"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </CardContent>
          </Card>
        ))
      )}
    </Container>
  );
}

export default App;
