import { Box, Container, Heading, Text, VStack, HStack, Icon, SimpleGrid, Badge, Flex, Image, Button } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Info, Sparkles, ChevronRight } from "lucide-react";

const aiModels = [
  { name: "Sora", icon: "/Sora.svg" },
  { name: "Veo", icon: "/gemini-sparkle.svg" },
  { name: "Seedance", icon: "/seedance.svg" },
  { name: "Kling", icon: "/kling.svg" },
  { name: "Wan", icon: "/wan.svg" },
  { name: "Vidu", icon: "/vidu.svg" },
];

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const GeneratorSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={16} textAlign="center">
          {/* Header */}
          <VStack spacing={6} maxW="4xl" mx="auto">
            <Heading
              as="h2"
              size={{ base: "2xl", md: "4xl" }}
              color="white"
              fontWeight="black"
              lineHeight="1.1"
            >
              All-in-One <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Text to Video</Text> Using the Best AI Video Models
            </Heading>
            <Text 
              color="gray.400" 
              fontSize={{ base: "lg", md: "xl" }} 
              lineHeight="tall"
              fontWeight="medium"
            >
              Topview is not limited to a single AI engine. We integrate multiple state-of-the-art AI video models, allowing you to generate higher-quality videos for different use cases.
            </Text>
          </VStack>

          {/* Model Display Card */}
          <Box
            bg="whiteAlpha.50"
            border="1px solid"
            borderColor="whiteAlpha.100"
            borderRadius="4xl"
            p={{ base: 8, md: 16 }}
            w="full"
            position="relative"
            _before={{
              content: '""',
              position: "absolute",
              top: "-20%",
              left: "10%",
              right: "10%",
              bottom: "20%",
              bgGradient: "radial(circle, brand.500, transparent)",
              opacity: 0.05,
              filter: "blur(60px)",
              pointerEvents: "none",
            }}
          >
            <SimpleGrid columns={{ base: 2, sm: 3, md: 3, lg: 3 }} spacing={{ base: 6, md: 10 }}>
              {aiModels.map((model, index) => (
                <Box
                  key={model.name}
                  bg="black"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  borderRadius="2xl"
                  p={6}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  gap={4}
                  _hover={{ borderColor: "brand.500", transform: "translateY(-5px)", bg: "whiteAlpha.50" }}
                  transition="all 0.3s"
                >
                  <Box w="10" h="10" display="flex" alignItems="center" justifyContent="center">
                    <Image src={model.icon} alt={model.name} w="full" h="full" />
                  </Box>
                  <Text color="white" fontWeight="bold" fontSize="md">{model.name}</Text>
                </Box>
              ))}
            </SimpleGrid>

            <VStack spacing={6} mt={16}>
              <Text color="gray.500" fontSize="md" fontWeight="medium" maxW="2xl">
                This means better motion, better realism, and better results for marketing and ecommerce videos. One platform. Multiple AI models. One text input.
              </Text>
              
              <Box
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                position="relative"
                p="3px"
                borderRadius="full"
                overflow="hidden"
                display="inline-block"
                transition="all 0.3s"
                role="group"
                cursor="pointer"
                _hover={{ transform: "scale(1.05)" }}
                _before={{
                  content: '""',
                  position: "absolute",
                  top: "-150%",
                  left: "-150%",
                  right: "-150%",
                  bottom: "-150%",
                  background: "conic-gradient(from 0deg, #FF6B6B, #805AD5, #4ECDC4, #FF6B6B)",
                  animation: `${rotate} 3s linear infinite`,
                }}
              >
                <Button
                  size="lg"
                  height="60px"
                  px={10}
                  fontSize="lg"
                  fontWeight="black"
                  bg="black"
                  _hover={{ bg: "black" }}
                  _active={{ bg: "black" }}
                  color="white"
                  borderRadius="full"
                  position="relative"
                  zIndex="1"
                  rightIcon={<Icon as={ChevronRight} size={20} color="#A29BFE" />}
                >
                  Create Video with AI Now
                </Button>
              </Box>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default GeneratorSection;
