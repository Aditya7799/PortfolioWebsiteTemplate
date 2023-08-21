import React from "react";

function spinner(properties) {
    // We will be displaying the loading spinner in this component. Logic to display is in style.css file. 
    return <div id={properties.scrollable ? "spinner-none" : "spinner"}></div>;
}

export default spinner;