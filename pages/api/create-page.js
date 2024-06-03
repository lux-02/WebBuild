import fs from "fs";
import path from "path";
export default async function handler(req, res) {
  const { code, pageName } = req.body;

  // 파일 경로 설정
  const pagePath = path.join(process.cwd(), "pages", `${pageName}`);

  // 데이터가 문자열인지 확인
  if (typeof code !== "string") {
    return res.status(400).json({ error: "Invalid code format" });
  }

  // 코드 블록 구문 및 불필요한 텍스트 제거
  let cleanedCode = code.replace(/```(javascript)?/g, "").trim();

  // import 문을 추출하고 나머지 코드 분리
  const importStatements = [];
  const componentCodeLines = [];
  let isImport = true;

  cleanedCode.split("\n").forEach((line) => {
    if (isImport && line.startsWith("import ")) {
      importStatements.push(line);
    } else {
      isImport = false;
      componentCodeLines.push(line);
    }
  });

  const componentCode = `
${importStatements.join("\n")}

${componentCodeLines.join("\n")}

`;

  try {
    // 페이지 파일 생성
    fs.writeFileSync(pagePath, componentCode);
    res.status(200).json({ pageName });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating page" });
  }
}
