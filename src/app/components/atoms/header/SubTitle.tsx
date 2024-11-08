import React, {FC} from "react";

interface Props {
  subTitle: string;
}

export const SubTitle: FC<Props> = ({ subTitle }) => {
  return (
    <>
      <p>{subTitle.toUpperCase()}</p>
    </>
  );
};