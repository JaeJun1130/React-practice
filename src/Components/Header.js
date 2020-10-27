import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Conatainer = styled.header``;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const Item = styled.li`
  width: 120px;
  text-align: center;
`;

const SLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Conatainer>
    {console.log(pathname)}
    <List>
      <Item className="ca">
        <SLink>전체 카테고리</SLink>
        <List className="dropdown-menu">
          <Item>
            <SLink>sub1</SLink>
            <SLink>sub2</SLink>
            <SLink>sub3</SLink>
          </Item>
        </List>
      </Item>
      <Item current={pathname === "/Best"}>
        <SLink to="/Best">베스트</SLink>
      </Item>
      <Item current={pathname === "/Sale"}>
        <SLink to="/Sale">알뜰쇼핑</SLink>
      </Item>
      <Item current={pathname === "/Event"}>
        <SLink to="/Event">이벤트</SLink>
      </Item>
    </List>
  </Conatainer>
));
