const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Hello World from the cloud!"
    });
});

const PORT = 3000;

app.listen(process.env.PORT || PORT, () => {
    console.log('Servidor rodando na porta ' + PORT)
})