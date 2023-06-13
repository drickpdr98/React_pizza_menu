export default function Pizza(props) {
  return (
    <div>
      <img src={props.photo} alt={props.name} />
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <span>{props.price}</span>
    </div>
  );
}
