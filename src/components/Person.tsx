import { useState } from "react";

interface PersonProps {
  name: string;
  email: string;
  photo: string;
}

function Person({ name, email, ...props }: PersonProps) {
  const [isFired, setIsFired] = useState(false);

  function toggleIsFired() {
    setIsFired(!isFired);
  }

  return (
    <article
      className={"Person" + (isFired ? " isFired" : "")}
      onClick={toggleIsFired}
    >
      <img src={props.photo} alt={name + "'s pretty face"} />

      <div className="info">
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </article>
  );
}

export default Person;
