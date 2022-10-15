function Item({ title, count }) {
  return (
    <div
      className="border rounded-md py-4 px-3 flex flex-col items-center gap-1.5"
      style={{
        border: "1px solid #DFDFDF",
      }}
    >
      <h2 className="text-xl text-blue text-center">{title}</h2>
      <p className="text-lg">{count} Product</p>
    </div>
  );
}

export default Item;
