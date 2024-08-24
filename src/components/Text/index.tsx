import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, ElementType, forwardRef } from "react";

// Define the base styles and variants for the text component using the `cva` function
// from the class-variance-authority package. This allows for conditional styling
// based on the specified variants.

const textStyles = cva("w-full", {
  variants: {
    emphasis: {
      low: "text-gray-600 font-light",
    },
    size: {
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      black: "font-black",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline underline-offset-2",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
  },
});

// Define the types for the Text component's props, combining the standard span props
// (`ComponentProps<"span">`) with the variant props (`VariantProps<typeof textStyles>`).
type TextProps<T extends ElementType> = {
  as?: T; // Allows the user to specify the element type
} & ComponentProps<T> &
  VariantProps<typeof textStyles>;

// Create the Text component using the `forwardRef` function, allowing it to accept a ref
// that will be forwarded to the underlying span element.

export const Text = forwardRef(
  <T extends ElementType = "span">(
    { as, className, ...props }: TextProps<T>,
    ref: React.Ref<Element>
  ) => {
    // Determine the element type to render (default is "span")
    const Component = as || "span";

    // Combine the class names (from cva and any additional classes)
    const classNames = textStyles({ className, ...props });

    // Render the specified element with all the props and the forwarded ref
    return <Component ref={ref} className={classNames} {...props} />;
  }
);

// ForwardRef requires a display name for better debugging in React DevTools
Text.displayName = "Text";
