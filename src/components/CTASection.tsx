import { Box, Container, Heading, Text, Button, VStack, Flex, Icon, IconButton, SimpleGrid, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ArrowRight, Sparkles, Image, Video, ArrowUp } from "lucide-react";

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const CTASection = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black" position="relative" overflow="hidden">
      {/* Background Glow */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w={{ base: "300px", md: "800px" }}
        h={{ base: "300px", md: "800px" }}
        bgGradient="radial(brand.500, transparent 70%)"
        opacity="0.1"
        filter="blur(100px)"
        pointerEvents="none"
        zIndex="0"
      />

      <Container maxW="container.md" position="relative" zIndex="1">
        <VStack spacing={12} textAlign="center">
          <Box>
            <Heading
              as="h2"
              size={{ base: "2xl", md: "4xl" }}
              fontWeight="black"
              mb={6}
              color="white"
              lineHeight="1.1"
            >
              Start Turning <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Your Words into Videos</Text>
            </Heading>
            
            <VStack spacing={4}>
              <Text color="gray.300" fontSize={{ base: "lg", md: "xl" }} fontWeight="medium">
                The fastest way to create high-converting commercial videos.
              </Text>
              <Text color="gray.400" fontSize={{ base: "lg", md: "xl" }}>
                Join 100,000+ creators turning scripts into viral reality.
              </Text>
            </VStack>
          </Box>

          <Box
            position="relative"
            display="inline-block"
          >
            {/* Glow effect behind the button */}
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              w="140%"
              h="250%"
              bgGradient="radial(circle, rgba(255,107,107,0.1) 0%, rgba(78,205,196,0.1) 40%, rgba(162,155,254,0.05) 60%, transparent 80%)"
              filter="blur(50px)"
              zIndex="-1"
            />
            
            <Box
              position="relative"
              p="1.5px"
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
                animation: `${rotate} 4s linear infinite`,
              }}
            >
              <Button
                size="lg"
                height="64px"
                px="14"
                fontSize="24px"
                fontWeight="900"
                bg="black"
                color="white"
                borderRadius="full"
                position="relative"
                zIndex="1"
                rightIcon={<Icon as={ArrowRight} w={6} h={6} color="#A29BFE" />}
                _hover={{ bg: "black" }}
                _active={{ bg: "black" }}
                letterSpacing="-0.02em"
              >
                Create Video with AI Now
              </Button>
            </Box>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default CTASection;
