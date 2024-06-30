import styled, { css } from "styled-components";

const sectionDescriptionChildren = css`
  padding: 0 8vw;
  padding-top: 14vw;
  padding-bottom: calc(1vw + var(--section-rotate));
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
`;

export const SectionDescription = styled.section`
  background-color: #fcfcfc;
  margin-top: calc(0px - var(--section-rotate));
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;

export const OverviewBox = styled.div`
${sectionDescriptionChildren}
  background-color: #f7f7f7;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

export const OverviewBoxGroup = styled.div`
  
  margin-bottom: 7rem;
`;



export const OverviewBoxDt = styled.div`
  
  font-size: 1.5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: 400;
  svg {
    margin-right: 1.25rem;
  }
  &:not(:last-child) {
    margin-bottom: 2.25rem;
  }
`;

export const OverviewBoxIcon = styled.svg`
  
  height: 2.25rem;
  width: 2.25rem;
  fill: #55c57a;
`;

export const OverviewBoxLabel = styled.span`
  
  font-weight: 700;
  margin-right: 2.25rem;
  text-transform: uppercase;
  font-size: 1.4rem;
`;

export const OverviewBoxText = styled.span`
  
  text-transform: capitalize;
`;

export const OverviewBoxImg = styled.img`
  
  border-radius: 50%;
  height: 3.5rem;
  margin-right: 1.25rem;
`;

export const DescriptionBox = styled.div`
${sectionDescriptionChildren}
  margin-right: 5rem;
`;

export const DescriptionText = styled.p`
  
  font-size: 1.7rem;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
