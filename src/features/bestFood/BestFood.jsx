import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { getBestFood } from "./bestFoodSlice";
import CardFood from "../../components/CardFood";

export default function BestFood() {
  const { status, data } = useSelector((state) => state.bestFood);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(getBestFood());
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
