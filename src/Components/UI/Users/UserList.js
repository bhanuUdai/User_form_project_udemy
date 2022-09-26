import React from "react";
import Card from "../Card";
import classes from './UserList.module.css'
function UserList(prop) {

if(prop.userArray.length===0)
{
    return
}

  return (
    <Card className={classes.users}>
    <ul>
      {prop.userArray.map((user) => {
        return (
          <li key ={Math.random().toString()}>
            {user.name} (Age is {user.age}) (and College is {user.college})
          </li>
        );
      })}
    </ul>
    </Card>
  );
}

export default UserList;
