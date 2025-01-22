import { useEffect, useState } from "react";
import axios from "axios";

const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
       axios
      .get("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>This is page ment for user effect with api</h1>
      <h3>the content inside my json placeholder api post are</h3>
      <ul style={{margin:"50px",listStyleType:"decimal"}}>
        {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};
export default UseEffectAPI;
