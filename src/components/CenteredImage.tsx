"use client";

import Image from "next/image";
import CenteredContainer from "./CenteredContainer";

interface CenteredImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CenteredImage: React.FC<CenteredImageProps> = ({
  src,
  alt,
  width,
  height,
}) => (
  <CenteredContainer>
    <Image
      className="mainImage"
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  </CenteredContainer>
);

export default CenteredImage;
