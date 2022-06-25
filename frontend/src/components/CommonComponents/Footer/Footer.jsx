import React from "react";

import GitHub from "../../../Iconos/GitHub";
function Footer() {
  return (
    <div className="footer">
      <a className="github" href="https://github.com/GRUPO12PF/E-SOCIAL">  
          <GitHub />
      </a>
      <div className="leyenda">
          &copy;{new Date().getFullYear()} E-SOCIAL INC | Todos los derechos reservados |
          Términos de servicio | Privacidad
      </div>
    </div>
  );
}

export default Footer;
