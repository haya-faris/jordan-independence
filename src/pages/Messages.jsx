import React, { useEffect, useState } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const [form, setForm] = useState({ name: '', text: '' });
  const [loading, setLoading] = useState(false);

  // Fetch messages from API
  const fetchMessages = async () => {
    const res = await fetch('http://localhost:5000/api/messages');
    const data = await res.json();
    setMessages(data.reverse()); // Display the most recent first
  };

  useEffect(() => {
    fetchMessages();
  }, []);

// Update form data  
    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

// Send a new message  
    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return alert('الرجاء تعبئة الاسم والرسالة');
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('فشل الإرسال');
      setForm({ name: '', text: '' });
      fetchMessages();
    } catch (err) {
      alert(err.message);
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h2>رسائل حب وانتماء للأردن </h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="اسمك"
          value={form.name}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="text"
          placeholder="اكتب رسالتك"
          value={form.text}
          onChange={handleChange}
          style={styles.textarea}
          rows={4}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? 'جاري الإرسال...' : 'إرسال الرسالة'}
        </button>
      </form>

      <div style={styles.messages}>
        {messages.length === 0 && <p>لا توجد رسائل حتى الآن</p>}
        {messages.map(({ id, name, text, created_at }) => (
          <div key={id} style={styles.messageCard}>
            <p><strong>{name}</strong> قال:</p>
            <p>{text}</p>
            <small>{new Date(created_at).toLocaleString('ar-EG')}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: { maxWidth: 600, margin: 'auto', padding: 20, fontFamily: "'Cairo', sans-serif" },
  form: { display: 'flex', flexDirection: 'column', marginBottom: 30 },
  input: { padding: 10, marginBottom: 10, fontSize: 16 },
  textarea: { padding: 10, fontSize: 16, resize: 'vertical', marginBottom: 10 },
  button: { padding: 10, fontSize: 16, backgroundColor: '#007A3D', color: '#fff', border: 'none', cursor: 'pointer' },
  messages: { display: 'flex', flexDirection: 'column', gap: 15 },
  messageCard: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8 },
};

export default Messages;

