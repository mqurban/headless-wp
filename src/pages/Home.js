import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://qurban.ct.ws/wp-json/wp/v2/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border-b py-2">
            <Link to={`/post/${post.id}`} className="text-blue-500 hover:underline">
              {post.title.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
