import React,{useState} from "react";
import AddUser from "./Components/UI/Users/AddUser";
import UserList from "./Components/UI/Users/UserList";

function App(prop) {
  let userArray = [];
const[setArray,editSetArray]=useState(userArray)

  function userObjectHandler(data) {
   
    editSetArray((prevArray)=>
    {
      return [...prevArray,data]
    })
  }

  return (
    <div>
      <AddUser userObject={userObjectHandler}></AddUser>
      <UserList userArray={setArray}></UserList>
    </div>
  );
}

export default App;
