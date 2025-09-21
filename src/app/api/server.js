export default function handler(req, res) {
  if (req.url === "/api/login" && req.method === "GET") {
    res.status(200).json({ message: "Logged in!" });
  } else if (req.url === "/api/register" && req.method === "POST") {
    res.status(200).json({ message: "Registered!" });
  } else {
    res.status(404).end();
  }
}
