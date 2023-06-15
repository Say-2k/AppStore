import { observer } from "mobx-react-lite";
import React from "react";
import Header from "../shared/Header/Header";

const Library: React.FC = observer(() => {
  const a = "Библиотека";

  return (
    <>
      <Header />
      {a}
    </>
  );
});

export default Library;
