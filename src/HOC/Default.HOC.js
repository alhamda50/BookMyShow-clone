//HOC -> Transforms a component into another component
//    -> Adding aditional functionalities to the existing components


import React from 'react';
import { Route , Routes} from "react-router-dom";

// Layouts
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ element: Component, ...rest }) => {
  return (
    <Routes>
    <Route
      {...rest}
      element={
        <DefaultLayout>
          {Component}
        </DefaultLayout>
      }
    />
    </Routes>
  );
};

export default DefaultHOC;
