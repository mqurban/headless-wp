import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Spinner } from 'react-bootstrap';
import { fetchPost } from '../api';

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(id)
      .then(data => setPost(data))
      .catch(err => console.error("Error fetching post:", err));
  }, [id]);

  if (!post) return (
    <Container className="d-flex justify-content-center p-5">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </Container>
  );

  return (
    <Container>
      <h1 className="mb-4">{post.title.rendered}</h1>
      <div className="post-content" dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </Container>
  );
};

export default SinglePost;
