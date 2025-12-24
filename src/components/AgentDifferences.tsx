import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Button } from "@chakra-ui/react";
import { Camera, Scissors } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const useCases = [
  {
    role: "The Content Marketer",
    challenge: "How to turn a 2,000-word blog post into a TikTok video?",
    solutionTitle: "Blog to Video Automation",
    description: "I used to spend hours summarizing articles. Topview's agent extracted the key points from my text and turned them into a 60s viral summary video automatically.",
    cta: "Repurpose Content",
    icon: Scissors,
    color: "#805AD5",
    bg: "rgba(128, 90, 213, 0.05)"
  },
  {
    role: "The Dropshipper",
    challenge: "How to test a product idea without inventory?",
    solutionTitle: "Prompt to Product Demo",
    description: "I didn't have the product yet. I typed a detailed description into Topview, and it generated a realistic usage scenario video that I used to test ads.",
    cta: "Test Product Ideas",
    icon: Camera,
    color: "#319795",
    bg: "rgba(49, 151, 149, 0.05)"
  }
];

const AgentDifferences = () => {
  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl" position="relative" zIndex="1">
        <VStack spacing={4} textAlign="center" mb={16}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" size="2xl" fontWeight="black" mb="4" color="white">
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
                Text to Video Generator
              </Text>{" "}
              Use Cases
            </Heading>
            <Text fontSize="lg" color="gray.500">
              Common challenges solved by AI-powered video creation
            </Text>
          </MotionBox>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} maxW="4xl" mx="auto">
          {useCases.map((useCase, index) => (
            <MotionBox
              key={useCase.solutionTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={8}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                bg: useCase.bg,
                opacity: 0.5,
                pointerEvents: "none"
              }}
              _hover={{
                borderColor: useCase.color,
                transform: "translateY(-5px)",
              }}
              style={{ transition: "0.3s" }}
            >
              <VStack align="start" spacing={6} position="relative" zIndex="1" h="full">
                {/* Icon Box */}
                <Box 
                  p={3} 
                  borderRadius="xl" 
                  border="1px solid" 
                  borderColor={useCase.color}
                  bg="black"
                  boxShadow={`0 0 15px ${useCase.color}33`}
                >
                  <Icon as={useCase.icon} w={6} h={6} color={useCase.color} />
                </Box>

                <VStack align="start" spacing={3} flex="1">
                  <Text color="gray.500" fontSize="sm" fontWeight="medium">
                    {useCase.challenge}
                  </Text>
                  <Heading size="md" color="white" fontWeight="bold" lineHeight="tall">
                    {useCase.solutionTitle}
                  </Heading>
                  <Text color="gray.500" fontSize="md" lineHeight="tall">
                    {useCase.description}
                  </Text>
                </VStack>

                <Button
                  w="full"
                  bg="whiteAlpha.50"
                  color="white"
                  variant="outline"
                  borderColor="whiteAlpha.100"
                  borderRadius="xl"
                  py={6}
                  fontWeight="bold"
                  fontSize="sm"
                  _hover={{
                    bg: "whiteAlpha.100",
                    borderColor: useCase.color
                  }}
                  transition="0.3s"
                >
                  {useCase.cta}
                </Button>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AgentDifferences;
