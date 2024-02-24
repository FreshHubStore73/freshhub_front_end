import Link from 'next/link';
import Image from 'next/image';
import styles from './footer.module.scss';
import Logo from '../header/logo';

import MasterCard from '@/public/images/master.png';
import Visa from '@/public/images/visa.png';
import ApplePay from '@/public/images/apple.png';
import GooglePay from '@/public/images/google.png';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <footer>
                    <div className={styles.footer_nav}>
                        <Logo />
                        <ul className={styles.footer_list}>
                            <li className={styles.footer_item}>
                                <Link href="/categories/pizza" className={styles.footer_link}>
                                    Pizza
                                </Link>
                            </li>
                            <li className={styles.footer_item}>
                                <Link href="/categories/burgers" className={styles.footer_link}>
                                    Burgers
                                </Link>
                            </li>
                            <li className={styles.footer_item}>
                                <Link href="/categories/salads" className={styles.footer_link}>
                                    Salads
                                </Link>
                            </li>
                            <li className={styles.footer_item}>
                                <Link href="/categories/desserts" className={styles.footer_link}>
                                    Dessert
                                </Link>
                            </li>
                            <li className={styles.footer_item}>
                                <Link href="/#delivery" className={styles.footer_link}>
                                    Delivery
                                </Link>
                            </li>
                            <li className={styles.footer_item}>
                                <Link href="/#about" className={styles.footer_link}>
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul className={styles.footer_contacts}>
                        <li className={styles.contacts_item}>
                            <p className={styles.contacts_text}>We accept your orders:</p>
                            <p className={styles.contacts_details}>From 10:30 to 21:30</p>
                        </li>
                        <li className={styles.contacts_item}>
                            <a className={styles.contacts_link} href="tel: +1 285 864 3512">
                                <p className={styles.contacts_text}>
                                    Free of charge from any numbers:
                                </p>
                                <p className={styles.contacts_details}>+1 285 864 3512</p>
                            </a>
                        </li>
                        <li className={styles.contacts_item}>
                            <a className={styles.contacts_link} href="mailto: freshhub@gmail.com">
                                <p className={styles.contacts_text}>Write to us:</p>
                                <p className={styles.contacts_details}>freshhub@gmail.com</p>
                            </a>
                        </li>
                        <li className={styles.contacts_item}>
                            <p className={styles.contacts_text}>
                                &copy; {new Date().getFullYear()} FreshHub
                            </p>
                        </li>
                    </ul>
                </footer>
            </div>
            <ul className={styles.payment}>
                <li className={styles.payment_item}>
                    {/* <Image src={MasterCard} alt="MasterCard" /> */}
                    <img src="/images/master.png" />
                </li>
                <li className={styles.payment_item}>
                    {/* <Image src={Visa} alt="Visa" /> */}
                    <img src="/images/visa.png" />
                </li>{' '}
                <li className={styles.payment_item}>
                    {/* <Image src={ApplePay} alt="ApplePay" /> */}
                    <img src="/images/apple.png" />
                </li>
                <li className={styles.payment_item}>
                    {/* <Image src={GooglePay} alt="GooglePay" /> */}
                    <img src="/images/google.png" />
                </li>
            </ul>
        </div>
    );
};

export default Footer;
