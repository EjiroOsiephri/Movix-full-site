const axios = require("axios");

async function runCronJob() {
  try {
    const response = await axios.get("https://api.example.com/some-endpoint");
    console.log("Cron job executed successfully:", response.data);
  } catch (error) {
    console.error("Error executing cron job:", error);
  }
}

runCronJob();
