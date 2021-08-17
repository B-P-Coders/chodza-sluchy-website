import React from "react"
import Layout from "../components/layout"
import * as styles from "../styles/o-nas.module.scss"

export default function ONas() {
return(
    <Layout>
         <img className={styles.zdj} src='../images/banner.webp'/>
         <br />
        <p style={{backgroundColor: "#ffd966"}} className={styles.text}>
                <br/>
                <span className={styles.naglowek}> Kim jesteśmy?</span>
                <br/><br/>
               ...
            </p>


    </Layout>
)
}