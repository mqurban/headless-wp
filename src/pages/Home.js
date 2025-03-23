import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, ListGroup } from 'react-bootstrap';
import { fetchPosts } from '../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then(data => setPosts(data))
      .catch(err => console.error("Error fetching posts:", err));
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Latest Posts</h1>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>
            <Link to={`/post/${post.id}`} className="text-decoration-none">
              {post.title.rendered}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Home;
