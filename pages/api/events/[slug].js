const { events } = require("./data.json");

export default function handler(req, res) {
  const data = events.filter((ev) => ev.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.setHeader("allow", ["GET"]);
    res.status(405).json({ message: `${req.method} method is not allowed` });
  }
}
