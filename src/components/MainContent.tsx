import Search from "./Search";
import List from "./List";

export default function MainContent() {
  return (
    <div className="col">
      <div>
        <Search />
      </div>
      <div>
        <List />
      </div>
    </div>
  );
}
