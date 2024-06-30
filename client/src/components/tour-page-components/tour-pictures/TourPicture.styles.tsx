import styled, { css } from "styled-components";

export const SectionPictures = styled.section`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
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
  margin-top: calc(0px - var(--section-rotate));
  position: relative;
  z-index: 1000;
`;

const pictureBoxImg = css`
  display: block;
  width: 100%;
  height: 110%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const PictureBox = styled.div``;

export const PictureBoxImg1 = styled.img`
  ${pictureBoxImg}
  padding-top: 15%;
`;
export const PictureBoxImg2 = styled.img`
  ${pictureBoxImg}

  padding-bottom: 15%;
`;
export const PictureBoxImg3 = styled.img`
  ${pictureBoxImg}

  padding-bottom: 27%;
`;
