import HOC from "./HOC";

const UsersList = ({ data }) => {
  let renderUsers = data.map((user) => <h2 key={user.id}>{user.name}</h2>);

  return <div>{renderUsers}</div>;
};

const SearchUsers = HOC(UsersList, "Users");

export default SearchUsers;
