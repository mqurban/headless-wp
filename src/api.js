const BASE_URL = "https://patpongmarket.com/wp-json/wp/v2";

export const fetchPosts = () => 
  fetch(`${BASE_URL}/posts`).then(res => res.json());

export const fetchPost = (id) => 
  fetch(`${BASE_URL}/posts/${id}`).then(res => res.json());

export const fetchSettings = () => 
  fetch(`${BASE_URL}/settings`).then(res => res.json());

export const fetchPages = () => 
  fetch(`${BASE_URL}/pages`).then(res => res.json());