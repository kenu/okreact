import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Main</h1>
      <Link to="/mypage">My Page</Link> |
      <Link to="/ajaxtest">Ajax Test</Link>
    </div>
  );
}

export default App;
