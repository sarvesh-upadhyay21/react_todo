import React, { useState } from "react";
function Checkbox() {
  const [isCheckedFirst, setIsCheckedFirst] = useState(false);
  const [isCheckedSecond, setIsCheckedSecond] = useState(false);

  const handleOnChangeFirst = () => {
    if (isCheckedFirst === true) {
      setIsCheckedFirst(false);
    } else {
      setIsCheckedFirst(true);
    }
  };
  const handleOnChangeSecond = () => {
    if (isCheckedSecond === true) {
      setIsCheckedSecond(false);
    } else {
      setIsCheckedSecond(true);
    }
  };

  return (
    <div>
      <div className="container mt-5 ">
        <h1 class="heading-text">Todo App</h1>
        <ul className="list-group">
          <li className="list-group-item">
            <input
              type="Checkbox"
              checked={isCheckedFirst}
              onChange={handleOnChangeFirst}
            />
            abc {isCheckedFirst === true ? <span>compleate</span> : ""}
          </li>
          <li className="list-group-item">
            <input
              type="Checkbox"
              checked={isCheckedSecond}
              onChange={handleOnChangeSecond}
            />
            xyz{isCheckedSecond === true ? <span>compleate</span> : ""}
          </li>
        </ul>
        <br />
        <h1 class="heading-text2">Todo</h1>
        <input
          type="text"
          className="form-control"
          placeholder="Your Todo."
          aria-label="Username"
          aria-describedby="addon-wrapping"
        />
        <br/>
        <button type="button" class="btn ">Submit</button>     
         </div>
    </div>
  );
}

export default Checkbox;
