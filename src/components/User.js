const User = (user) => {
  return <img class="relative z-30 inline object-cover w-12 h-12 border-2 border-white rounded-full" src={user.url} alt={user.name} />;
};

export default User;
