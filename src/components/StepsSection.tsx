import { Box, Container, Heading, Text, SimpleGrid, VStack, Badge } from "@chakra-ui/react";

const steps = [
  {
    number: "STEP 1",
    title: "Upload Your Image",
    description: "Upload your product photo, brand asset, or any high-quality image.",
  },
  {
    number: "STEP 2",
    title: "AI Visualization",
    description: "The Agent analyzes your image and describes how you want it to move or animate.",
  },
  {
    number: "STEP 3",
    title: "Edit & Export",
    description: "Preview the animation, tweak the prompt if needed, then export in 9:16 or 16:9 format.",
  },
];

const StepsSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} px="6" bg="black" position="relative">
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
            Image to Video <br />
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              in 3 Steps
            </Text>
          </Heading>
          <Text fontSize="lg" color="gray.500" maxW="2xl">
            Go from blank page to published video in under 5 minutes.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {steps.map((step, index) => (
            <Box
              key={index}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={10}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              _hover={{
                borderColor: "#805AD5",
                bg: "rgba(128, 90, 213, 0.02)"
              }}
            >
              <VStack align="start" spacing={4}>
                <Text
                  fontSize="xs"
                  fontWeight="bold"
                  color="gray.500"
                  letterSpacing="widest"
                >
                  {step.number}
                </Text>
                <Heading as="h3" size="lg" color="white" fontWeight="bold">
                  {step.title}
                </Heading>
                <Text color="gray.500" fontSize="md" lineHeight="tall">
                  {step.description}
                </Text>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StepsSection;
