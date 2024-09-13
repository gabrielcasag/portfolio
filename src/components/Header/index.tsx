import "./styles.css";

import { forwardRef, useState } from "react";
import { useTranslation } from "react-i18next";

import LanguageSwitcher from "../LanguageSwitcher";
import NameTag from "../NameTag";

const Header = forwardRef<HTMLElement, React.PropsWithChildren<unknown>>(
  function (_, ref) {
    const { t } = useTranslation();

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMenuIsOpen((prev) => !prev);
    };

    return (
      <header ref={ref}>
        <a href="/" id="logo">
          <NameTag />
        </a>

        <div className="desktop__menu">
          <nav className="desktop__nav">
            <a href="#hero__section" className="menu__item">
              {t("header.about")}
            </a>
            <a href="#experience__section" className="menu__item">
              {t("header.experience")}
            </a>
            <a href="#projects__section" className="menu__item">
              {t("header.projects")}
            </a>
            <a href="#contact__section" className="menu__item">
              {t("header.contact")}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>

        <button
          className="mobile__menu__button"
          aria-label="Menu"
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
        </button>

        <div className={`mobile__menu ${menuIsOpen && "active"}`}>
          <nav>
            <a href="" className="menu__item">
              {t("header.about")}
            </a>
            <a href="" className="menu__item">
              {t("header.experience")}
            </a>
            <a href="" className="menu__item">
              {t("header.projects")}
            </a>
            <a href="" className="menu__item">
              {t("header.contact")}
            </a>
            <LanguageSwitcher />
          </nav>
        </div>
      </header>
    );
  }
);

export default Header;

// <script>
//   const mobileMenuButton = document.querySelector(".mobile__menu__button");
//   const mobileMenu = document.querySelector(".mobile__menu");

//   if (mobileMenu && mobileMenuButton) {
//     mobileMenuButton.addEventListener("click", (event) => {
//       event.stopPropagation();
//       mobileMenu.classList.toggle("active");
//     });

//     document.addEventListener("click", (event) => {
//       if (
//         !mobileMenu.contains(event.target as Node) &&
//         !mobileMenuButton.contains(event.target as Node)
//       ) {
//         mobileMenu.classList.remove("active");
//       }
//     });
//   }
// </script>
