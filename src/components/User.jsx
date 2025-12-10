const User = ({ name, age, skills }) => {
  return (
    <>
      <h1>{name}</h1>
      <h2>{age}</h2>
      {skills.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </>
  );
};

export default User;
