import React from "react";
import s from "./Footer.module.css";
import GitHub from "../../../Iconos/GitHub";
function Footer() {
  return (
    <div className={s.footer}>
      <div>
        <a href="https://github.com/GRUPO12PF/E-SOCIAL">
          <GitHub />
        </a>
      </div>
      <div className={s.leyenda}>
        <p className="col-sm">
          &copy;{new Date().getFullYear()} E-SOCIAL INC | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  );
}

export default Footer;
