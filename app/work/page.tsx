import { socialMetadata } from "../social-metadata";
import ProjectGallery from "./project-gallery";

export const metadata = socialMetadata(
  "/work",
  "Construction and remodeling project portfolio",
  "Browse photos of completed residential and commercial construction, remodeling, finish, and metal work projects by Antonio Enriquez Construction."
);

export default function WorkPage() {
  return <ProjectGallery />;
}
