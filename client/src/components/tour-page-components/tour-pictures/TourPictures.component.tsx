import { getImageLocation } from "../../../utils/getImageLocation";
import {
  PictureBox,
  PictureBoxImg1,
  PictureBoxImg2,
  PictureBoxImg3,
  SectionPictures,
} from "./TourPicture.styles";

type TourPictureProps = {
  images: string[];
};

const TourPictures = ({ images }: TourPictureProps) => {
  const getPictureBox = (picture: string) =>
    ({
      "1": PictureBoxImg1,
      "2": PictureBoxImg2,
      "3": PictureBoxImg3,
    }[picture]);

  return (
    <SectionPictures>
      {images.map((image, i) => {
        const PictureBoxImg = getPictureBox(
          (i + 1).toString()
        ) as typeof PictureBoxImg1;
        return (
          <PictureBox key={i}>
            <PictureBoxImg
              src={`${getImageLocation(image, "tour")}`}
              alt={`The Park Camper Tour ${i + 1}`}
            />
          </PictureBox>
        );
      })}
    </SectionPictures>
  );
};

export default TourPictures;
