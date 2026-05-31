import logo from './logo.svg';
import './App.css';
import Header from "./web/Header";
import Content from './web/Content';
import Footer from './web/Footer';
import Addcontent from './web/Addcontent';
import React, { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/cjs/react-dom-test-utils.development';



function App() {
  
  //create a function and inside this function we use another function which is inside the name of the object
  const onDelete = (work)=>{
    setPerson(works.filter((e)=>{
      return e!==work;
    })) 
  }
  //adding details
  const adddata = (name,age,location)=>{
    console.log("click",name);
    const mydetail = {
      name:name,
      age:age,
      location:location
    }
    setPerson([...works,mydetail]);
  }
  //CreAte an object by using Module state
  const [works, setPerson] = useState([{
    name: "pulakesj Malakar",
    age: 20,
    location : "hajo"
  },
  {
    name: "ashley",
    age: 18,
    location : "germany",
  },
  {
    name: "Parthib malakar",
    age: 20,
    location : "hajo"
  }
])
  return (
   
    <>
           <Header title="good morning"/>
           <Addcontent adddata = {adddata}/>
           <Content works = {works} onDelete={onDelete}/>
           <Footer  show = {true}/>
           
    </>

  );
}

export default App;
