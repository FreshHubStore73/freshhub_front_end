import Link from 'next/link';
import Image from 'next/image';

import styles from './logo.module.scss';

export default function Logo() {
    return (
        <Link href="/" className={styles.logo}>
            <div className={styles.logo_wrapper}>
                <Image src="/Logo.jpg" width={60} height={60} alt="Logo" />
                <div className={styles.logo_text}>𝕱𝖗𝖊𝖘𝖍𝕳𝖚𝖇</div>
            </div>
        </Link>
    );
}
