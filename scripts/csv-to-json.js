const fs = require("fs");
const { parse } = require("csv-parse/sync");

// caminhos dos arquivos
const csvPath = "dados/events.csv";
const jsonPath = "src/data/events.json";

// lê o CSV
const csvContent = fs.readFileSync(csvPath, "utf-8");

// converte CSV em objeto
const records = parse(csvContent, {
  columns: true,
  skip_empty_lines: true,
});

// filtra só eventos validados
const events = records
  .filter(event => event.validated?.toLowerCase() === "yes")
  .map(event => ({
    title: event.title,
    date: event.date,
    time: event.time,
    location: event.location,
    category: event.category,
    summary: event.summary || "",
    signup_link: event.signup_link,
    source: event.source,
  }));

// garante que a pasta exista
fs.mkdirSync("src/data", { recursive: true });

// grava o JSON final
fs.writeFileSync(jsonPath, JSON.stringify(events, null, 2));

console.log("✅ events.json gerado com sucesso!");
