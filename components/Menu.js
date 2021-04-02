import useSlideMenu from "../hooks/useSlideMenu";
import theme from "../styles/theme";

export default function Menu({ isOpen }) {
  const menu = useSlideMenu(isOpen);

  return (
    <>
      <div className="menu" ref={menu}>
        <nav>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>
        {`
          .menu {
            visibility: hidden;
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            padding-right: 5vw;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            background-color: ${theme.colors.menuBackground};
            text-align: right;
            line-height: 1.25;

            a {
              font-size: clamp(4rem, 15vmin, 8rem);
              font-weight: bold;
            }
          }
        `}
      </style>
    </>
  );
}
