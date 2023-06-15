import { Link } from "@mui/material";
import { observer } from "mobx-react-lite";
import React from "react";
import { NavList } from "./NavList";

const NavBar: React.FC = observer(() => (
  <>
    {NavList.map((nav) => (
      <Link key={nav.link} href={nav.link}>
        {nav.label}
      </Link>
    ))}
  </>
));

export default NavBar;
