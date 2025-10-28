function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        width: "200px",
        wordBreak: "break-word",
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.gender}</p>
      <p>{user.location}</p>
      <p>{user.birthdate}</p>
      <img src={user.photo} alt={user.name} style={{ width: "100%" }} />
    </div>
  );
}
export default UserCard;
