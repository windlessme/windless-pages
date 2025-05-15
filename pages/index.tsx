import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>個人履歷</title>
        <meta name="description" content="簡潔潔白的個人履歷頁面" />
      </Head>
      <main className="resume-container">
        <section className="header">
          <img src="https://gravatar.com/avatar/5b168d8b83a4f506cf9be7b9b86b7ffc2b7a8dee29e5f6c82f9720764fc05f4d?s=512" alt="Avatar" className="avatar" />
          <div>
            <h1>Windless</h1>
            <h2>@windlessme</h2>
            <div className="contact">
              <span>hi@windless.me</span> | <span>Taiwan, Taipei</span>
            </div>
          </div>
        </section>
        <section className="linktree">
          <a href="https://github.com/windlessme" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://discord.gg/Ua3vnuK8" target="_blank" rel="noopener noreferrer">Discord</a>
          <a href="https://t.me/windlessme" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://instagram.com/windlessme" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com/windlessme" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="/cal" className="calendar-link">Calendar</a>
        </section>
        <section className="section">
          <h3>關於我</h3>
          <p>
            嗨呀！我是 Windless，你也可以叫我無風，<br />
            自從被推下社群的坑後就逃不掉了，目前主要在 SITCON 裡跑跳，<br />
            偶爾會被抓去各種研討會跟社群活動。坑內又大又深，走一走可能會遇到，歡迎來找我！
          </p>
        </section>
        <section className="section">
          <h3>工作經歷</h3>
          <ul>
            <li>
              <strong>
                <a
                  href="https://cheapserver.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="company-link"
                >
                  超級快網路有限公司（CheapServer）
                </a>
              </strong>
              ／共同創辦、專案經理（2022 - 現在）
            </li>
          </ul>
        </section>
        <section className="section">
          <h3>社群參與</h3>
          <ul>
            <li>
              <strong>HITCON CMT 2025</strong>／行政組員
            </li>
            <li>
              <strong>
                <a href="https://sitcon.camp/2025" target="_blank" rel="noopener noreferrer">
                  SITCON Camp 2025
                </a>
              </strong>
              ／行政組長
            </li>
            <li>
              <strong>第六屆台灣網路維運論壇 TWNOG 6.0</strong>
            </li>
            <li>
              <strong>
                <a href="https://sitcon.org/2025" target="_blank" rel="noopener noreferrer">
                  SITCON 2025
                </a>
              </strong>
              ／行政組長
            </li>
            <li>
              <strong>
                <a href="https://sitcon.org/2024" target="_blank" rel="noopener noreferrer">
                  SITCON 2024
                </a>
              </strong>
              ／場務組組員
            </li>
            <li>
              <strong>CYBERSEC 臺灣資安大會 2024</strong>
            </li>
            <li>
              <strong>g0v Summit 台灣零時政府雙年會 2024</strong>
            </li>
            <li>
              <strong>
                  第55屆全國技能競賽分區技能競賽
              </strong>
              ／資訊與網路技術
            </li>
            <li>
              <strong>COSCUP 開源人年會 2024</strong>
            </li>
            <li>
              <strong>COSCUP 開源人年會 2023</strong>
            </li>
            <li>
              <strong>COSCUP 開源人年會 2022</strong>
            </li>
          </ul>
        </section>
      </main>
      <style jsx>{`
        body, html, #__next {
          background: #f5f6fa;
        }
        .resume-container {
          max-width: 720px;
          margin: 40px auto;
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 24px rgba(60,60,60,0.06);
          padding: 48px 32px;
          font-family: 'Segoe UI', 'Noto Sans TC', Arial, sans-serif;
          color: #222;
        }
        .header {
          display: flex;
          align-items: center;
          border-bottom: 1px solid #ececec;
          padding-bottom: 24px;
          margin-bottom: 32px;
        }
        .avatar {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
          background: #e0e0e0;
          margin-right: 32px;
        }
        h1 {
          margin: 0;
          font-size: 2.2rem;
          color: #222;
        }
        h2 {
          margin: 4px 0 12px 0;
          font-size: 1.2rem;
          color: #888;
          font-weight: 400;
        }
        .contact {
          color: #555;
          font-size: 1rem;
        }
        .section {
          margin-bottom: 32px;
        }
        .section h3 {
          margin-bottom: 12px;
          font-size: 1.1rem;
          color: #3b5998;
          letter-spacing: 1px;
        }
        .section ul {
          margin: 0;
          padding-left: 20px;
          list-style: none;
        }
        .section ul a {
          color: #3b5998;
          text-decoration: none;
          border-bottom: none;
          padding-bottom: 1px;
          transition: border-color 0.2s;
        }
        .section ul a.company-link {
          border-bottom: none;
          padding-left: 2px;
          padding-right: 2px;
        }
        .section ul a:hover,
        .section ul a.company-link:hover {
          text-decoration: underline;
          border-bottom: none;
        }
        .section ul a span[role="img"] {
          margin-right: 0;
          vertical-align: middle;
        }
        .item-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-bottom: 6px;
        }
        .item-row strong {
          min-width: 180px;
        }
        .role {
          color: #555;
          font-size: 1rem;
          margin-right: 8px;
        }
        .period {
          color: #888;
          font-size: 0.95rem;
        }
        .linktree {
          display: flex;
          gap: 20px;
          justify-content: flex-start;
          margin-bottom: 16px;
        }
        .linktree a {
          color: #3b5998;
          background: #f0f2f5;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 1rem;
          text-decoration: none;
          border: 1px solid #e0e0e0;
          transition: background 0.15s, border 0.15s;
        }
        .linktree a:hover {
          background: #e9ebf0;
          border: 1px solid #3b5998;
        }
        .linktree a.calendar-link {
          font-weight: bold;
        }
        @media (max-width: 600px) {
          .resume-container {
            padding: 24px 8px;
          }
          .header {
            flex-direction: column;
            align-items: flex-start;
          }
          .avatar {
            margin-right: 0;
            margin-bottom: 16px;
          }
        }
      `}</style>
      <style global jsx>{`
        body, html, #__next {
          background: #f5f6fa;
        }
      `}</style>
    </>
  );
}
