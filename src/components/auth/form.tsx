export const Form = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export const FormItem = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export const FormLabel = ({ children, ...props }: any) => {
  return <label {...props}>{children}</label>;
};

export const FormControl = ({ children, ...props }: any) => {
  return <div {...props}>{children}</div>;
};

export const FormMessage = ({ children, ...props }: any) => {
  return <p {...props}>{children}</p>;
};
