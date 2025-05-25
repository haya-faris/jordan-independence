import React from 'react';

const History = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>نبذة عن استقلال الأردن</h2>
      <p style={styles.paragraph}>
        في 25 أيار 1946، أعلن الأردن استقلاله عن الانتداب البريطاني، وأُعلن الملك عبد الله الأول بن الحسين ملكاً على البلاد، لتبدأ المملكة الأردنية الهاشمية مسيرتها المستقلة.
      </p>

      <div style={styles.timeline}>
        <div style={styles.event}>
          <span style={styles.date}>1921</span>
          <p>تأسيس إمارة شرق الأردن بقيادة الأمير عبد الله الأول.</p>
        </div>
        <div style={styles.event}>
          <span style={styles.date}>1946</span>
          <p>الإعلان الرسمي لاستقلال المملكة الأردنية الهاشمية.</p>
        </div>
        <div style={styles.event}>
          <span style={styles.date}>1952</span>
          <p>تولي الملك الحسين بن طلال العرش.</p>
        </div>
        <div style={styles.event}>
          <span style={styles.date}>1999</span>
          <p>تولي الملك عبد الله الثاني بن الحسين الحكم.</p>
        </div>
      </div>

      <img
        src="/jo.jpg"
        alt="علم الأردن"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9f9f9',
    padding: '3rem',
    textAlign: 'center',
    fontFamily: "'Cairo', sans-serif",
    color: '#000',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#CE1126',
  },
  paragraph: {
    fontSize: '1.2rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: '1.8',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  event: {
    backgroundColor: '#fff',
    borderLeft: '4px solid #007A3D',
    padding: '1rem',
    width: '80%',
    textAlign: 'left',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    borderRadius: '8px',
  },
  date: {
    fontWeight: 'bold',
    color: '#000',
  },
  image: {
    marginTop: '2rem',
    width: '60%',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
  },
};

export default History;
