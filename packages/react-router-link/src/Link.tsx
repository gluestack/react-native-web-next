import React, { forwardRef } from 'react';
// import React Link from 'react-router-dom';
import { Link as RRLink } from 'react-router-dom';
import { Pressable } from 'react-native';

export const Link = forwardRef(({ children, ...props }: any, ref: any) => {
  //react link props
  const {
    onFocus,
    onBlur,
    to,
    relative,
    preventScrollReset,
    replace,
    state,
    reloadDocument,
    unstable_viewTransition,
    ...remProps
  } = props;

  return (
    <Pressable focusable={false} tabIndex={-1} {...remProps}>
      <RRLink
        onFocus={onFocus}
        onBlur={onBlur}
        to={to}
        ref={ref}
        relative={relative}
        preventScrollReset={preventScrollReset}
        replace={replace}
        state={state}
        reloadDocument={reloadDocument}
        unstable_viewTransition={unstable_viewTransition}
      >
        {children}
      </RRLink>
    </Pressable>
  );
});
