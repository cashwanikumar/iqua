import * as React from "react";
import { Card, CardBody } from "reactstrap";
import Packs from "./Packs";
import Summary from "./Summary";

const LeftPanel = () => {
  return (
    <>
      <Summary />
      <Packs />
    </>
  );
};

export default LeftPanel;
