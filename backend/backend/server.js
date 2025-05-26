const express = require('express');
const cors = require('cors');
const db = require('./database');

const app = express();
app.use(cors());
app.use(express.json());

// Get all messages
app.get('/api/messages', (req, res) => {
  db.all('SELECT * FROM messages ORDER BY created_at DESC', [], (err, rows) => {
    if (err) return res.status(500).json({ error: 'فشل في جلب الرسائل' });
    res.json(rows);
  });
});

// Add new message
app.post('/api/messages', (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) return res.status(400).json({ error: 'الاسم والنص مطلوبان' });

  const query = `INSERT INTO messages (name, text) VALUES (?, ?)`;
  db.run(query, [name, text], function (err) {
    if (err) return res.status(500).json({ error: 'فشل في إضافة الرسالة' });
    res.status(201).json({
      id: this.lastID,
      name,
      text,
      created_at: new Date().toISOString()
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
