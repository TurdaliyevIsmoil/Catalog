import React from "react";
import { useDataContext } from "../../../context/context";
import Item from "./Item";

function List({ data }) {
  console.log(data);
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      {data.map((i) => (
        <Item title={i.catalogName} id={i.id} link={i.link} />
      ))}
    </div>
  );
}

export default List;
