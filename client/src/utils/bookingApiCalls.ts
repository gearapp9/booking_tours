import { loadStripe} from "@stripe/stripe-js";
import axios from "axios";

const stripe = await loadStripe(
  "pk_test_51PaHHeES40x9JFv84BdR4lwvlBZaWByoGp0uDBPKr9A7J2Q0zySaAWq6SNZeQJLbWY39yYvCUAqTm9y2c6yc1tPG001XAxjGf3"
);

export const bookingTour = async (tourId: string) => {
  const session = await axios(`https://booking-tours-server-n8h1.onrender.com/api/v1/booking/checkout-session/${tourId}`);
  await stripe?.redirectToCheckout({
    sessionId: session.data.session.id,
  });
};
