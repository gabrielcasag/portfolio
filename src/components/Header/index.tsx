import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import NameTag from "../NameTag";
import LanguageSwitcher from "../LanguageSwitcher";

import "./styles.css";

const Header = forwardRef<HTMLElement, React.PropsWithChildren<unknown>>(
  function (_, ref) {
    const { t } = useTranslation();

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

        <button className="mobile__menu__button" aria-label="Menu">
          <span></span>
          <span></span>
        </button>

        <div className="mobile__menu">
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
            {/* <LanguageSelector
            showFlag={true}
            className="language__selector menu__item"
          /> */}
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
