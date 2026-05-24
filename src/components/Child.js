import React from "react";

const Child = React.memo(({ user }) => {
  console.log("Child component Rendered");

  return (
    <div className="child mt-10">
      <h1 className="text-2xl">Child component</h1>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
});

export default Child;