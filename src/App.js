import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from './store/movies';
import { fetchUsers, setType } from './store/users';

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
      <hr />
      <button onClick={() => dispatch(addMovie({ id: 3, title: 'Batman' }))}>
        Add movie
      </button>
      <hr />
      <h2>User type: {users.type}</h2>
      <button onClick={() => dispatch(setType('Admin'))}>
        Change user type
      </button>
      <hr />

      <div> {users.loading ? 'loading' : null}</div>
      <ul>
        {users
          ? users.users.map((user) => <li key={user.id}>{user.name}</li>)
          : null}
      </ul>
      <button onClick={() => dispatch(fetchUsers())}>Get users</button>
    </>
  );
};

export default App;
