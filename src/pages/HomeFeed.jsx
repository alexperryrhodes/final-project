import NavBar from "../components/NavBar";
import Post from "../components/Post";
import SortButton from "../components/SortButton";

export default function HomeFeed() {
  return (
    <div>
      <p>HomeFeed</p>
      <NavBar />
      <SortButton />
      <Post />
    </div>
  );
}
