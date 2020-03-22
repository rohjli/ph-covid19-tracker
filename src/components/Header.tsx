import React from "react";
import styled from "styled-components";

import { Container } from "./Scaffold";

const Heading = styled.header`
  text-align: center;
`;

export default function Header() {
  return (
    <Container>
      <Heading>
        <h1 className="logo">PH COVID-19 Tracker</h1>
      </Heading>
    </Container>
  );
}
