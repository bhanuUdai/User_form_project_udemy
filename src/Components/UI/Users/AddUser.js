import React from "react";
import Card from "../Card";
import classes from "./AddUser.module.css";
import Button from "../Button";
import ErrorModal from "../ErrorModal";
import { useState } from "react";
import Wrapper from "./Wrapper";

function AddUser(prop) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  //initially error is empty
  //means contain no object
  const userNameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  let Obj = {
    name: enteredUserName,
    age: enteredAge,
  };

  function addUserHandler(event) {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Error!!",
        content: "Pleanse fill the inputs",
      });
      return;
    }
    if (+enteredAge < 1) {
      // usestate always return string and here number inside string will behave like number but we still use (+) sign to mark it number and not string
        setError({
            title: "Error!!",
            content: "Age should be greater then 1 (age>1)",
          });
      return;
    }
    console.log(enteredUserName, enteredAge);
    prop.userObject(Obj);
    setEnteredUserName("");
    setEnteredAge("");
  }

function errorHandler()
{
    setError(null)
    //here again making error empty by filling null in it
}

  return (
    <Wrapper>
      {error && <ErrorModal
        title={error.title}
        content={error.content}
        onCancel={errorHandler}
      ></ErrorModal>}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>

        {/* for module.css className should be in {} and not in "" */}

          <label htmlFor="user_name">User Name</label>
          <input
            type="text"
            id="user_name"
            name="username"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="user_age">Age</label>
          <input
            type="number"
            id="user_age"
            name="userage"
            value={enteredAge}
            onChange={userAgeChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
      </Wrapper>
  );
}
export default AddUser;
