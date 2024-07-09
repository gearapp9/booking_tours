import { useEffect } from "react";
import { getImageLocation } from "../../../utils/getImageLocation";
import { HeadingSecondary } from "../../shared-styles/styles.component";
import {
  ButtonSpanAllRows,
  Cta,
  CtaContent,
  CtaImg1,
  CtaImg2,
  CtaImgLogo,
  CtaImgLogoImg,
  CtaTex,
  SectionCta,
} from "./TourCta.styles";

import { bookingTour } from "../../../utils/bookingApiCalls";

type TourCtaProps = {
  images: string[];
  duration: number;
  id: string;
};

const TourCta = ({ images, duration, id }: TourCtaProps) => {
  const handleClick = () => {

      bookingTour(id);
   
  };
  

  return (
    <SectionCta>
      <Cta>
        <CtaImgLogo>
          <CtaImgLogoImg
            src={getImageLocation("logo-white.png")}
            alt="Natours logo"
          />
        </CtaImgLogo>
        <CtaImg1 src={getImageLocation(images[1], "tour")} alt="Tour picture" />
        <CtaImg2 src={getImageLocation(images[2], "tour")} alt="Tour picture" />
        <CtaContent>
          <HeadingSecondary>What are you waiting for?</HeadingSecondary>
          <CtaTex>
            {`${duration} days. 1 adventure. Infinite memories. Make it yours today!`}
          </CtaTex>
          <ButtonSpanAllRows onClick={handleClick}> Book tour now!</ButtonSpanAllRows>
        </CtaContent>
      </Cta>
    </SectionCta>
  );
};

export default TourCta;
