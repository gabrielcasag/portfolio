import "./styles/app.css";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FaGithub,
  FaLinkedinIn,
  FaSoundcloud,
  FaYoutube,
} from "react-icons/fa";

import { experiencesEn, experiencesPb } from "./assets/experiences";
import BackToTop from "./components/BackToTop";
import Button from "./components/Button";
import Divisor from "./components/Divisor";
import ExperienceCard from "./components/ExperienceCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NameTag from "./components/NameTag";
import ProjectsCard from "./components/ProjectsCard";

const App = function () {
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language;
  const experiences = currentLanguage == "pb" ? experiencesPb : experiencesEn;
  const headerRef = useRef<HTMLDivElement>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(window.scrollY); // Usar useRef para armazenar lastScrollY

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (headerRef.current && experienceSectionRef.current) {
        const experienceSectionTop =
          experienceSectionRef.current.getBoundingClientRect().top +
          window.scrollY;

        if (
          currentScrollY > lastScrollY.current && // Usar lastScrollY.current
          currentScrollY > experienceSectionTop - 100
        ) {
          headerRef.current.classList.add("hidden");
        } else if (
          currentScrollY < lastScrollY.current || // Usar lastScrollY.current
          currentScrollY < experienceSectionTop - 200
        ) {
          headerRef.current.classList.remove("hidden");
        }
      }
      lastScrollY.current = currentScrollY; // Atualizar lastScrollY.current
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <main>
        <section id="hero__section">
          <div>
            <h2>
              {t("hero.greeting")} <NameTag /> <span id="hand__emoji">👋</span>
            </h2>
            <h3>{t("hero.role")}</h3>
            <p>{t("hero.description")}</p>

            <div className="buttons__container">
              <Button
                variant="shine"
                aria-label={t("buttons.downloadCV")}
                href="/curriculum.pdf"
                target="_blank"
              >
                {t("buttons.downloadCV")}
              </Button>
              <Button
                aria-label={t("buttons.contact")}
                variant="accent"
                href="mailto:gabrielgc.dev@gmail.com"
              >
                {t("buttons.contact")}
              </Button>
            </div>
          </div>
        </section>

        <Divisor />

        <section id="experience__section" ref={experienceSectionRef}>
          <h2>{t("experience.title")}</h2>

          <div className="card__grid">
            {experiences.map((experience) => {
              return <ExperienceCard key={experience.id} {...experience} />;
            })}
          </div>
        </section>

        <Divisor />

        <section id="projects__section">
          <h2>{t("projects.title")}</h2>

          <div className="projects__container">
            <ProjectsCard
              title={t("projects.dolla.title")}
              description={t("projects.dolla.description")}
              demoURL="https://dolla-smooth-scroll.vercel.app/"
              codeURL="https://github.com/gabrielcasag/smooth-scroll"
            />

            <ProjectsCard
              title={t("projects.widget.title")}
              description={t("projects.widget.description")}
              codeURL="https://github.com/gabrielcasag/widget-editor-themes"
            />

            <ProjectsCard
              title={t("projects.efi_ryzen.title")}
              description={t("projects.efi_ryzen.description")}
              codeURL="https://github.com/gabrielcasag/EFI-RYZEN-5600-B550-RX6600"
            />

            <ProjectsCard
              title={t("projects.efi_ideapad.title")}
              description={t("projects.efi_ideapad.description")}
              codeURL="https://github.com/gabrielcasag/EFI-IDEAPAD-330-15IKBR-i5-8250U"
            />
          </div>
        </section>

        <Divisor />

        <section id="contact__section">
          <h4>
            {t("contact.stayIn")}{" "}
            <a href="mailto:gabrielgc.dev@gmail.com">{t("contact.touch")}</a>...
          </h4>

          <div className="social__links">
            <Button href="https://linkedin.com/in/gabrielcasag" target="_blank">
              <FaLinkedinIn size={18} />
            </Button>
            <Button href="https://github.com/gabrielcasag" target="_blank">
              <FaGithub size={18} />
            </Button>
            <Button href="https://www.youtube.com/@gbrl808" target="_blank">
              <FaYoutube size={18} />
            </Button>
            <Button href="https://soundcloud.com/gbondtrack" target="_blank">
              <FaSoundcloud size={18} />
            </Button>
          </div>
        </section>
      </main>
      <BackToTop />
      <Footer />
    </>
  );
};

export default App;
