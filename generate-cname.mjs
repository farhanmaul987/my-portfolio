import { writeFileSync, mkdirSync, existsSync } from "fs";

const distPath = "./dist";
const cnameContent = "farhanmaul.my.id";

if (!existsSync(distPath)) {
  mkdirSync(distPath, { recursive: true });
}

writeFileSync(`${distPath}/CNAME`, cnameContent);
console.log("✅ CNAME file created in dist/");
