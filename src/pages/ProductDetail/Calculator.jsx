import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API } from "../../API";
import Container from "../../components/ui/Container";
import Title from "../../components/ui/Title";

const Calculator = ({ productPrice, id }) => {
  const [data, setdata] = useState([]);
  const [switches, setswitches] = useState({});
  const [price, setprice] = useState(productPrice);
  const [count, setcount] = useState(1);
  useEffect(() => {
    fetch(`${API}/api/v1/template/get?id=${id}`)
      .then((i) => i.json())
      .then((i) => i && setdata(i?.data?.body?.switch));
  }, [id]);

  useEffect(() => {
    if (data?.length > 0) {
      setswitches(() => [
        ...data.map((i) => ({
          title: i.switchTitle,
          value: i.switchBody[0].switchItemPrice,
        })),
      ]);
    }
  }, [data]);
  useEffect(() => {
    if (switches.length > 0)
      setprice(() => {
        const arrays = switches?.map((i) => +i.value) || [0];
        const overallPrice = arrays.reduce((c, p) => c + p, +productPrice);
        return overallPrice * count;
      });
    else setprice(productPrice * count);
  }, [switches, count]);

  const countHandler = ({ target }) => {
    const value = target.value;
    setcount(+value || "");
  };

  const switchHandler = (name, price) => {
    setswitches(() => [
      ...switches.map((i) => (i.title === name ? { ...i, value: price } : i)),
    ]);
  };
  return (
    <Container className={"w-full flex flex-col gap-4"}>
      <Title className="text-2xl font-bold mt-10 mb-7">Calculator:</Title>
      {data?.map((i, n) => (
        <div className="flex flex-col">
          <div className="text-2xl my-3">{i.switchTitle}</div>

          <div className="flex gap-2 items-center">
            {i.switchBody.map((r, j) => (
              <div
                onClick={() => switchHandler(i.switchTitle, r.switchItemPrice)}
                className={`text-lg cursor-pointer hover:bg-[blue] hover:text-[white] p-3 px-4 rounded-md ${
                  switches[n]?.value === r.switchItemPrice
                    ? "bg-[blue] text-[white]"
                    : "text-[black] bg-[#eee]"
                } shadow`}
              >
                {r.switchItemTitle}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className="flex mt-4 mb-4 items-center text-2xl gap-2">
        Count:{" "}
        <input
          type="number"
          className="p-2 px-3 text-base bg-[#eee] w-60"
          placeholder="1"
          value={count}
          onChange={countHandler}
        />
      </div>
      <div className="flex font-semibold mt-4">
        <div className="text-2xl">Overall Price: {price || 0} uzs</div>
      </div>
    </Container>
  );
};

export default Calculator;
