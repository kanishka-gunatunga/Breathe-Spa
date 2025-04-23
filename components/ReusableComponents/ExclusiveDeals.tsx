import React, {  } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/page.module.css";
import Button from './Button';
import { getExclusiveData } from '@/sanity/libs/api';


async function ExclusiveDeals() {

    const exclusive = await getExclusiveData();

    return (
        <div>
            <div className={`${styles.exclusiveDeals}`}>
                <h3 className={styles.exclusiveTitle}>{exclusive[0]?.title}</h3>
                <p className={`${styles.exclusiveDescription}`}>
                    {exclusive[0]?.description}
                </p>

                <Button text={exclusive[0]?.buttonTxt} href={exclusive[0]?.link} />
            </div>

        </div>
    );
}


export default ExclusiveDeals;