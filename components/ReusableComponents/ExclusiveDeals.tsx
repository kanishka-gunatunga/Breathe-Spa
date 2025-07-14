// import React, {  } from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "@/styles/page.module.css";
// import { getExclusiveData } from '@/sanity/libs/api';
// import Link from 'next/link';
// import pageStyle from '@/styles/services.module.css'
//
//
// async function ExclusiveDeals() {
//
//     const exclusive = await getExclusiveData();
//
//     return (
//         <div>
//             <div className={`${styles.exclusiveDeals}`}>
//                 <h3 className={styles.exclusiveTitle}>{exclusive[0]?.title}</h3>
//                 <p className={`${styles.exclusiveDescription}`} style={{maxWidth: "1400px !important"}}>
//                     {exclusive[0]?.description}
//                 </p>
//
//                 <Link href={exclusive[0]?.link}> <button className={`${pageStyle.darkButton}`} style={{fontSize: "18px !important", border: "none"}} >{exclusive[0]?.buttonTxt}</button></Link>
//             </div>
//
//         </div>
//     );
// }
//
//
// export default ExclusiveDeals;


import React, {} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/page.module.css";
import Link from 'next/link';
import pageStyle from '@/styles/services.module.css'


async function ExclusiveDeals({title, description, buttonText, buttonLink}) {

    return (
        <div>
            <div className={`${styles.exclusiveDeals}`}>
                <h3 className={styles.exclusiveTitle}>{title}</h3>
                <p className={`${styles.exclusiveDescription}`} style={{maxWidth: "1400px !important"}}>
                    {description}
                </p>

                <Link href={buttonLink}>
                    <button className={`${pageStyle.darkButton}`}
                            style={{fontSize: "18px !important", border: "none"}}>{buttonText}</button>
                </Link>
            </div>

        </div>
    );
}


export default ExclusiveDeals;