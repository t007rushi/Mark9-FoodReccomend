import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emo = "😋";

  const FoodDB = {
    indian: [
      { food: "butter Chicken", rating: "4.5/5" },
      { food: "Pani Puri", rating: "4/5.5" }
    ],
    Italian: [
      { food: "Pasta", rating: "4.1/5" },
      { food: "Pizza", rating: "3.4/5.5" }
    ],
    Chinease: [
      { food: "Schezwan Rice", rating: "4/5" },
      { food: "Noodles Macnchow", rating: "3.4/5.5" }
    ]
  };
  var country = Object.keys(FoodDB);
  var [Fooder, setFood] = useState("indian");

  function Waiter(item) {
    Fooder = item;
    setFood(Fooder);
  }
  return (
    <div className="App">
      <h1 style={{ color: "orange" }}> {emo} GoodFoodForLife</h1>
      <h3>Checkout Awesome dishes with diffrent countries.</h3>
      <span>
        {country.map((item) => (
          <button
            key={item}
            style={{ cursor: "pointer" }}
            onClick={() => Waiter(item)}
          >
            {item}
          </button>
        ))}
      </span>
      <hr></hr>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "1" }}>
          {FoodDB[Fooder].map((item) => (
            <li
              key={item.food}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid brown",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                textalign: "left"
              }}
            >
              <div>{item.food}</div>
              <div style={{ fontSize: "smaller" }}>{item.rating}</div>
            </li>
          ))}

          {/* <li>catch us on </li> */}
        </ul>
      </div>
    </div>
  );
}
