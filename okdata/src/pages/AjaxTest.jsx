import { Link } from 'react-router-dom';
import React from 'react';
import AjaxUtils from '../utils/AjaxUtils'

function AjaxTest() {
  async function getData() {
    const data = await AjaxUtils.ajaxPost()
    setPost(data);
  }

  const [post, setPost] = React.useState({});
  React.useEffect(() => {
    (async function () {
      const data = await AjaxUtils.ajaxGet();
      setPost(data);
    })();
  }, [1]);

  return (
    <>
      <h1>Ajax Test</h1>
      <Link to="/">Home</Link> | <Link to="/mypage">My Page</Link> |
      <Link to="/ajaxtest">Ajax Test</Link>
      <hr />
      message: <span>{post.message}</span>
      <hr />
      <input type="name" id="name" />
      <button onClick={getData}>send</button>
    </>
  );
}

export default AjaxTest;
