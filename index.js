import express from 'express';

const app = express();
app.get('/', (req, res) => {
    console.log('Received a request at /');
    cosnole.log('Processing the request...');
     res.send('Hello DevOps!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

