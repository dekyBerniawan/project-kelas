import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getBurger } from "./burgerSlice";
import CardFood from "../../components/CardFood";

export default function Burger() {
  const { status, data } = useSelector((state) => state.burger);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getBurger());
    }
  }, [status]);

  if (status === "loading") {
    return <div>loading . . . </div>;
  }
  //   console.log(data);
  return (
    <Container>
      <Row>
        {data.map((item, i) => (
          <Col key={i} xs="6" md="4" lg="3">
            <CardFood item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
