import React from "react";
import ReactDOM from "react-dom/client";
import { WholeLayout } from "./src/layouts/splitLayout";

/*  
*****************************************************
* Import React  from React
* Import ReactDOM from react-dom/client
*****************************************************
*/

const container = React.createElement('div', {id: 'parent'}, React.createElement('div', { id:'child'}, "Parent Child  Relation"))
console.log(container);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <WholeLayout />);