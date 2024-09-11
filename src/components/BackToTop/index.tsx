import { useEffect, useRef } from "react";

import "./styles.css";
import { useTranslation } from "react-i18next";

const BackToTop = () => {
  const scrollToTopBtn = useRef<HTMLButtonElement>(null);
  const { t } = useTranslation();

  function toggleScrollToTopBtn() {
    if (window.scrollY > 300) {
      scrollToTopBtn.current?.classList.add("show");
    } else {
      scrollToTopBtn.current?.classList.remove("show");
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    scrollToTopBtn.current?.classList.add("clicked");
    setTimeout(() => {
      scrollToTopBtn.current?.classList.remove("clicked");
    }, 500);
  }

  useEffect(() => {
    const btn = scrollToTopBtn.current; // Copia o valor da referência

    if (btn) {
      window.addEventListener("scroll", toggleScrollToTopBtn);
      btn.addEventListener("click", scrollToTop);

      return () => {
        window.removeEventListener("scroll", toggleScrollToTopBtn);
        btn.removeEventListener("click", scrollToTop);
      };
    }
  }, []);

  return (
    <button
      ref={scrollToTopBtn}
      id="scrollToTopBtn"
      aria-label={t("backtotop.label")}
      title={t("backtotop.title")}
    >
      👆
    </button>
  );
};

export default BackToTop;
