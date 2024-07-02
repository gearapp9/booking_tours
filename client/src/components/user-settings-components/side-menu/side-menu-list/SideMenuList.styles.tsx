import styled from "styled-components";


export const SideNavLi = styled.li`
margin: 1rem 0;
  border-left: 0 solid #fff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;

`

export const SideNavActive = styled(SideNavLi)`
 

  border-left: 4px solid #fff !important;

  &:hover {
    border-left: 4px solid #fff !important;
  }
`;
