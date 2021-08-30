const User = ({ user }) => {
  return (
    <section>
      <h2>Hey, {user.username}</h2>
      <img src={user.avatar_url} alt="user profile"></img>
      <button>Your articles</button>
      <button>Your comments</button>
    </section>
  );
};

export default User;
