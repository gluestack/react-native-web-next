import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { Pressable } from 'react-native';

export const Link = forwardRef(({ children, ...props }: any, ref: any) => {
  // Next link props
  const {
    replace,
    scroll,
    shallow,
    prefetch,
    legacyBehavior,
    passHref,
    locale,
    href,
    onFocus,
    onBlur,
    ...remProps
  } = props;

  return (
    <Pressable focusable={false} tabIndex={-1} {...remProps}>
      <NextLink
        style={{ textDecoration: 'none' }}
        ref={ref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        legacyBehavior={legacyBehavior}
        passHref={passHref}
        locale={locale}
        href={href}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        {children}
      </NextLink>
    </Pressable>
  );
});
