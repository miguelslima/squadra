import React from "react";
import { FooterBase } from "./styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado para a
        <a href="https://www.squadra.com.br/" target="_blank">
          {" "}
          Squadra
        </a>
      </p>

      <a href="https://github.com/miguelslima" target="_blank">
        <FaGithub style={{ fontSize: 40, paddingRight: 10 }} />
      </a>
      <a href="https://www.linkedin.com/in/miguelslima1986/" target="_blank">
        <FaLinkedinIn style={{ fontSize: 40 }} />
      </a>
    </FooterBase>
  );
}

export default Footer;
