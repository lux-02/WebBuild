import { useState } from "react";
import { Box, Button, Input, Text, VStack, Link } from "@chakra-ui/react";
import NextLink from "next/link";

const HomePage = () => {
  const [websiteType, setWebsiteType] = useState("");
  const [features, setFeatures] = useState("");
  const [mood, setMood] = useState("");
  const [content, setContent] = useState("");
  const [pageName, setPageName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInputs = {
      websiteType,
      features,
      mood,
      content,
    };

    try {
      // SRS 생성
      const srsRes = await fetch("/api/generate-srs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInputs),
      });
      const { srs } = await srsRes.json();
      console.log(srs);

      // 코드 생성
      const codeRes = await fetch("/api/generate-code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ srs }),
      });
      const { code } = await codeRes.json();

      // 페이지 생성
      const generatedPageName = `generated-page-${Date.now()}.js`;
      const pageRes = await fetch("/api/create-page", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, pageName: generatedPageName }),
      });
      const data = await pageRes.json();
      setPageName(data.pageName);
    } catch (error) {
      console.error("Error during page generation:", error);
    }
  };

  return (
    <Box className="min-h-screen bg-gray-100 p-6">
      <VStack spacing={4} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          Website Builder
        </Text>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="stretch">
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 홈페이지를 만들고 싶나요?
              </Text>
              <Input
                value={websiteType}
                onChange={(e) => setWebsiteType(e.target.value)}
                placeholder="예: 블로그, 온라인 스토어, 포트폴리오"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 기능을 넣고 싶나요?
              </Text>
              <Input
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                placeholder="예: 검색, 회원가입, 채팅"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 분위기가 좋을까요?
              </Text>
              <Input
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="예: 모던, 클래식, 미니멀리즘"
              />
            </Box>
            <Box>
              <Text fontSize="lg" fontWeight="medium">
                어떤 내용이 포함되었으면 좋을까요?
              </Text>
              <Input
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="예: 블로그 글, 제품 목록, 포트폴리오 작품"
              />
            </Box>
            <Button type="submit" colorScheme="blue" width="full">
              제출
            </Button>
          </VStack>
        </form>
        {pageName && (
          <Box>
            <Text fontSize="lg" fontWeight="medium">
              페이지가 생성되었습니다:
            </Text>
            <NextLink href={`/${pageName.replace(".js", "")}`} passHref>
              <Link color="blue.500">
                여기를 클릭하여 새 페이지를 확인하세요
              </Link>
            </NextLink>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default HomePage;
