import { useState, useEffect } from "react";
import { BsFillCaretRightFill, BsFillCaretDownFill } from "react-icons/bs";
import "../styles/TreeNode.css";

const TreeNode = ({ data, node, checked, updateTreeNodeChecked }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selected, setSelected] = useState(node.checked || checked);

  useEffect(() => {
    setSelected(node.checked || checked);
  }, [checked]);

  useEffect(() => {
    updateTreeNodeChecked(node.name, selected);
    // console.log(node.name + " checked " + selected);
  }, [selected, node.name]);

  // let [areAllChildrenChecked, setAreAllChildrenChecked] = useState(false);

  // useEffect(() => {
  //   let childSelected;
  //   if (node.children.length > 0) {
  //     childSelected = node.children.every((el) => el.checked === true);
  //   }
  //   // console.log("Child selected" + childSelected);
  //   if (childSelected) setSelected(childSelected);
  //   updateTreeNodeChecked(node, node.name, selected);
  // }, [selected, node.name, node]);

  const handleToggle = () => {
    setIsExpanded((prevState) => !prevState);
  };

  const checkHandler = (isChecked) => {
    setSelected(isChecked);
    updateTreeNodeChecked(node.name, isChecked);
  };

  return (
    <div className="tree-node">
      <div className={`node-header ${isExpanded && "outline"}`}>
        {node.children.length > 0 ? (
          <div onClick={handleToggle}>
            {isExpanded ? <BsFillCaretDownFill /> : <BsFillCaretRightFill />}
          </div>
        ) : (
          <pre>{"   "}</pre>
        )}

        <input
          type="checkbox"
          id={node.name}
          name={node.name}
          value={node.name}
          checked={selected}
          onChange={() => {
            checkHandler(!selected);
          }}
        />
        <label
          htmlFor={node.name}
          className={` ${data === node.name ? "match" : ""}`}
        >
          <p>{node.designation}</p>
        </label>
      </div>
      <div className={`node-children ${isExpanded ? "open" : ""}`}>
        {node.children.map((child, index) => (
          <TreeNode
            key={index}
            data={data}
            node={child}
            checked={selected}
            updateTreeNodeChecked={updateTreeNodeChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default TreeNode;
