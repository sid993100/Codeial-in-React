import { useEffect } from 'react';

import { getPosts } from '../api';

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
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
