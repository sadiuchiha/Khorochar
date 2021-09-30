import React from "react";
import Card from "./card";

function ExpenseList() {
  const list = [
    {
      title: "Made a purchase",
      logo: "Logo",
      createdAt: Date.now(),
      amount: 123,
    },
    {
      title: "Made a second purchase",
      logo: "Logo 2",
      createdAt: Date.now(),
      amount: 132,
    },
    {
      title: "Last purchase",
      logo: "Logo",
      createdAt: Date.now(),
      amount: 321,
    },
  ];

  return (
    <div>
      {list.length? (
          list.map((item) => <Card item={item}></Card>)
      ) : (
        <div>List is empty</div>
      )}
    </div>
  );
}

export default ExpenseList;
