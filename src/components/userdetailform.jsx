import React from "react";

//stateless component
const UserDetailForm = props => {
  return (
    <form onSubmit={props.fetchUserNumberOfRepositories}>
      <input
        style={{ margin: "20px auto", display: "block" }}
        type="text"
        name="username"
      />
      <button>Submit</button>
    </form>
  );
};

export default UserDetailForm;
