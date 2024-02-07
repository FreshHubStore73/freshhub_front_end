import React from 'react';

import Image from 'next/image';
import { Oswald } from 'next/font/google';

import MainImg from '@/public/images/main-picture.jpg';
import AboutImg from '@/public/images/about.png';
import NoteImg from '@/public/images/note.png';
import PhoneImg from '@/public/images/phone.png';
import DeliveryImg from '@/public/images/delivery.png';
import ContactImg from '@/public/images/contact.png';
import CalendarImg from '@/public/images/calendar.svg';

import styles from './home.module.scss';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['500', '700'],
});

const Home = () => {
    return (
        <div>
            <section className={styles.main}>
                <div className={styles.main_context}>
                    <h1 className={`${styles.main_title} ${oswald.className}`}>
                        Hot Delicious Fresh
                    </h1>
                    <p className={styles.main_description}>Free delivery to everyone</p>
                    <a className={styles.main_btn} href="#delivery">
                        Learn more
                    </a>
                </div>
                <div className={styles.main_img}>
                    <Image
                        src={MainImg}
                        alt="pizza"
                        placeholder="blur"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </section>
            <section className={styles.about} id="about">
                <h2 className={`${styles.title} ${oswald.className}`}>About us</h2>
                <div className={styles.about_container}>
                    <div className={styles.about_img}>
                        <Image
                            src={AboutImg}
                            alt="about_us"
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <ul className={styles.about_list}>
                        <li className={styles.about_item}>
                            <h3 className={styles.about_item__title}>We are FreshHub</h3>
                            <p className={styles.about_item__desc}>
                                Modern food delivery service from New York, which was founded in May
                                2019. Much has changed since then, but one thing remains stable: we
                                continue to confidently follow the path of creating a vibrant brand
                                that will become a way of life for tens and even hundreds of
                                thousands of people.
                            </p>
                        </li>
                        <li className={styles.about_item}>
                            <h3 className={styles.about_item__title}>Our mission</h3>
                            <p className={styles.about_item__desc}>
                                Help clients free up time for something truly important. Spend your
                                energy on useful things, and the time saved on cooking is better
                                spent on your development, family or leisure.
                            </p>
                        </li>
                        <li className={styles.about_item}>
                            <h3 className={styles.about_item__title}>
                                FreshHub is a favorite food delivery
                            </h3>
                            <p className={styles.about_item__desc}>
                                It&apos;s a pleasure, a small holiday, a great idea. This is the
                                right choice, pleasure and good mood. This is what you were looking
                                for and finally found. Somehow so.
                            </p>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={styles.delivery} id="delivery">
                <h2 className={`${styles.title}  ${oswald.className}`}>Delivery and Payment</h2>
                <ul className={styles.delivery_list}>
                    <li className={styles.delivery_item}>
                        <div className={styles.delivery_img}>
                            <Image src={NoteImg} alt="phone" />
                        </div>
                        <p className={styles.delivery_desc}>
                            Place an order and receive free delivery as a gift
                        </p>
                    </li>
                    <li className={styles.delivery_item}>
                        <div className={styles.delivery_img}>
                            <Image src={PhoneImg} alt="note" />
                        </div>
                        <p className={styles.delivery_desc}>
                            Then we will call you back to clarify the information
                        </p>
                    </li>
                    <li className={styles.delivery_item}>
                        <div className={styles.delivery_img}>
                            <Image src={DeliveryImg} alt="delivery" />
                        </div>
                        <p className={styles.delivery_desc}>
                            We will deliver your order in 55 minutes and you pay in cash or by card
                        </p>
                    </li>
                </ul>
            </section>
            <section className={styles.contacts}>
                <h2 className={`${styles.title}  ${oswald.className}`}>Contact us</h2>
                <div className={styles.contacts_container}>
                    <div className={styles.contacts_img}>
                        <Image
                            src={ContactImg}
                            alt="contact"
                            placeholder="blur"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    <div className={styles.contacts_info}>
                        <ul className={styles.contacts_list}>
                            <li className={styles.contacts_item}>
                                <div
                                    className={`${styles.contacts_link} ${styles.contacts_link__calendar}`}
                                >
                                    <svg
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g id="ion:calendar">
                                            <path
                                                id="Vector"
                                                d="M60 15.9998C60 13.8781 59.1571 11.8433 57.6569 10.343C56.1566 8.84267 54.1217 7.99982 52 7.99982H50V6.05607C50 4.97982 49.1725 4.05607 48.0962 4.00232C47.8258 3.98929 47.5556 4.0313 47.3019 4.1258C47.0482 4.2203 46.8163 4.36533 46.6203 4.55209C46.4243 4.73886 46.2683 4.96347 46.1616 5.21232C46.055 5.46118 46 5.72908 46 5.99982V7.99982H18V6.05607C18 4.97982 17.1725 4.05607 16.0963 4.00232C15.8258 3.98929 15.5556 4.0313 15.3019 4.1258C15.0482 4.2203 14.8163 4.36533 14.6203 4.55209C14.4243 4.73886 14.2683 4.96347 14.1616 5.21232C14.055 5.46118 14 5.72908 14 5.99982V7.99982H12C9.87827 7.99982 7.84344 8.84267 6.34315 10.343C4.84285 11.8433 4 13.8781 4 15.9998V17.4998C4 17.6324 4.05268 17.7596 4.14645 17.8534C4.24021 17.9471 4.36739 17.9998 4.5 17.9998H59.5C59.6326 17.9998 59.7598 17.9471 59.8536 17.8534C59.9473 17.7596 60 17.6324 60 17.4998V15.9998ZM4 51.9998C4 54.1215 4.84285 56.1564 6.34315 57.6567C7.84344 59.157 9.87827 59.9998 12 59.9998H52C54.1217 59.9998 56.1566 59.157 57.6569 57.6567C59.1571 56.1564 60 54.1215 60 51.9998V22.3748C60 22.2754 59.9605 22.18 59.8902 22.1097C59.8198 22.0393 59.7245 21.9998 59.625 21.9998H4.375C4.27554 21.9998 4.18016 22.0393 4.10984 22.1097C4.03951 22.18 4 22.2754 4 22.3748V51.9998ZM47 25.9998C47.5933 25.9998 48.1734 26.1758 48.6667 26.5054C49.1601 26.8351 49.5446 27.3036 49.7716 27.8518C49.9987 28.3999 50.0581 29.0031 49.9424 29.5851C49.8266 30.167 49.5409 30.7016 49.1213 31.1211C48.7018 31.5407 48.1672 31.8264 47.5853 31.9422C47.0033 32.0579 46.4001 31.9985 45.852 31.7715C45.3038 31.5444 44.8352 31.1599 44.5056 30.6665C44.1759 30.1732 44 29.5932 44 28.9998C44 28.2042 44.3161 27.4411 44.8787 26.8785C45.4413 26.3159 46.2043 25.9998 47 25.9998ZM47 35.9998C47.5933 35.9998 48.1734 36.1758 48.6667 36.5054C49.1601 36.8351 49.5446 37.3036 49.7716 37.8518C49.9987 38.3999 50.0581 39.0031 49.9424 39.5851C49.8266 40.167 49.5409 40.7016 49.1213 41.1211C48.7018 41.5407 48.1672 41.8264 47.5853 41.9422C47.0033 42.0579 46.4001 41.9985 45.852 41.7715C45.3038 41.5444 44.8352 41.1599 44.5056 40.6665C44.1759 40.1732 44 39.5932 44 38.9998C44 38.2042 44.3161 37.4411 44.8787 36.8785C45.4413 36.3159 46.2043 35.9998 47 35.9998ZM37 25.9998C37.5933 25.9998 38.1734 26.1758 38.6667 26.5054C39.1601 26.8351 39.5446 27.3036 39.7716 27.8518C39.9987 28.3999 40.0581 29.0031 39.9424 29.5851C39.8266 30.167 39.5409 30.7016 39.1213 31.1211C38.7018 31.5407 38.1672 31.8264 37.5853 31.9422C37.0033 32.0579 36.4001 31.9985 35.852 31.7715C35.3038 31.5444 34.8352 31.1599 34.5056 30.6665C34.1759 30.1732 34 29.5932 34 28.9998C34 28.2042 34.3161 27.4411 34.8787 26.8785C35.4413 26.3159 36.2043 25.9998 37 25.9998ZM37 35.9998C37.5933 35.9998 38.1734 36.1758 38.6667 36.5054C39.1601 36.8351 39.5446 37.3036 39.7716 37.8518C39.9987 38.3999 40.0581 39.0031 39.9424 39.5851C39.8266 40.167 39.5409 40.7016 39.1213 41.1211C38.7018 41.5407 38.1672 41.8264 37.5853 41.9422C37.0033 42.0579 36.4001 41.9985 35.852 41.7715C35.3038 41.5444 34.8352 41.1599 34.5056 40.6665C34.1759 40.1732 34 39.5932 34 38.9998C34 38.2042 34.3161 37.4411 34.8787 36.8785C35.4413 36.3159 36.2043 35.9998 37 35.9998ZM37 45.9998C37.5933 45.9998 38.1734 46.1758 38.6667 46.5054C39.1601 46.8351 39.5446 47.3036 39.7716 47.8518C39.9987 48.3999 40.0581 49.0031 39.9424 49.5851C39.8266 50.167 39.5409 50.7016 39.1213 51.1211C38.7018 51.5407 38.1672 51.8264 37.5853 51.9422C37.0033 52.0579 36.4001 51.9985 35.852 51.7715C35.3038 51.5444 34.8352 51.1599 34.5056 50.6665C34.1759 50.1732 34 49.5932 34 48.9998C34 48.2042 34.3161 47.4411 34.8787 46.8785C35.4413 46.3159 36.2043 45.9998 37 45.9998ZM27 35.9998C27.5933 35.9998 28.1734 36.1758 28.6667 36.5054C29.1601 36.8351 29.5446 37.3036 29.7716 37.8518C29.9987 38.3999 30.0581 39.0031 29.9424 39.5851C29.8266 40.167 29.5409 40.7016 29.1213 41.1211C28.7018 41.5407 28.1672 41.8264 27.5853 41.9422C27.0033 42.0579 26.4001 41.9985 25.8519 41.7715C25.3038 41.5444 24.8352 41.1599 24.5056 40.6665C24.1759 40.1732 24 39.5932 24 38.9998C24 38.2042 24.3161 37.4411 24.8787 36.8785C25.4413 36.3159 26.2044 35.9998 27 35.9998ZM27 45.9998C27.5933 45.9998 28.1734 46.1758 28.6667 46.5054C29.1601 46.8351 29.5446 47.3036 29.7716 47.8518C29.9987 48.3999 30.0581 49.0031 29.9424 49.5851C29.8266 50.167 29.5409 50.7016 29.1213 51.1211C28.7018 51.5407 28.1672 51.8264 27.5853 51.9422C27.0033 52.0579 26.4001 51.9985 25.8519 51.7715C25.3038 51.5444 24.8352 51.1599 24.5056 50.6665C24.1759 50.1732 24 49.5932 24 48.9998C24 48.2042 24.3161 47.4411 24.8787 46.8785C25.4413 46.3159 26.2044 45.9998 27 45.9998ZM17 35.9998C17.5933 35.9998 18.1734 36.1758 18.6667 36.5054C19.1601 36.8351 19.5446 37.3036 19.7716 37.8518C19.9987 38.3999 20.0581 39.0031 19.9424 39.5851C19.8266 40.167 19.5409 40.7016 19.1213 41.1211C18.7018 41.5407 18.1672 41.8264 17.5853 41.9422C17.0033 42.0579 16.4001 41.9985 15.8519 41.7715C15.3038 41.5444 14.8352 41.1599 14.5056 40.6665C14.1759 40.1732 14 39.5932 14 38.9998C14 38.2042 14.3161 37.4411 14.8787 36.8785C15.4413 36.3159 16.2044 35.9998 17 35.9998ZM17 45.9998C17.5933 45.9998 18.1734 46.1758 18.6667 46.5054C19.1601 46.8351 19.5446 47.3036 19.7716 47.8518C19.9987 48.3999 20.0581 49.0031 19.9424 49.5851C19.8266 50.167 19.5409 50.7016 19.1213 51.1211C18.7018 51.5407 18.1672 51.8264 17.5853 51.9422C17.0033 52.0579 16.4001 51.9985 15.8519 51.7715C15.3038 51.5444 14.8352 51.1599 14.5056 50.6665C14.1759 50.1732 14 49.5932 14 48.9998C14 48.2042 14.3161 47.4411 14.8787 46.8785C15.4413 46.3159 16.2044 45.9998 17 45.9998Z"
                                                fill="#FFC182"
                                            />
                                        </g>
                                    </svg>

                                    {/* <Image src={CalendarImg} alt="calendar" /> */}
                                    {/* <img src="/images/calendar.svg" /> */}

                                    <p className={styles.contacts_text}>We accept your orders:</p>
                                    <p className={styles.contacts_details}>From 10:30 to 21:30</p>
                                </div>
                            </li>
                            <li className={styles.contacts_item}>
                                <a className={styles.contacts_link} href="tel: +1 285 864 3512">
                                    <svg
                                        width="50"
                                        height="50"
                                        viewBox="0 0 50 50"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M30.0675 3.48248C30.1354 3.22866 30.2527 2.99071 30.4125 2.78221C30.5724 2.57371 30.7718 2.39876 30.9993 2.26736C31.2269 2.13595 31.4781 2.05067 31.7385 2.01637C31.999 1.98207 32.2637 1.99944 32.5175 2.06748C36.2252 3.03485 39.608 4.97309 42.3174 7.68257C45.0269 10.3921 46.9651 13.7748 47.9325 17.4825C48.0006 17.7363 48.0179 18.001 47.9836 18.2615C47.9493 18.522 47.8641 18.7731 47.7326 19.0007C47.6012 19.2282 47.4263 19.4276 47.2178 19.5875C47.0093 19.7474 46.7713 19.8646 46.5175 19.9325C46.3486 19.9769 46.1747 19.9995 46 20C45.5596 20.0001 45.1315 19.8549 44.7821 19.5868C44.4327 19.3188 44.1815 18.9429 44.0675 18.5175C43.2789 15.4903 41.6972 12.7283 39.4855 10.5161C37.2738 8.30391 34.512 6.72166 31.485 5.93248C31.231 5.86486 30.9928 5.74782 30.784 5.58805C30.5752 5.42828 30.4 5.22891 30.2683 5.00136C30.1367 4.77381 30.0512 4.52254 30.0167 4.26191C29.9823 4.00129 29.9995 3.73643 30.0675 3.48248ZM29.485 13.9325C32.9325 14.8525 35.1475 17.07 36.0675 20.5175C36.1815 20.9429 36.4327 21.3188 36.7821 21.5868C37.1315 21.8549 37.5596 22.0001 38 22C38.1747 21.9995 38.3486 21.9769 38.5175 21.9325C38.7713 21.8646 39.0093 21.7474 39.2178 21.5875C39.4263 21.4276 39.6012 21.2282 39.7326 21.0007C39.8641 20.7731 39.9493 20.522 39.9836 20.2615C40.0179 20.001 40.0006 19.7363 39.9325 19.4825C38.6525 14.6925 35.3075 11.3475 30.5175 10.0675C30.2637 9.99969 29.9991 9.98254 29.7387 10.017C29.4783 10.0515 29.2272 10.1369 28.9998 10.2685C28.7724 10.4 28.5732 10.575 28.4134 10.7835C28.2537 10.992 28.1366 11.23 28.0688 11.4837C28.001 11.7375 27.9838 12.0022 28.0183 12.2626C28.0528 12.523 28.1382 12.774 28.2697 13.0014C28.4013 13.2288 28.5763 13.4281 28.7848 13.5878C28.9933 13.7476 29.2312 13.8647 29.485 13.9325ZM47.5925 33.615L35.815 28.3375L35.7825 28.3225C35.1711 28.061 34.5041 27.956 33.8419 28.0171C33.1798 28.0782 32.5433 28.3035 31.99 28.6725C31.9249 28.7155 31.8623 28.7622 31.8025 28.8125L25.7175 34C21.8625 32.1275 17.8825 28.1775 16.01 24.3725L21.205 18.195C21.255 18.1325 21.3025 18.07 21.3475 18.0025C21.7086 17.4507 21.9277 16.8183 21.9852 16.1614C22.0428 15.5045 21.9371 14.8436 21.6775 14.2375V14.2075L16.385 2.40998C16.0419 1.61814 15.4518 0.95852 14.703 0.529579C13.9541 0.100637 13.0867 -0.0746153 12.23 0.0299824C8.84245 0.475749 5.73297 2.1394 3.48236 4.71022C1.23174 7.28104 -0.00610233 10.5832 2.26216e-05 14C2.26216e-05 33.85 16.15 50 36 50C39.4168 50.0061 42.719 48.7683 45.2898 46.5176C47.8606 44.267 49.5243 41.1576 49.97 37.77C50.0748 36.9136 49.8999 36.0464 49.4715 35.2976C49.043 34.5487 48.3839 33.9585 47.5925 33.615Z" />
                                    </svg>
                                    <p className={styles.contacts_text}>
                                        Free of charge from any numbers:
                                    </p>
                                    <p className={styles.contacts_details}>+1 285 864 3512</p>
                                </a>
                            </li>
                            <li className={styles.contacts_item}>
                                <a
                                    className={styles.contacts_link}
                                    href="mailto: freshhub@gmail.com"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="64"
                                        height="64"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                    >
                                        <path d="M56 32.3465C55.6 32.3732 55.2267 32.5065 54.96 32.7998L52.2934 35.4665L57.76 40.7998L60.4267 38.1332C61.0134 37.5732 61.0134 36.6398 60.4267 36.0798L57.12 32.7998C56.8535 32.5234 56.4904 32.361 56.1067 32.3465M50.7734 37.0132L34.6667 53.1732V58.6665H40.16L56.32 42.4798M53.3334 10.6665H10.6667C9.25222 10.6665 7.89566 11.2284 6.89547 12.2286C5.89528 13.2288 5.33337 14.5853 5.33337 15.9998V47.9998C5.33337 49.4143 5.89528 50.7709 6.89547 51.7711C7.89566 52.7713 9.25222 53.3332 10.6667 53.3332H29.3334V50.9598L51.3067 29.0398C52.56 27.7332 54.2934 27.0132 56.1067 27.0132C57.0134 27.0132 57.92 27.1732 58.7734 27.5198V15.9998C58.7734 13.0132 56.32 10.6665 53.3334 10.6665ZM53.3334 21.3332L32 34.6665L10.6667 21.3332V15.9998L32 29.3332L53.3334 15.9998" />
                                    </svg>
                                    <p className={styles.contacts_text}>Write to us:</p>
                                    <p className={styles.contacts_details}>freshhub@gmail.com</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
