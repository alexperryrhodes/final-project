import { useState, useEffect } from "react";
import { useRoutes, Link } from "react-router-dom";
import './App.css'
import HomeFeed from './pages/HomeFeed'
import CreatePost from './pages/CreatePost'
import DetailPage from './pages/DetailPage'
import UpdatePost from './pages/UpdatePost'
import { supabase } from "./client";

function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      console.log("fetch")
      const { data } = await supabase
        .from("posts")
        .select()
        .order("created_at", { ascending: true });

      setPosts(data);
    };

    fetchPosts();
  }, []);
  

  let element = useRoutes([
    {
      path: "/",
      element: <HomeFeed data={posts} />,
    },
    {
      path: "/:id/edit/:id",
      element: <UpdatePost data={posts} />,
    },
    {
      path: "/:id",
      element: <DetailPage data={posts} />,
    },
    {
      path: "/create",
      element: <CreatePost />,
    },
  
  ]);

  
  return (
    <div className="App">
      <h1>Sewing Central</h1>
      {element}
    </div>
  )
}

export default App;