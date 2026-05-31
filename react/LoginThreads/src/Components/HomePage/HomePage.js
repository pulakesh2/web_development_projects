import Button from "../UI/Button";

const HomePage = (props) => {
  console.log(props.MoveUserData);
  return (
    <div>
      <h2>hello</h2>
      {props.MoveUserData.map((el) => {
        return <p key={Math.random()}>{el.userInputName}</p>;
      })}
      <Button title="Log out" onClick={props.logOutToken} />
    </div>
  );
};

export default HomePage;
