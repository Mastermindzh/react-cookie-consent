import { FunctionComponent, ReactNode } from "react";

type Props = {
  condition: boolean;
  wrapper: (_: ReactNode) => any;
  children: ReactNode;
};

/**
 * A function to wrap elements with a "wrapper" on a condition
 * @param {object} wrappingOptions
 *  condition == boolean condition, when to wrap
 *  wrapper == style to wrap. e.g <div>{children}</div>
 *  children == react passes whatever is between tags as children. Don't supply this yourself.
 */
export const ConditionalWrapper: FunctionComponent<Props> = ({ condition, wrapper, children }) => {
  return condition ? wrapper(children) : children;
};
