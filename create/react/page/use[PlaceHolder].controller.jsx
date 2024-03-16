import React, { useEffect, useState } from "react";

export default function usePlaceHolderController() {
   const [txt, setTxt] = useState("placeholder Page work");

   useEffect(() => {
      return () => {};
   }, []);

   return { txt };
}
