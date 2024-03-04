import { useAuth } from "hooks/useAuth";

const css = {
  div: [
    "absolute",
    "top-1/4",
    "left-1/2",
    "-translate-x-1/2",
    "'-translate-y-1/4'",
    "text-4xl",
    "text-center",
  ].join(" "),
  welcome: ["text-5xl", "pb-12"].join(" "),
  title: ["text-8xl"].join(" "),
};

const Home = () => {
  const { user, isLoggedIn } = useAuth();

  return (
    <div className={css.div}>
      <h2 className={css.welcome}>
        {" "}
        {isLoggedIn ? `Welcome back, ${user.name}` : `Hi!`}
      </h2>
      <h2 className={css.welcome}>This is your new</h2>
      <h1 className={css.title}>Phonebook</h1>
    </div>
  );
};

export default Home;
