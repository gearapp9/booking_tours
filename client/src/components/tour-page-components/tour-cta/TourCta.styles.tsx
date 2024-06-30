import styled, { css } from "styled-components";
import {
  ButtonStyled,
  ButtonGreen,
} from "../../shared-styles/styles.component";

export const SectionCta = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: 3rem;
  padding-bottom: 11rem;
  padding-top: calc(15rem + var(--section-rotate));
  background-color: #f7f7f7;
`;

export const Cta = styled.div`
  position: relative;
  max-width: 105rem;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  padding: 9rem 5rem 9rem 21rem;
  border-radius: 2rem;
  -webkit-box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 3rem 8rem 0.5rem rgba(0, 0, 0, 0.15);
`;

const ctaImg = css`
  height: 15rem;
  width: 15rem;
  position: absolute;
  left: 0;
  top: 50%;
  border-radius: 50%;
  -webkit-box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
  box-shadow: 1rem 0.5rem 3rem rgba(0, 0, 0, 0.15);
`;

export const CtaImgLogo = styled.div`
  ${ctaImg}

  padding: 2rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background: linear-gradient(to right bottom, #7dd56f, #28b487);
  z-index: 10;
  -webkit-transform: translate(-35%, -50%);
  transform: translate(-35%, -50%);
`;

export const CtaImgLogoImg = styled.img`
  width: 100%;
`;

export const CtaImg1 = styled.img`
  ${ctaImg}
   -webkit-transform: translate(-10%, -50%) scale(0.97);
  transform: translate(-10%, -50%) scale(0.97);
  z-index: 9;
`;

export const CtaImg2 = styled.img`
  ${ctaImg}
  -webkit-transform: translate(15%, -50%) scale(0.94);
  transform: translate(15%, -50%) scale(0.94);
  z-index: 8;
`;

export const CtaContent = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr auto;
  grid-gap: 0.7rem;
  grid-auto-flow: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const CtaTex = styled.p`
  font-size: 1.9rem;
  font-weight: 400;
`;

export const ButtonSpanAllRows = styled.button`
  ${ButtonStyled}
  ${ButtonGreen}
  grid-row: 1 / -1;
`;
