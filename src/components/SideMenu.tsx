import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type MenuProps = {
  id: number;
  title: string;
  url: string;
};

export default function SideMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const api = async () => {
      const data = await fetch("/menu.json", {
        method: "GET",
      });
      const jsonData = await data.json();
      setMenu(jsonData.data);
    };

    api();
  }, []);

  return (
    <div className="col-2">
      {menu &&
        menu.map((value: MenuProps) => {
          return (
            <p key={value.id}>
              <Link to={value.url} className="side-menu">
                {value.title}
              </Link>
            </p>
          );
        })}
    </div>
  );
}
