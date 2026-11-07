import { socialMetadata } from "../social-metadata";
import ConstructionEstimate from "./estimate-form";

export const metadata = socialMetadata(
  "/estimate",
  "Request a construction estimate",
  "Tell Antonio Enriquez Construction about your project and request an estimate for residential building, remodeling, or commercial work in Perris, California."
);

export default function EstimatePage() {
  return <ConstructionEstimate />;
}
