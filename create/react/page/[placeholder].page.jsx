import React from "react";
import usePlaceHolderController from "./usePlaceHolder.controller";

export default function PlaceHolderPage() {
   const { txt } = usePlaceHolderController();
   return <div>{txt}</div>;
}
