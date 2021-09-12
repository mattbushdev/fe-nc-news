import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error__card">
      <h2>Error 404 not found</h2>
      <Link to="/">
        <button className="button__error">Home</button>
      </Link>
    </div>
  );
};

export default Error;
