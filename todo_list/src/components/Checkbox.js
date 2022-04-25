import React from "react";

function Checkbox() {
   

   
  return (
    <div>
      <div className="container mt-5 ">
        <h1 class="heading-text">Todo List</h1>
        <ul className="list-group">
          <li className="list-group-item"><input type="Checkbox"  />abc <span >compleate</span></li>
          <li className="list-group-item"><input type="Checkbox"/>xyz <span >compleate</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Checkbox;
