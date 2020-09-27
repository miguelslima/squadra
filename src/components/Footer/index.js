/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { FooterBase } from "./styles";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <FooterBase>
      <p>
        Orgulhosamente criado para a
        <a style={{color: "#fff", fontWeight: "bold", textDecoration: 'underline' }} href="https://www.squadra.com.br/" target="_blank">
          {" "}
          Squadra Digital
        </a>
      </p>

      <a href="https://github.com/miguelslima" target="_blank">
        <FaGithub style={{ fontSize: 40, paddingRight: 10, color: "#fff" }} />
      </a>
      <a href="https://www.linkedin.com/in/miguelslima1986/" target="_blank">
        <FaLinkedinIn style={{ fontSize: 40, color: "#fff" }} />
      </a>
    </FooterBase>
  );
}

export default Footer;
