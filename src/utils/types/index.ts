/* 
import React from 'react';

export type PropsOf< 
C extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<unknown>
> = JSX.LibraryManagedAttributes<C, React.ComponentPropsWithoutRef<C>;

type AsProp<C extends React.ElementType> = {

    /* 
    An override of the default HTML tag
    Can also be another React component.
     */ /*
    as?: C;
}

/*
Allows for extending a set of props (`ExtendedProps`) by an overriding set of props
(`OverrideProps`), ensurig that any duplicates are overridden by the overriding
set of props 
*/
/*
export type ExtendedProps<
  ExtendedProps = {},
  OverrideProps = {}
  >= OverrideProps & Omit<ExtendedProps, keyof OverrideProps>;  

  */
