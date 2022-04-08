module.exports = {
  locales: ["ja", "en"],
  defaultLocale: "ja",
  pages: {
    "*": ["common"],
    "/": ["top"],
    "/works": ["works"],
    "/works/*": ["work"],
    "/posts/*": ["post"],
    "/posts": ["posts"],
    "/contact": ["contact"]
  }
}