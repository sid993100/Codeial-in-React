import { useEffect } from 'react';

import { getPosts } from '../api';
import { Home } from '../pages';

function App() {
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
