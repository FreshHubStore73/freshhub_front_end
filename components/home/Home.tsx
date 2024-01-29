import React from "react";
import styles from "./home.module.scss";
import { List } from "@mui/material";

const Home = () => {
  return (
    // <h1 className={styles.title}>FreshHub | HomePage</h1>
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.main_context}>
          {/* <h1 className={styles.main_title}>Hot Delicious Fresh</h1> */}
          <h1 className={styles.main_title}>Hot</h1>
          <h1 className={styles.main_title}> Delicious</h1>
          <h1 className={styles.main_title}>Fresh</h1>
          <p className={styles.main_description}>Free delivery to everyone</p>
          <a className={styles.main_btn} src="#">
            Learn more
          </a>
        </div>

        <div className={styles.main_img}>
          <img
            src="/images/main-picture.jpg
                "
          />
        </div>
      </main>
      <section className={styles.about}>
        <h2 className={styles.title}>About us</h2>
        <div className={styles.about_container}>
          <div className={styles.about_img}>
            <img
              src="/images/about.png
                "
            />
          </div>
          <ul className={styles.about_list}>
            <li className={styles.about_item}>
              <h3 className={styles.about_item__title}>We are FreshHub</h3>
              <p className={styles.about_item__desc}>
                Modern food delivery service from New York, which was founded in
                May 2019. Much has changed since then, but one thing remains
                stable: we continue to confidently follow the path of creating a
                vibrant brand that will become a way of life for tens and even
                hundreds of thousands of people.
              </p>
            </li>
            <li className={styles.about_item}>
              <h3 className={styles.about_item__title}>Our mission</h3>
              <p className={styles.about_item__desc}>
                Help clients free up time for something truly important. Spend
                your energy on useful things, and the time saved on cooking is
                better spent on your development, family or leisure.
              </p>
            </li>
            <li className={styles.about_item}>
              <h3 className={styles.about_item__title}>
                FreshHub is a favorite food delivery
              </h3>
              <p className={styles.about_item__desc}>
                It's a pleasure, a small holiday, a great idea. This is the
                right choice, pleasure and good mood. This is what you were
                looking for and finally found. Somehow so.
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.delivery}>
        <h2 className={styles.title}>Delivery and Payment</h2>
        <ul className={styles.delivery_list}>
          <li className={styles.delivery_item}>
            <div className={styles.delivery_img}>
              <img src="/images/note.png" />
            </div>
            <p className={styles.delivery_desc}>
              Place an order and receive free delivery as a gift
            </p>
          </li>
          <li className={styles.delivery_item}>
            <div className={styles.delivery_img}>
              <img src="/images/phone.png" />
            </div>
            <p className={styles.delivery_desc}>
              Then we will call you back to clarify the information
            </p>
          </li>
          <li className={styles.delivery_item}>
            <div className={styles.delivery_img}>
              <img src="/images/delivery.png" />
            </div>
            <p className={styles.delivery_desc}>
              We will deliver your order in 55 minutes and you pay in cash or by
              card
            </p>
          </li>
        </ul>
      </section>
      <section className={styles.contacts}>
        <h2 className={styles.title}>Contact us</h2>
        <div className={styles.contacts_container}>
          <div className={styles.contacts_img}>
            <img src="/images/contact.png" />
          </div>
          <div className={styles.contacts_info}>
            <ul className={styles.contacts_list}>
              <li className={styles.contacts_item}>
                <div className={styles.contacts_link}>
                  <img src="/images/calendar.svg" />
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
                  href="mailto: fresshub@gmail.com"
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
                  <p className={styles.contacts_details}>fresshub@gmail.com</p>
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
