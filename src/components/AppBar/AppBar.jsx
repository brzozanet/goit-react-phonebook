import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";

const css = ["flex", "justify-between", "border-b-2", "pb-3", "mb-2"].join(" ");

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={css}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
