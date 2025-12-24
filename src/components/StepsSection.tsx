import { Box, Container, Heading, Text, SimpleGrid, VStack, Badge } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const steps = [
  {
    number: "STEP 1",
    title: "Input Your Text",
    description: "Paste your script, enter a prompt, or upload a document.",
  },
  {
    number: "STEP 2",
    title: "AI Visualization",
    description: "The Agent generates a storyboard, selects AI avatars, and matches stock or AI footage to your words.",
  },
  {
    number: "STEP 3",
    title: "Edit & Export",
    description: "Tweak the script to update visuals instantly, then export in 9:16 or 16:9 format.",
  },
];

const StepsSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} px="6" bg="black" position="relative">
      <Container maxW="container.xl">
        <VStack spacing={4} textAlign="center" mb={16}>
          <Badge
            bg="rgba(128, 90, 213, 0.1)"
            color="#805AD5"
            px={4}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
            letterSpacing="wider"
            mb={2}
          >
            HOW IT WORKS
          </Badge>
          <Heading as="h2" size="2xl" fontWeight="black" color="white">
            How to Convert{" "}
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">
              Text to Video
            </Text>{" "}
            in 3 Steps
          </Heading>
          <Text fontSize="lg" color="gray.500" maxW="2xl">
            Go from blank page to published video in under 5 minutes.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
          {steps.map((step, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              bg="#0d0d0d"
              borderRadius="3xl"
              p={10}
              border="1px solid"
              borderColor="whiteAlpha.100"
              position="relative"
              _hover={{
                borderColor: "#805AD5",
                transform: "translateY(-5px)",
                bg: "rgba(128, 90, 213, 0.02)"
              }}
              style={{ transition: "all 0.3s ease" }}
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
                <Heading size="lg" color="white" fontWeight="bold">
                  {step.title}
                </Heading>
                <Text color="gray.500" fontSize="md" lineHeight="tall">
                  {step.description}
                </Text>
              </VStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default StepsSection;
