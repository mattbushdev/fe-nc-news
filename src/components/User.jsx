const User = ({ user, isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <section className="user__page">
      <h2>Hey, {user.username}</h2>
      <div className="user__avatar">
        <img
          src={user.avatar_url}
          width="200"
          height="200"
          alt="user profile"
        ></img>
      </div>

      <div className="user__actions">
        <button className="user__button">Your articles</button>
        <button className="user__button">Your comments</button>
      </div>
      <div className="user__logout">
        <button className="user__button-logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </section>
  );
};

export default User;
