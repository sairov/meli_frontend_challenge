import app from './app';


if (!process.env.PORT) {
    process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);


/**
 * Server Initialize
 */

app.listen(PORT, () => {
    console.log(`⚡️[app]: http://localhost:${PORT}`);
  });
  
  