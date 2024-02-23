import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

const Parent = () => {
    const [selectedOption,setselectedOption] = useState("");

    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent1 setselectedOption={setselectedOption} />
        <ChildComponent2 setselectedOption={setselectedOption} />
        <p>selected Option: {selectedOption}</p>
      </div>
    );
}
export default Parent;