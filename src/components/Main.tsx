import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Chart from "./Chart";
import { MEDIA, Container, Row } from "./Scaffold";
import useData from "../hooks/useData";

const Card = styled.div`
  flex: 1;
  background: #282e49;
  border: 1px solid rgb(24, 27, 46);
  margin: 0 16px 12px;
  padding: 2em;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }

  h2 {
    margin: 0;
  }

  ${MEDIA.mobile} {
    margin: 0 12px 24px 12px !important;
  }
`;

const CountStyled = styled.span`
  display: inline-block;
  font-size: 2em;
  margin-top: 12px;

  &.success {
    color: rgb(16, 220, 160);
  }
  &.warning {
    color: #f5f5dc;
  }
  &.danger {
    color: rgb(255, 106, 158);
  }
`;

export default function Main() {
  const { count, data } = useData();

  return (
    <Container>
      <Row>
        <Card>
          <h2>Confirmed</h2>
          <CountStyled className="warning">{count.confirmed}</CountStyled>
        </Card>
        <Card>
          <h2>Died</h2>
          <CountStyled className="danger">{count.died}</CountStyled>
        </Card>
        <Card>
          <h2>Recovered</h2>
          <CountStyled className="success">{count.recovered}</CountStyled>
        </Card>
      </Row>

      <Row>
        <Card>
          <Chart data={data} />
        </Card>
      </Row>
    </Container>
  );
}
