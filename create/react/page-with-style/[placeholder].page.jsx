import React from "react";
import usePlaceHolderController from "./usePlaceHolder.controller";
import PlaceHolderPageStyle from "./placeholder.style";

export default function PlaceHolderPage() {
   const { txt } = usePlaceHolderController();
   return (
      <PlaceHolderPageStyle>
         <p>{txt}</p>
      </PlaceHolderPageStyle>
   );
}
