import { useState, useEffect } from 'react'
import './App.css';
import getData from './Services/getData'
import Poster from './Components/Poster'

function App() {

  const [posts, setPosts] = useState([])

  console.log(posts)
  useEffect(() => {
    getData().then((data) => setPosts(data))
  }, [])

  return (
    <div className="App2">
      <div className="box">
        {posts.map((data) =><Poster
          id={data._id.toString()}
          title={data.title}
          content={data.content}
        ></Poster>) }
      </div>
    </div>
    /* {<div className="App">
      {posts.map(data=><div><p>{data.title}</p><img alt="" src={`http://localhost:5000/images/${data._id.toString()}.jpg`}/></div>)}
    </div>} */
  );
}

export default App;
