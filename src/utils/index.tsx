/* 
clsx: This is a utility for constructing className strings conditionally. It allows you to combine class names based on certain conditions, making it easier to manage dynamic class names in your components.
ClassValue: This is a type from clsx that represents the possible values that can be passed to the clsx function (strings, arrays, objects, etc.).
twMerge: This function from the tailwind-merge library is used to merge Tailwind CSS classes while resolving conflicts. It ensures that the final class string does not contain conflicting Tailwind classes, which can lead to unpredictable styling.
*/

import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
