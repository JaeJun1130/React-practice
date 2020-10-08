import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Conatainer = styled.header``;

const List = styled.ul``;

const Item = styled.li``;

const SLink = styled(Link)``;

const Header = () => (
  <Conatainer>
    <List>
      <Item>신상품</Item>
      <Item>베스트</Item>
      <Item>알뜰쇼핑</Item>
      <Item>이벤트</Item>
    </List>
  </Conatainer>
);

export default withRouter(Header);
