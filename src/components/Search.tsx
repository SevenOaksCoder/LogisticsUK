import { ChangeEvent } from "react";

export default function Search() {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    let uls = document.getElementsByTagName("ul");
    for (let i = 0; i < uls.length; i++) {
      uls[i].style.display = "none";
    }

    for (let i = 0; i < uls.length; i++) {
      let name = uls[i].querySelector("li.name")?.innerHTML.toLocaleLowerCase();
      let reg = uls[i].querySelector("li.reg")?.innerHTML.toLocaleLowerCase();

      if (
        name?.includes(inputValue.toLocaleLowerCase()) ||
        reg?.includes(inputValue.toLocaleLowerCase())
      ) {
        uls[i].style.display = "flex";
      } else {
        uls[i].style.display = "none";
      }
    }
  };

  return (
    <>
      <input
        id="search"
        type="search"
        className="form-control"
        placeholder="Search by Driver name or Registration"
        onChange={(e) => handleChange(e)}
      />
    </>
  );
}
