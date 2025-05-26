const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'messages.json');

// Retrieve messages
app.get('/api/messages', (req, res) => {
  fs.readFile(dataFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'فشل قراءة البيانات' });
    res.json(JSON.parse(data));
  });
});

// Add a new message
  app.post('/api/messages', (req, res) => {
  const { name, text } = req.body;
  if (!name || !text) return res.status(400).json({ error: 'الاسم والنص مطلوبان' });

  fs.readFile(dataFile, 'utf-8', (err, data) => {
    if (err) return res.status(500).json({ error: 'فشل قراءة البيانات' });

    let messages = JSON.parse(data);
    const newMessage = {
      id: messages.length ? messages[messages.length - 1].id + 1 : 1,
      name,
      text,
      created_at: new Date().toISOString()
    };
    messages.push(newMessage);

    fs.writeFile(dataFile, JSON.stringify(messages, null, 2), (err) => {
      if (err) return res.status(500).json({ error: 'فشل حفظ الرسالة' });
      res.status(201).json(newMessage);
    });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
