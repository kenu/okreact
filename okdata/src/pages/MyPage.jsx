import { Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

function MyPage() {
  const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    // axios.get(baseURL).then((response) => {
    //   setPost(response.data);
    // })
    // .catch((error)=>{
    //   console.error(error)
    // });
    async function doIt() {
      try {
        const response = await axios.get(baseURL);
        setPost(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    doIt();

  }, []);

  if (!post) return null;

  return (
    <div className="App">
      <h1>My Page</h1>
      <Link to="/">Home</Link> |
      <Link to="/mypage">My Page</Link> |
      <Link to="/ajaxtest">Ajax Test</Link>
      <br />
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default MyPage;
