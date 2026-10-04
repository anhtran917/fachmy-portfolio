export default function manifest() {
  return {
    name:             "Fachmy Kabila — Full Stack Engineer",
    short_name:       "Fachmy",
    description:      "Full Stack Engineer specializing in React, Next.js, C#/.NET, ASP.NET Core, and SQL.",
    start_url:        "/",
    display:          "standalone",
    background_color: "#080808",
    theme_color:      "#ff6b1a",
    lang:             "en",
    icons: [
      { src: "/photo/favicon.png", sizes: "192x192", type: "image/png" },
      { src: "/photo/favicon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
