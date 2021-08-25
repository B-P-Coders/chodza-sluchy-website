import React from "react"
import * as styles from "../styles/Index.module.scss"
import Seo from "../components/seo"
import Layout from "../components/Layout"
let articles
fetch(
    "https://chodzasluchy.ml/admin/#/collections/articles",
  )
    .then((res) => res.json())
    .then((res) => articles = res)
    console.log(articles)
export default function Index()
{
    return(
        <Layout>
            <Seo title="Home"/>
            Strona główna
        </Layout>
    )
}
