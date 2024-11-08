import React,{FC} from "react";
import { SubTitle } from "../../atoms/header/SubTitle"
import { Title } from "../../atoms/header/Title";
import { ApplicationNav, NavProps } from "../../molecules/ApplicationNav";
import './ApplicationHeader.css'
interface ApplicationHeaderProps {
  subTitle: string;
  title: string;
  links: NavProps[]
}
export const ApplicationHeader: FC<ApplicationHeaderProps> = ({subTitle, title, links}) => {
  return (
    <>
      <header className="application-header">
        <SubTitle subTitle={subTitle} />
        <Title title={title} />
        <ApplicationNav links={links} />
      </header>
    </>
  );
};