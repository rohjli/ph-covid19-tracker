import React from "react";
import styled from "styled-components";

import Chart from "./Chart";
import { MEDIA, Container, Row } from "./Scaffold";
import useTestCount from "../hooks/useTestCount";
import useCases from "../hooks/useCases";

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
  const count = useTestCount();
  const caseData = useCases();

  return (
    <Container>
      <Row>
        <Card>
          <h2>Confirmed Cases</h2>
          <CountStyled className="danger">{caseData.count}</CountStyled>
        </Card>
        <Card>
          <h2>Negative Cases</h2>
          <CountStyled className="success">{count.negative}</CountStyled>
        </Card>
        <Card>
          <h2>Pending Cases</h2>
          <CountStyled className="warning">{count.pending}</CountStyled>
        </Card>
      </Row>

      <Row>
        <Card>
          <Chart data={caseData} />
        </Card>
      </Row>
    </Container>
  );
}
