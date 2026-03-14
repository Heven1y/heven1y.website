import React from "react";

type NextImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  unoptimized?: boolean;
  loader?: (p: { src: string; width: number; quality?: number }) => string;
};

const NextImage = React.forwardRef<HTMLImageElement, NextImageProps>(
  ({ fill, priority, quality, unoptimized, loader, ...props }, ref) => {
    return <img ref={ref} {...props} />;
  }
);

NextImage.displayName = "NextImage";

export default NextImage;
