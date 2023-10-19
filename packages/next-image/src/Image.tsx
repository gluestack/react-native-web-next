import React, { forwardRef } from 'react';
import NextImage from 'next/image';
import type { ImageProps } from 'react-native';

export const Image = forwardRef(({ ...props }: any, ref: any) => {
  const {
    style,
    source,
    layout,
    height,
    width,
    resizeMode,
    blurRadius,
    onLoadEnd,
    ...remProps
  } = props;

  let styleObject = { ...style };

  // source mapped to src
  let sourceProp = source;

  // height and width mapped to style height and width
  let layoutProp = layout;
  let heightProp = (styleObject && styleObject.height) || height;
  let widthProp = (styleObject && styleObject.width) || width;

  if (
    (heightProp && typeof heightProp !== 'number') ||
    (widthProp && typeof widthProp !== 'number') ||
    !heightProp ||
    !widthProp
  ) {
    heightProp = undefined;
    widthProp = undefined;
    layoutProp = 'fill';
    if (styleObject) {
      styleObject.height = undefined;
      styleObject.width = undefined;
    }
  }

  // resizeMode mapped to style object-fit
  let resizeModeProp = resizeMode;
  if (resizeModeProp) {
    styleObject = { ...styleObject, objectFit: resizeModeProp };
  }

  // blurRadius mapped to style filter blur
  let blurRadiusProp = blurRadius;
  if (blurRadiusProp) {
    styleObject = {
      ...styleObject,
      filter: `blur(${blurRadiusProp}px)`,
    };
  }

  // onLoad mapped to onLoadingComplete
  let onLoadEndProp = onLoadEnd;

  return (
    <NextImage
      ref={ref}
      src={sourceProp}
      width={widthProp}
      height={heightProp}
      layout={layoutProp}
      onLoadingComplete={onLoadEndProp}
      {...remProps}
      style={{ ...styleObject }}
    />
  );
});
