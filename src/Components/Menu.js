import Pizza from "./Pizza";
import "../index.css";

export default function Menu({ data }) {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {data.map((pizza, i) => {
          return (
            <li className="pizza" key={i}>
              <Pizza
                photo={pizza.photoName}
                name={pizza.name}
                ingredients={pizza.ingredients}
                price={"$" + pizza.price}
              />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
