import React from "react";

function Links({linkedIn, github}){


    return(
        <>
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedIn}>{linkedIn}</a>
        </>
    )
}

export default Links