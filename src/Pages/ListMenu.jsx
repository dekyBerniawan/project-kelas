import React, { useState } from "react";
import Layout from "../Layout";
import Tabs from "../components/Tabs";
import { Container } from "reactstrap";
import BestFood from "../features/bestFood/BestFood";
import Burger from "../features/burger/burger";

export default function ListMenu() {
  const [tab, setTab] = useState(0);

  return (
    <Layout>
      <Container>
        <h1 className="my-5">List Menu</h1>
        <Tabs tab={tab} setTab={setTab} />
        {tab === 0 && <BestFood />}
        {tab === 1 && <Burger />}
      </Container>
    </Layout>
  );
}
