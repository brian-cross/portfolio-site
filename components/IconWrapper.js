import spacing from "../styles/spacing";

export default function IconWrapper({ children, href }) {
  return (
    <div className="icon-wrapper">
      <a href={href} target="_blank">
        {children}
      </a>
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
