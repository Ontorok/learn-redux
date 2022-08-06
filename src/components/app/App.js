import { Fragment, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { userFetch } from "../../redux/actions";

function App() {
  const dispatch = useDispatch();
  const { loading, error, users } = useSelector(({ user }) => user);

  return (
    <div className="App">
      <p>Redux with regular flow</p>
      <hr />
      <button type="button" onClick={() => dispatch(userFetch())}>
        Fetch
      </button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {users.length > 0 && (
        <Fragment>
          <p>These are the users:</p>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </Fragment>
      )}
    </div>
  );
}

export default App;
