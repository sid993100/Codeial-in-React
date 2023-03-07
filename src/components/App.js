import { useEffect, useState } from 'react';

import { getPosts } from '../api';
import { Home } from '../pages';
import Loader from './Loader';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPosts();
      console.log('response', response);
    };

    //call fetch post
    fetchPost();
  }, []);

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
