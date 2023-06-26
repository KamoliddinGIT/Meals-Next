import React from "react";

const Footer = () => {
  return (
    <footer className="page-footer bottom-0 w-full pr-10 pl-10 footer">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} All rights reserved
          <a className="grey-text text-lighten-4 right" href="#!">
            created by SireDev
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
