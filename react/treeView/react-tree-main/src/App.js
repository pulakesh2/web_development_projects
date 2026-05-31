import React, { useState, useEffect } from "react";
import { useCallback } from "react";
// import "./styles/Tree.css";
import Input from "./components/Input";
import TreeNode from "./components/TreeNode";
import "./App.css";
import DisplayData from "./components/DisplayData";
// import TreeNode from "./TreeNode";

// basic json code-->

const Data = {
  name: "Root",
  active: false,
  checked: false,
  img__url: "img/me.jpeg",
  designation: "web developer",
  skill: ["react", "node js", "firebase"],
  children: [
    {
      name: "Child 1",
      img__url: "img/me.jpeg",
      active: false,
      checked: false,
      designation: "web developer",
      skill: ["react", "node js", "mysql"],
      children: [
        {
          name: "Child 1.1",
          img__url: "img/me.jpeg",
          active: false,
          checked: false,
          designation: "frontend developer",
          skill: ["react", "css", "javascript"],
          children: [],
        },
        {
          name: "Child 1.2",
          img__url: "img/me.jpeg",
          active: false,
          checked: false,
          designation: "backend developer",
          skill: ["php", "node js", "mysql"],
          children: [
            {
              name: "Child 1.2.1",
              img__url: "img/me.jpeg",
              designation: "web designer",
              skill: ["canva", "sass", "css"],
              active: false,
              checked: false,
              children: [],
            },
          ],
        },
        {
          name: "Child 1.3",
          img__url: "img/me.jpeg",
          designation: "fullstack developer",
          skill: ["react", "node js", "php"],
          active: false,
          checked: false,
          children: [],
        },
      ],
    },
    {
      name: "Child 2",
      img__url: "img/me.jpeg",
      designation: "Android Developer",
      skill: ["python", "java", "c++"],
      active: false,
      checked: false,
      children: [],
    },
    {
      name: "Child 3",
      img__url: "img/me.jpeg",
      designation: "programmer",
      skill: ["php", "node js", "mysql"],
      active: false,
      checked: false,
      children: [],
    },
  ],
};

// let data;

// JSX Code-->
function App() {
  const [treeData, setTreeData] = useState(Data);

  // Function to set the ckecked of a node
  const updateTreeNodeChecked = useCallback(
    (nodeName, isChecked) => {
      const newTreeData = { ...treeData };
      const findAndSet = (node) => {
        if (node.name === nodeName) {
          node.checked = isChecked;
        } else {
          node.children.forEach((child) => {
            findAndSet(child);
          });
        }
      };
      findAndSet(newTreeData);
      setTreeData(newTreeData);
    },
    [treeData]
  );

  useEffect(() => {
    console.log(treeData);
  }, [treeData]);

  let inputData;
  let nodeTree = treeData;
  const [data, setData] = useState();

  // match handler match the data-->
  const matchHandler = (node) => {
    // if (node.selected) setSelected([...selected, node]);
    node.children.length &&
      node.children.forEach((child) => {
        if (child.name === inputData) {
          console.log("it is matched");
          setData(inputData);
        } else if (child.name !== inputData && child.children.length > 0) {
          nodeTree = child;
          matchHandler(nodeTree);
        } else if (child.children.length === 0) {
          console.log("no match");
          nodeTree = treeData;
        }
      });
  };

  // get input will get the data from input and store it to inputData-->
  const getInputHandler = (data) => {
    inputData = data;
    matchHandler(nodeTree);
  };

  // console.log("data->", data);

  return (
    <div className="App">
      <Input getInput={getInputHandler} />
      <div className="body">
        <div className="select-menu">
          <div className="tree">
            {treeData.children.map((el, index) => {
              return (
                <TreeNode
                  key={index}
                  data={data}
                  node={el}
                  checked={false}
                  updateTreeNodeChecked={updateTreeNodeChecked}
                />
              );
            })}
          </div>
        </div>
        <div className="show-data">
          <DisplayData node={treeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
