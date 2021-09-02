import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/o-nas.module.scss"
import Iframe from 'react-iframe'

export default function ONas() {
return(
    <Layout>
         <img className={styles.zdj} src='../images/banner.webp' alt="banner"/>
         <br />
        <p style={{backgroundColor: "#ffd966"}} className={styles.text}>
                <br/>
                <span className={styles.text}> Kim jesteśmy?</span>
                <br/><br/>
                ...
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4044.7782609079754!2d20.69858029373123!3d49.614474749307334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473de53708367145%3A0x7eebec14d6a87c44!2sII%20Liceum%20Og%C3%B3lnokszta%C5%82c%C4%85ce%20im.%20M.%20Konopnickiej%20w%20Nowym%20S%C4%85czu!5e0!3m2!1spl!2spl!4v1630602560791!5m2!1spl!2spl"
                 width="600" height="450"  allowfullscreen="" loading="lazy" className={styles.ifr} display="initial"></Iframe>
            
            </p>
            <p className={styles.text}>
                <span className={styles.naglowek}> Kontakt </span>
                <br/><br/>
                ...
            </p>


    </Layout>
)
}