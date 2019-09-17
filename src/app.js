import express from 'express';

import snsRoutes from './http/routes/snsRoutes';
import sqsRoutes from './http/routes/sqsRoutes';

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/api/notification', snsRoutes);
app.use('/api/queue', sqsRoutes);

app.listen(PORT, () => console.log('Listening on port', PORT));