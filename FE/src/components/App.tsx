import { observer } from "mobx-react-lite";
import * as React from "react";
import { store } from "../store/Store";

const RoutesDesktop = React.lazy(() => import("./Routes/RoutesDesktop"));

const App: React.FC = observer(() => {
  const { user, getUser, setIsAuth } = store.appStore;
  React.useEffect(() => {
    if (
      localStorage.getItem("userId") &&
      (!localStorage.getItem("token") || !user)
    ) {
      getUser(Number(localStorage.getItem("userId")));
      setIsAuth(true);
    }
  }, [getUser, setIsAuth, user]);

  if (window.screen.width) {
    return <RoutesDesktop />;
  }
  return null;
});

export default App;
