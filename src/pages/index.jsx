import React from "react"
import * as styles from "../styles/Index.module.scss"
import Seo from "../components/seo"


import Layout from "../components/Layout"

export default function Index()
{
    return(
        <Layout>
            <Seo title="Home"/>
            Strona główna
        </Layout>
    )
}
