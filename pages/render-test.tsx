import React, { useEffect, useState } from "react";

export default function NameComponent() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const [fullName, setFullName] = useState("");
  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <p>{firstName}</p>
      <p>{lastName}</p>

      <p>{fullName}</p>
    </div>
  );
}
