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

  const [focused, setFocused] = React.useState(remProps.isFocused ?? false);

  return (
    <Pressable focusable={false} isFocused={focused} {...remProps}>
      <NextLink
        ref={ref}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        legacyBehavior={legacyBehavior}
        passHref={passHref}
        locale={locale}
        href={href}
        onFocus={() => {
          setFocused(true);
          onFocus?.();
        }}
        onBlur={() => {
          setFocused(false);
          onBlur?.();
        }}
      >
        {children}
      </NextLink>
    </Pressable>
  );
});
