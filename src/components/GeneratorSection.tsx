import { Box, Container, Heading, Text, VStack, HStack, Icon, SimpleGrid, Badge, Flex } from "@chakra-ui/react";
import { Info } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const GeneratorSection = () => {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} px="6" bg="black">
      <Container maxW="container.lg">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          bg="whiteAlpha.50"
          border="1px solid"
          borderColor="whiteAlpha.100"
          borderRadius="3xl"
          p={{ base: 8, md: 12 }}
          position="relative"
          overflow="hidden"
          _before={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "2px",
            bgGradient: "linear(to-r, transparent, brand.500, transparent)",
          }}
        >
          {/* SEO Authority Indicator */}
          <HStack spacing={2} mb={6}>
            <Icon as={Info} color="brand.400" w={4} h={4} />
            <Text 
              color="brand.400" 
              fontSize="xs" 
              fontWeight="bold" 
              letterSpacing="widest" 
              textTransform="uppercase"
            >
              Definitive Guide
            </Text>
          </HStack>

          <VStack align="start" spacing={8} position="relative" zIndex={1}>
            <Heading
              as="h2"
              size="2xl"
              color="white"
              fontWeight="black"
              lineHeight="shorter"
              letterSpacing="tight"
            >
              What Is <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Text to Video Generator</Text>?
            </Heading>

            <Box position="relative">
              <Box 
                position="absolute" 
                left="-24px" 
                top="0" 
                bottom="0" 
                w="4px" 
                bg="brand.500" 
                borderRadius="full"
                display={{ base: "none", md: "block" }}
              />
              <Text 
                color="gray.300" 
                fontSize={{ base: "lg", md: "xl" }} 
                lineHeight="tall"
                maxW="3xl"
                fontWeight="medium"
              >
                Topview Text to Video Generator is a generative technology that converts natural language prompts or scripts into video content. Topview's AI Agent analyzes the semantic meaning of your text to automatically generate relevant visuals, select background music, add voiceovers, and edit scenes together—compressing weeks of video production into minutes.
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full" pt={6}>
              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="white" fontSize="lg">NLP Processing</Text>
                <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
                  Understands context, humor, and selling points to create resonant scripts.
                </Text>
              </VStack>

              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="white" fontSize="lg">Multi-Model Fusion</Text>
                <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
                  Combines Sora, Veo, and Nano Banana models for world-class visual output.
                </Text>
              </VStack>

              <VStack align="start" spacing={2}>
                <Text fontWeight="bold" color="white" fontSize="lg">Auto-Storyboarding</Text>
                <Text color="gray.400" fontSize="sm" lineHeight="relaxed">
                  Intelligently plans and edits scene sequences for maximum narrative impact.
                </Text>
              </VStack>
            </SimpleGrid>
          </VStack>

          {/* Decorative Background Glows */}
          <Box
            position="absolute"
            top="-20%"
            right="-10%"
            w="400px"
            h="400px"
            bg="brand.500"
            filter="blur(140px)"
            opacity="0.07"
            borderRadius="full"
            zIndex={0}
            pointerEvents="none"
          />
          <Box
            position="absolute"
            bottom="-20%"
            left="-10%"
            w="300px"
            h="300px"
            bg="purple.500"
            filter="blur(120px)"
            opacity="0.05"
            borderRadius="full"
            zIndex={0}
            pointerEvents="none"
          />
        </MotionBox>
      </Container>
    </Box>
  );
};

export default GeneratorSection;
