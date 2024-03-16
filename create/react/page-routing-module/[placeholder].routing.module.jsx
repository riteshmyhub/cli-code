import { Route, Navigate, Routes } from "react-router-dom";
import PlaceHolderModule from "./placeholder.module";

export default function PlaceHolderRoutingModule() {
   return (
      <Routes>
         <Route element={<PlaceHolderModule />}>
            <Route index element={<Navigate to="test1" replace />} caseSensitive />
            <Route path="test1" element={<p>test1</p>} caseSensitive />
            <Route path="test2" element={<p>test2</p>} caseSensitive />
         </Route>
      </Routes>
   );
}
/* --------------------------note--------------------------------
  - all pages routes import in PlaceHolderRoutingModule

  - for eager loading => in app routing file use like - 
     1. import PlaceHolderRoutingModule from "...page path...";
     2. <Route path="placeholder/*" element={<PlaceHolderRoutingModule />}/>

  -  for lazy loading => in app routing file use like - 
     1. const PlaceHolderRoutingModule = React.lazy(() => import("...page path..."));
     2. <Route path="placeholder/*" element={
           <React.Suspense fallback={<p>module loading...</p>}>
                <PlaceHolderRoutingModule />
           </React.Suspense>}
        />
*/
