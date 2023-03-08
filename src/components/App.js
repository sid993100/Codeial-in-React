import { useEffect, useState } from 'react';

import { getPosts } from '../api';
import { Home } from '../pages';
import Loader from './Loader';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await getPosts();
      // console.log('response', response);
      if(response.success){
        setPosts(response.data.posts);
      }

      setLoading(false);
    };

    //call fetch post
    fetchPost();
  }, []);

  if(loading){
    return <Loader />
  }

  return (
    <div className="App">
      <Home posts={posts}/>
    </div>
  );
}

export default App;
