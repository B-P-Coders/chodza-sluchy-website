import React from "react"

import Navbar from "./Navbar"
import Foot from "./Foot"

export default function Layout({children})
{
    return(
        <>
            <Navbar/>
            <main></main>
            <Foot/>
        </>
    )
}