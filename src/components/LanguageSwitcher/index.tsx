import "./styles.css";

import { useState } from "react"; // Importando useState
import { useTranslation } from "react-i18next";
import { LuChevronDown, LuLanguages } from "react-icons/lu";

const languages = {
  en: { nativeName: "English" },
  pb: { nativeName: "Portuguese" },
};

type LanguageKey = "en" | "pb"; // Definindo os valores possíveis

function getNativeName(language: LanguageKey) {
  return languages[language].nativeName;
}

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar o popup

  const togglePopup = () => setIsOpen(!isOpen); // Função para alternar o popup

  return (
    <div>
      <button
        id="toggle"
        aria-label={t("header.languagesw")}
        onClick={togglePopup}
        onMouseEnter={togglePopup}
      >
        <LuLanguages size={20} />
        <LuChevronDown size={14} />
      </button>

      {isOpen && ( // Renderiza o popup se isOpen for true
        <div className="popup">
          {Object.keys(languages).map((lng) => (
            <span
              key={lng}
              onClick={() => {
                i18n.changeLanguage(lng);
                setIsOpen(false); // Fecha o popup após a seleção
              }}
              className={i18n.language === lng ? "bold" : ""} // Aplica className "bold" se o idioma for o ativado
            >
              {getNativeName(lng as LanguageKey)}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
