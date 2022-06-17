const { events } = require("./data.json");

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("allow", ["GET"]);
    res.status(405).json({ message: `${req.method} method is not allowed` });
  }
}
