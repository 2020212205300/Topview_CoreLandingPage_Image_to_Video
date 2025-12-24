import { Box, Container, Heading, Text, Flex, Button, IconButton, Icon, Textarea, VStack } from "@chakra-ui/react";
import { Image, Video, ArrowUp, Sparkles, ChevronRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const HeroSection = () => {
  return (
    <Box as="section" pt="40" pb="20" px="6">
      <Container maxW="container.xl" textAlign="center">
        {/* Main Title */}
        <MotionHeading
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          as="h1"
          size={{ base: "2xl", md: "4xl" }}
          fontWeight="black"
          mb="6"
        >
          <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
            Text to Video Generator
          </Text>
        </MotionHeading>

        {/* Description */}
        <MotionText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          color="whiteAlpha.900"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          maxW="3xl"
          mx="auto"
          mb="12"
          lineHeight="tall"
        >
          Turn Scripts, Prompts, and Ideas into Ready-to-Publish Videos.
        </MotionText>

        {/* Input Box */}
        <Box maxW="3xl" mx="auto" mb="10">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            bg="whiteAlpha.100"
            backdropFilter="blur(20px)"
            borderRadius="3xl"
            p="8"
            border="1px solid"
            borderColor="whiteAlpha.200"
            textAlign="left"
          >
            <VStack align="start" spacing={4} w="full">
              <Text color="white" fontWeight="bold" fontSize="lg">
                Describe your video idea or paste your script...
              </Text>
              
              <Textarea
                placeholder="Example: Create a 30s TikTok ad for a new organic coffee brand. Energetic tone, focusing on morning routine..."
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                borderRadius="xl"
                color="white"
                _placeholder={{ color: "gray.500" }}
                _hover={{ borderColor: "whiteAlpha.300" }}
                _focus={{ borderColor: "brand.500", boxShadow: "none" }}
                minH="120px"
                p={4}
                resize="none"
              />

              <Flex w="full" alignItems="center" gap="3" pt={2}>
                <Button
                  leftIcon={<Icon as={Image} w={4} h={4} />}
                  variant="ghost"
                  color="gray.400"
                  bg="whiteAlpha.100"
                  _hover={{ color: "white", bg: "whiteAlpha.200" }}
                  size="sm"
                  borderRadius="full"
                >
                  Add Image & Link
                </Button>
                <Button
                  leftIcon={<Icon as={Video} w={4} h={4} />}
                  variant="ghost"
                  color="gray.400"
                  bg="whiteAlpha.100"
                  _hover={{ color: "white", bg: "whiteAlpha.200" }}
                  size="sm"
                  borderRadius="full"
                >
                  Reference Video
                </Button>
                <Box flex="1" />
                <Button
                  rightIcon={<Icon as={ArrowUp} w={4} h={4} />}
                  bg="brand.500"
                  color="white"
                  px={8}
                  borderRadius="full"
                  _hover={{ bg: "brand.600", transform: "translateY(-2px)" }}
                  transition="all 0.2s"
                >
                  Generate Video
                </Button>
              </Flex>
            </VStack>
          </MotionBox>
        </Box>

        {/* CTA Button */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Button
            size="lg"
            bg="white"
            color="black"
            px={10}
            height="60px"
            fontSize="xl"
            fontWeight="black"
            borderRadius="full"
            _hover={{ transform: "scale(1.05)", bg: "whiteAlpha.900" }}
            transition="all 0.3s"
          >
            Start Creating for Free
          </Button>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default HeroSection;
