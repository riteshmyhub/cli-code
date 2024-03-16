import React from "react";
import PlaceHolderStyleModule from "./placeholder.style.module";
import { Outlet as RouterOutlet, NavLink } from "react-router-dom";

export default function PlaceHolderModule() {
   return (
      <PlaceHolderStyleModule>
         <div>
            <NavLink to="test1">test1</NavLink>
            <NavLink to="test2">test2</NavLink>
         </div>
         <div>
            <RouterOutlet />
         </div>
      </PlaceHolderStyleModule>
   );
}
