const User = ({ user }) => {
  return (
    <section>
      <h2>Hey, {user.username}</h2>
      <img
        src={user.avatar_url}
        width="200"
        height="200"
        alt="user profile"
      ></img>
      <br></br>
      <button>Your articles</button>
      <button>Your comments</button>
    </section>
  );
};

export default User;
