import React from "react";

import ReactDOM , {createRoot} from "react-dom/client";

const Title = () => (
    <h1 id = "23" key = "293">Hi First functional component</h1>
);
const HeaderComponent = () => {
    return(
        
        <div>
            <Title />
            <h1>Hi H1</h1>
            <h2>Hi H2</h2>

        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<HeaderComponent />);
