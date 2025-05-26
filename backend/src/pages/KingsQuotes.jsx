import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const quotes = [
  { id: 1, text: "نحن شعب لا يعرف الاستسلام.", king: "الملك حسين بن طلال" },
  { id: 2, text: "الوحدة هي سر قوتنا.", king: "الملك عبدالله الثاني" },
  { id: 3, text: "الشعب هو الأساس.", king: "الملك عبد الله الأول" },
  { id: 4, text: "الأردن هو القلب النابض للعروبة.", king: "الملك حسين بن طلال" },
  { id: 5, text: "القائد الحقيقي هو من يخدم شعبه بإخلاص.", king: "الملك عبدالله الثاني" },
  { id: 6, text: "علينا أن نعمل معًا من أجل مستقبل أفضل.", king: "الملك الحسين بن طلال" },
  { id: 7, text: "الشعب هو من يصنع التاريخ.", king: "الملك عبد الله الأول" },
  { id: 8, text: "الوطن يستحق التضحية من أجله.", king: "الشريف حسين بن علي" },
  { id: 9, text: "الوحدة العربية هي الطريق إلى المجد.", king: "الأمير زيد بن شاكر" },
  { id: 10, text: "حب الوطن من الإيمان.", king: "الشريف حسين بن علي" },
  { id: 11, text: "الوطن أغلى ما نملك، وعلينا حمايته بكل ما نملك.", king: "الأمير الحسن بن طلال" },
  { id: 12, text: "العلم والمعرفة هما سلاح الأمة.", king: "الأمير فيصل بن الحسين" },
  { id: 13, text: "النهوض بالأمة يبدأ من التعليم والثقافة.", king: "الملك عبدالله الثاني" },
  { id: 14, text: "حماية الوطن مسؤولية الجميع.", king: "الأمير حمزة بن الحسين" },
  { id: 15, text: "الوحدة والعدل أساس السلام.", king: "الملك عبد الله الأول" },
];

const KingsQuotes = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5, fontFamily: "'Cairo', sans-serif" }}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        اقتباسات الملوك
      </Typography>
      {quotes.map(({ id, text, king }) => (
        <Box key={id} sx={{ mb: 3, p: 3, boxShadow: 2, borderRadius: 2, backgroundColor: '#f5f5f5' }}>
          <Typography variant="body1" sx={{ fontSize: '1.2rem', fontWeight: '500', mb: 1 }}>
            "{text}"
          </Typography>
          <Typography variant="subtitle2" color="text.secondary" align="right">
            — {king}
          </Typography>
        </Box>
      ))}
    </Container>
  );
};

export default KingsQuotes;
