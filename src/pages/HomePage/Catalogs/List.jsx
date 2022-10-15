import React from "react";
import Item from "./Item";

function List({}) {
  return (
    <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
      <Item title="Hotel" count={12} />
    </div>
  );
}

export default List;
