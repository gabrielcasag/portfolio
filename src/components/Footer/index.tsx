import { useEffect, useRef } from "react";

import "./styles.css";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null); // Adicionando useRef

  useEffect(() => {
    let ticking = false;

    const updateFooter = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 150;

      if (footerRef.current) {
        if (scrolledToBottom) {
          footerRef.current.classList.add("expanded");
        } else {
          footerRef.current.classList.remove("expanded");
        }
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateFooter();
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    updateFooter();

    return () => {
      window.removeEventListener("scroll", onScroll); // Limpar o evento ao desmontar
    };
  }, []);

  return (
    <footer ref={footerRef}>
      <div className="content">
        <small>Copyright {new Date().getFullYear()}</small>
        {/* <small></small> */}
      </div>
    </footer>
  );
};

export default Footer;

// <script>
//     const footer = document.querySelector("footer");
//     // const content = document.querySelector("main");
//     let lastScrollY = window.scrollY;
//     let ticking = false;

//     function updateFooter() {
//         const scrolledToBottom =
//             window.innerHeight + window.scrollY >=
//             document.body.offsetHeight - 10;

//         if (scrolledToBottom) {
//             footer!.classList.add("expanded");
//             // content!.style.marginBottom = "200px";
//         } else {
//             footer!.classList.remove("expanded");
//             // content!.style.marginBottom = "60px";
//         }

//         ticking = false;
//     }

//     window.addEventListener("scroll", () => {
//         // lastScrollY = window.scrollY;
//         if (!ticking) {
//             window.requestAnimationFrame(() => {
//                 updateFooter();
//                 ticking = false;
//             });
//             ticking = true;
//         }
//     });

//     // Inicializar o estado do footer
//     updateFooter();
// </script>
