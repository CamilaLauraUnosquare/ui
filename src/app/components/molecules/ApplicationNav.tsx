import React, {FC} from "react";
import NavLink from "../atoms/header/NavLink";
export interface NavProps {
    text : string,
    ref: string
}
export interface ApplicationNavProps {
  links: NavProps[]
}
export const ApplicationNav: FC<ApplicationNavProps> = ({links=[]}) => {
  return (
    <>
      {links.map((link: NavProps) => (
        <div key={link.text}>
          <NavLink text={link.text} href={link.ref} onClick={()=>{}}/>         
        </div>
      ))}
    </>
  );
};
