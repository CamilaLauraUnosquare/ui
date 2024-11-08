import React from "react";

type NavLinkProps = {
  href: string;
  text: string;
  onClick: any;
};

const NavLink: React.FC<NavLinkProps> = ({ href, text, onClick }) => (
  <>
    <a href={href} onClick={onClick}>
      {text}
    </a>
  </>
);

export default NavLink;
