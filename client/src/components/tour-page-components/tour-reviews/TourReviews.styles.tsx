import styled, { css } from "styled-components";

export const SectionReviews = styled.section`
  margin-top: calc(0px - var(--section-rotate));
  padding: calc(5rem + var(--section-rotate)) 0;
  position: relative;
  z-index: 1000;
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7dd56f),
    to(#28b487)
  );
  background: linear-gradient(to right bottom, #7dd56f, #28b487);
  clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
  -webkit-clip-path: polygon(
    0 var(--section-rotate),
    100% 0,
    100% calc(100% - var(--section-rotate)),
    0 100%
  );
`;

export const Reviews = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-column-gap: 6rem;
  grid-auto-flow: column;
  overflow-x: scroll;
  -ms-scroll-snap-type: x mandatory;
  scroll-snap-type: x mandatory;

  &:before,
  &:after {
    content: "";
    width: 2rem;
  }
`;

export const ReviewsCrd = styled.div`
  width: 30rem;
  padding: 4rem;
  background-color: #f7f7f7;
  border-radius: 3px;
  -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  scroll-snap-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const ReviewsAvatar = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const ReviewsAvatarImg = styled.img`
  height: 4.5rem;
  border-radius: 50%;
  margin-right: 1.5rem;
`;

export const ReviewsUser = styled.h6`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export const ReviewsText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-style: italic;
  font-weight: 400;
`;

export const ReviewsRating = styled.div`
  margin-top: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
`;
const ReviewsStar = css`
  height: 2rem;
  width: 2rem;
  margin-right: 1px;
`;

export const ReviewsStarActive = styled.svg`
  ${ReviewsStar}
  fill: #55c57a;
`;
export const ReviewsStarInactive = styled.svg`
  ${ReviewsStar}
  fill: #bbb;
`;
