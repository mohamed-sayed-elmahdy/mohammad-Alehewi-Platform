import Image from "next/image";

const brandLogoSrc = "/newlogo.png";

type BrandLogoProps = {
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function BrandLogo({
  width,
  height,
  className,
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src={brandLogoSrc}
      alt=""
      width={width}
      height={height}
      priority={priority}
      className={className}
    />
  );
}
