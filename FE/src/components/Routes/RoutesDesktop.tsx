import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { IRoute } from "./IRoute";
import { ROUTES } from "../shared/icons/constans";

import Home from "../Home/Home";
import Library from "../Library/Library";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Product from "../Product/Product";
import Catalog from "../Catalog/Catalog";
import Cart from "../Cart/Cart";
import Dev from "../Dev/Dev";

const RoutesDesktop: React.FC = observer(() => {
  const privateRoutes: IRoute[] = [
    {
      path: `${ROUTES.HOME}`,
      component: Home,
    },
    {
      path: `${ROUTES.PROFILE}`,
      component: Profile,
    },
    {
      path: `${ROUTES.LIBRARY}`,
      component: Library,
    },
    {
      path: `${ROUTES.CATALOG}`,
      component: Catalog,
    },
    {
      path: `${ROUTES.CART}`,
      component: Cart,
    },

    {
      path: `${ROUTES.LOGIN}`,
      component: Login,
    },
    {
      path: `${ROUTES.APP}`,
      component: Product,
    },
    {
      path: `${ROUTES.DEV}`,
      component: Dev,
    },
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route key="/" path="/" element={<Navigate to={ROUTES.HOME} />} />
        {privateRoutes.map((router) => (
          <Route
            key={router.path}
            path={router.path}
            element={<router.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
});

export default RoutesDesktop;
