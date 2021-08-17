import * as React from "react"
import * as styles from "../styles/404.module.scss"

import Layout from "../components/Layout"

export default function NotFound()
{
    return(
        <Layout>
            <Seo title="404: Not found" />
            <h1>404</h1>
            <br />
            <h3>Nie znaleziono</h3>
        </Layout>
    )
}