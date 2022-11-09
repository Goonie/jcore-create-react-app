interface PersonProps {
  name: string;
  email: string;
  photo: string;
}

function Person({ name, email, ...props }: PersonProps) {
  return (
    <article className="Person">
      <img src={props.photo} alt="Paul's pretty face" />

      <div className="info">
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </article>
  );
}

export default Person;
