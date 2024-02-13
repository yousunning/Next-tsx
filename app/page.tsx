import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Hello&nbsp;
          <code className={styles.code}>Disney World</code>
        </p>
        <div>
          <a
            href="http://www.disney.co.kr/home/index.jsp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <code className={styles.code}>Disney World</code>
          </a>
        </div>
      </div>

      <div className={styles.center}></div>

      <div className={styles.grid}>
        <a
          href="https://www.instagram.com/disneykorea/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            disneyKorea <span>-&gt;</span>
          </h2>
          <p>예술 및 엔터테인먼트 디즈니코리아 공식 인스타그램</p>
        </a>

        <a
          href="https://www.instagram.com/marvelkorea/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            marvelKorea <span>-&gt;</span>
          </h2>
          <p>예술 및 엔터테인먼트 마블코리아 공식 인스타그램</p>
        </a>

        <a
          href="https://www.instagram.com/starwarskorea/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            starwarsKorea<span>-&gt;</span>
          </h2>
          <p>스타워즈 코리아 공식 인스타그램</p>
        </a>

        <a
          href="https://www.instagram.com/natgeokorea/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            natgeoKorea <span>-&gt;</span>
          </h2>
          <p>내셔널지오그래픽 코리아 공식 인스타그램</p>
        </a>
      </div>
    </main>
  );
}
