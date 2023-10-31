import React, { useEffect, useState } from "react";

// import { Container } from './styles';

export default function RenderTest() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const fullName = firstName + " " + lastName;

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>

      <p>{fullName}</p>
    </div>
  );
}
