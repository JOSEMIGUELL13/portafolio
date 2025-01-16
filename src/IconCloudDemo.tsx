import './IconCloud.css';

const slugs = [
  "typescript",
  "javascript",
  "react",
  "android",
  "html5",
  "css",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "mongoDB",
  "git",
  "github",
  "python",
  "androidstudio",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="icon-cloud">
      {slugs.map((slug) => (
        <img
          key={slug}
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={slug}
          className="icon"
        />
      ))}
    </div>
  );
}
