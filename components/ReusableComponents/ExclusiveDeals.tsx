'use client';
import React, { useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/page.module.css";
import Button from './Button';
import { ExclusiveDetails } from '@/sanity/types';
import { getExclusiveData } from '@/sanity/libs/api';


function ExclusiveDeals() {

    const [exclusive, seExclusive] = useState<ExclusiveDetails[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const exclusiveData = await getExclusiveData();

                seExclusive(exclusiveData);
                console.log("exclusive : ", exclusiveData)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    if (!exclusive) return <p>Loading...</p>;

    return (
        <div>
            <div className={`${styles.exclusiveDeals}`}>
                <h3 className={styles.exclusiveTitle}>{exclusive[0]?.title}</h3>
                <p className={styles.exclusiveDescription}>
                    {exclusive[0]?.description}
                </p>

                <Button text={exclusive[0]?.buttonTxt} href={exclusive[0]?.link} />
            </div>

        </div>
    );
}


export default ExclusiveDeals;