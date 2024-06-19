export const Button = ({ type, variant, className, children, ...props }: any) => {
  return (
    <button type={type} className={`${className} ${variant}`} {...props}>
      {children}
    </button>
  );
};
