import { Box, Container, Heading, Text, Button, VStack, Flex, Icon, IconButton, SimpleGrid, HStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { ArrowRight, Sparkles, Image, Video, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const flow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const MotionBox = motion(Box);

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
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              fontWeight="black"
              mb={6}
              color="white"
              lineHeight="shorter"
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
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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
              _before={{
                content: '""',
                position: "absolute",
                top: "-150%",
                left: "-150%",
                width: "400%",
                height: "400%",
                background: "conic-gradient(from 0deg, transparent 0 15%, #FF6B6B 20%, #4ECDC4 30%, transparent 35% 65%, #A29BFE 70%, #4ECDC4 80%, transparent 85% 100%)",
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
                cursor="default"
                pointerEvents="none"
                transition="none"
                letterSpacing="-0.02em"
              >
                Create Video with AI Now
              </Button>
            </Box>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default CTASection;
