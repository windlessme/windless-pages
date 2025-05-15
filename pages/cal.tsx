import Head from 'next/head';

export default function Cal() {
  return (
    <>
      <Head>
        <title>Windless 的行事曆</title>
        <meta name="description" content="Windless 的 Google 行事曆" />
      </Head>
      <main className="cal-full">
        <a href="/" className="back-btn">返回</a>
        <h1>Windless 的行事曆</h1>
        <div className="calendar-embed">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=hi%40windless.me&ctz=Asia%2FTaipei"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="Google Calendar"
            allowFullScreen
          ></iframe>
        </div>
      </main>
      <style jsx>{`
        .cal-full {
          width: 100vw;
          min-height: 100vh;
          background: #f5f6fa;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          position: relative;
        }
        .back-btn {
          position: absolute;
          top: 24px;
          right: 32px;
          background: #fff;
          color: #3b5998;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 6px 18px;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 500;
          box-shadow: 0 2px 8px rgba(60,60,60,0.04);
          transition: background 0.15s, border 0.15s;
          z-index: 10;
        }
        .back-btn:hover {
          background: #e9ebf0;
          border: 1px solid #3b5998;
        }
        h1 {
          text-align: center;
          margin: 0;
          padding: 24px 0 12px 0;
          color: #3b5998;
          font-size: 2rem;
        }
        .calendar-embed {
          flex: 1 1 0%;
          width: 100vw;
          min-height: 0;
          display: flex;
        }
        .calendar-embed iframe {
          flex: 1 1 0%;
          width: 100vw;
          height: calc(100vh - 70px);
          min-height: 400px;
          border: none;
          display: block;
        }
        @media (max-width: 600px) {
          .back-btn {
            top: 12px;
            right: 12px;
            padding: 5px 12px;
            font-size: 0.95rem;
          }
          h1 {
            padding: 12px 0 6px 0;
            font-size: 1.2rem;
          }
          .calendar-embed iframe {
            height: calc(100vh - 60px);
            min-height: 300px;
          }
        }
        html, body, #__next {
          height: 100%;
        }
      `}</style>
      <style global jsx>{`
        html, body, #__next {
          height: 100%;
        }
      `}</style>
    </>
  );
}
