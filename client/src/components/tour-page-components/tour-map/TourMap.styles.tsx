import { MapContainer } from "react-leaflet";
import styled, { css } from "styled-components";

export const SectionMap = styled.section`
  position: relative;
  height: 65rem;
  margin-top: calc(0px - var(--section-rotate));
`;

export const Map = styled(MapContainer)`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

export const Marker = css`
  background-image: url("../img/pin.png");
  background-size: cover;
  width: 32px;
  height: 40px;
  cursor: pointer;
`;
export const MapboxglPopup = css`
  max-width: 25rem;
`;
export const MapboxglPopupContent = css`
  text-align: center;
  font-family: "Lato", sans-serif;
  padding: 1.5rem !important;
  font-size: 1.4rem;
  -webkit-box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.15) !important;
`;
