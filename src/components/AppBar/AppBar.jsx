import { AuthNav } from "../AuthNav/AuthNav";
import { useAuth } from "hooks/useAuth";
import { Navigation } from "components/Navigation";
import { UserMenu } from "components/UserMenu";

const styles = ["flex", "justify-between", "border-b-2", "pb-3", "mb-2"].join(
  " "
);

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={styles}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
