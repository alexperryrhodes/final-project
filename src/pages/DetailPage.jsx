import NavBar from "../components/NavBar";
import PostDetails from "../components/PostDetails";
import { useParams } from "react-router-dom";

export default function DetailPage( {data}) {

  const { id } = useParams();
  const details = data.filter((item) => String(item.id) === id)[0];

  console.log("id", id)
  console.log("data", data)
  console.log("details", details)
  
  return (
    <div>
      <NavBar />
      <PostDetails details={details} />
    </div>
  );
}
