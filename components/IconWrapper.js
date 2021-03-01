import spacing from "../styles/spacing";

export default function IconWrapper({ children }) {
  return (
    <div className="icon-wrapper">
      {children}
      <style jsx>{`
        .icon-wrapper {
          display: inline-block;
          width: ${spacing.headerIconWidth};
          & + & {
            margin-left: 2.75rem;
          }
        }
      `}</style>
    </div>
  );
}
