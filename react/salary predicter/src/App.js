import { useState } from "react";
import "./App.css";
import ListBox from "./components/ListComponents/ListBox";
import FormBox from "./components/Form Components/FormBox";

function App() {
  //  define user Data-->
  const [userDatabase, setUserDatabase] = useState([]);

  // Extract data function-->
  const extractDataHandler = (name, salary) => {
    console.log(name, salary);

    // create an object from our extracted data from user Input-->
    const newData = {
      key: Math.random(),
      name: name,
      salary: salary,
    };

    // we create or push the new object int the database-->
    setUserDatabase([newData, ...userDatabase]);
  };
  return (
    <div>
      <FormBox addNewData={extractDataHandler} />
      <ListBox userData={userDatabase} />
    </div>
  );
}

export default App;
