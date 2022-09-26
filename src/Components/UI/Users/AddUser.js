import React from "react";
import Card from "../Card";
import classes from "./AddUser.module.css";
import Button from "../Button";
import ErrorModal from "../ErrorModal";
import { useState, useRef } from "react";
import Wrapper from "./Wrapper";

function AddUser(prop) {
  const inputRefName = useRef();
  const inputRefAge = useRef();
  const inputCollege = useRef();
  // we will use these variables as ref=inputRefName in input

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  //initially error is empty
  //means contain no object
  // const userNameChangeHandler = (event) => {
  //   setEnteredUserName(event.target.value);
  // };

  // const userAgeChangeHandler = (event) => {
  //   setEnteredAge(event.target.value);
  // };

  function addUserHandler(event) {
    event.preventDefault();
    const enteredRefName = inputRefName.current.value;
    const enteredRefAge = inputRefAge.current.value;
    const enteredRefCollege = inputCollege.current.value;
    let Obj = {
      name: enteredRefName,
      age: enteredRefAge,
      college: enteredRefCollege,
    };

    if (
      enteredRefName.trim().length === 0 ||
      enteredRefAge.trim().length === 0 ||
      enteredRefCollege.trim().length === 0
    ) {
      setError({
        title: "Error!!",
        content: "Pleanse fill the inputs",
      });

      return;
    }

    if (+enteredRefAge < 1) {
      // usestate always return string and here number inside string will behave like number but we still use (+) sign to mark it number and not string
      setError({
        title: "Error!!",
        content: "Age should be greater then 1 (age>1)",
      });
      return;
    }
    prop.userObject(Obj);

    // setEnteredUserName("");
    // setEnteredAge("");
    inputRefName.current.value = "";
    inputRefAge.current.value = "";

    //using API to empty input after clicking Add User
  }

  function errorHandler() {
    setError(null);
    //here again making error empty by filling null in it
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          content={error.content}
          onCancel={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          {/* for module.css className should be in {} and not in "" */}

          <label htmlFor="user_name">User Name</label>
          <input
            type="text"
            id="user_name"
            name="username"
            // value={enteredUserName}
            // onChange={userNameChangeHandler}
            ref={inputRefName}
          ></input>
          <label htmlFor="user_age">Age</label>
          <input
            type="number"
            id="user_age"
            name="userage"
            // value={enteredAge}
            // onChange={userAgeChangeHandler}
            ref={inputRefAge}
          ></input>
          <label htmlFor="college_name">College Name</label>
          <input
            type="text"
            id="college_name"
            name="collegename"
            ref={inputCollege}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
export default AddUser;
