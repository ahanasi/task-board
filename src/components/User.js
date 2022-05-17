const User = (user) => {
  return <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={user.url} alt={user.name} />;
};

export default User;
