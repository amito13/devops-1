import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log('Received a request at /');
    console.log('Processing the request...');
     res.send('Hello DevOps!');
});

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

