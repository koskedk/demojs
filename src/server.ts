import app from './app';

const port = 3000;

app.listen(port,()=> {
    console.log(`started listening on http://localhost:${port}`);
});