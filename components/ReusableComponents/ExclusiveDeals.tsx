'use client';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/styles/page.module.css";
import Button from './Button';


function ExclusiveDeals() {
    return (
        <div>
            <div className={`${styles.exclusiveDeals}`}>
                <h3 className={styles.exclusiveTitle}>Exclusive Deals</h3>
                <p className={styles.exclusiveDescription}>
                    &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <Button text='Contact Us' href='#'/>
            </div>

        </div>
    );
}


export default ExclusiveDeals;