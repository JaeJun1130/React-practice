import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Conatainer = styled.header``;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  width: 70px;
  text-align: center;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Conatainer>
    {console.log(pathname)}
    <List>
      <Item current={pathname === "/Best"}>
        <SLink to="/Best">베스트</SLink>
      </Item>
      <Item>
        <SLink to="/Sale">알뜰쇼핑</SLink>
      </Item>
      <Item>
        <SLink to="/Event">이벤트</SLink>
      </Item>
    </List>
  </Conatainer>
));
