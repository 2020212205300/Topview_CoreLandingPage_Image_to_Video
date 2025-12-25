import { Box, Container, Heading, Text, VStack, SimpleGrid, Flex, Icon, Button, Image, Badge } from "@chakra-ui/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const ImageVideoFeatures = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        {/* Main Header */}
        <VStack spacing={6} textAlign="center" mb={24}>
          <Heading
            as="h2"
            size={{ base: "2xl", md: "4xl" }}
            color="white"
            fontWeight="black"
            lineHeight="1.1"
            mb="6"
          >
            Image to Video AI <br />
            <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
              Features for Marketing
            </Text>
          </Heading>
          <Text color="gray.400" fontSize="xl" fontWeight="medium">
            Support for every professional creation workflow:
          </Text>
        </VStack>

        <VStack spacing={32}>
          {/* Feature 1: Natural & Realistic */}
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            align="center" 
            justify="space-between" 
            gap={16}
            w="full"
          >
            <VStack align="start" spacing={8} maxW={{ base: "full", lg: "xl" }} flex="1">
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="xl" color="white" fontWeight="bold">
                  More Natural & Realistic <br />
                  Image to Video Results
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Topview focuses on visual realism, solving the biggest pain point of image to video AI:
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {["Natural motion", "Stable scenes", "Professional, ad-ready visuals"].map((item) => (
                  <Flex key={item} align="center" gap={3}>
                    <Icon as={CheckCircle2} color="brand.500" w={5} h={5} />
                    <Text color="white" fontWeight="bold">{item}</Text>
                  </Flex>
                ))}
              </VStack>

              <Text color="brand.400" fontWeight="bold" fontSize="lg">
                Your images don’t just move — they look like real videos.
              </Text>
              
              <Button 
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                color="white" 
                borderColor="whiteAlpha.300" 
                borderRadius="full"
                px={8}
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
              >
                Try it now
              </Button>
            </VStack>
            
            <Box 
              flex="1.2" 
              w="full"
              borderRadius="3xl" 
              overflow="hidden" 
              bgGradient="linear(to-br, #FF6B6B22, #805AD522)"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                alt="Realistic Motion"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* Feature 2: Smooth Motion */}
          <Flex 
            direction={{ base: "column", lg: "row-reverse" }} 
            align="center" 
            justify="space-between" 
            gap={16}
            w="full"
          >
            <VStack align="start" spacing={8} maxW={{ base: "full", lg: "xl" }} flex="1">
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="xl" color="white" fontWeight="bold">
                  Smooth Character & <br />
                  Object Motion
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Unlike basic photo to video AI tools, Topview delivers:
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {["More consistent human movement", "Smoother gestures and transitions", "Less flickering and distortion"].map((item) => (
                  <Flex key={item} align="center" gap={3}>
                    <Icon as={CheckCircle2} color="brand.500" w={5} h={5} />
                    <Text color="white" fontWeight="bold">{item}</Text>
                  </Flex>
                ))}
              </VStack>

              <Box w="full">
                <Text color="gray.500" fontWeight="bold" mb={3} fontSize="sm" textTransform="uppercase" letterSpacing="widest">
                  Ideal for:
                </Text>
                <Flex wrap="wrap" gap={3}>
                  {["Product models", "Lifestyle photos", "Brand visuals"].map((tag) => (
                    <Badge key={tag} bg="whiteAlpha.100" color="gray.300" px={4} py={2} borderRadius="full" textTransform="none">
                      {tag}
                    </Badge>
                  ))}
                </Flex>
              </Box>
              
              <Button 
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                color="white" 
                borderColor="whiteAlpha.300" 
                borderRadius="full"
                px={8}
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
              >
                Try it now
              </Button>
            </VStack>
            
            <Box 
              flex="1.2" 
              w="full"
              borderRadius="3xl" 
              overflow="hidden" 
              bgGradient="linear(to-br, #4ECDC422, #805AD522)"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2670&auto=format&fit=crop" 
                alt="Product Motion"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>

          {/* Feature 3: Add Sound */}
          <Flex 
            direction={{ base: "column", lg: "row" }} 
            align="center" 
            justify="space-between" 
            gap={16}
            w="full"
          >
            <VStack align="start" spacing={8} maxW={{ base: "full", lg: "xl" }} flex="1">
              <VStack align="start" spacing={4}>
                <Heading as="h3" size="xl" color="white" fontWeight="bold">
                  Add Sound to <br />
                  Image-Based Videos
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="relaxed">
                  Go beyond silent animations. With Topview, you can:
                </Text>
              </VStack>

              <VStack align="start" spacing={4} w="full">
                {[
                  "Add AI voiceovers to image videos", 
                  "Combine motion and sound for better engagement", 
                  "Create complete marketing videos from images"
                ].map((item) => (
                  <Flex key={item} align="center" gap={3}>
                    <Icon as={CheckCircle2} color="brand.500" w={5} h={5} />
                    <Text color="white" fontWeight="bold">{item}</Text>
                  </Flex>
                ))}
              </VStack>

              <Text color="brand.400" fontWeight="bold" fontSize="lg">
                Sound matters — especially in ads.
              </Text>
              
              <Button 
                as="a"
                href="https://www.topview.ai/gen/ai-creation?type=aiVideo"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline" 
                color="white" 
                borderColor="whiteAlpha.300" 
                borderRadius="full"
                px={8}
                _hover={{ bg: "whiteAlpha.100", borderColor: "whiteAlpha.500" }}
                rightIcon={<Icon as={ArrowRight} w={4} h={4} />}
              >
                Try it now
              </Button>
            </VStack>
            
            <Box 
              flex="1.2" 
              w="full"
              borderRadius="3xl" 
              overflow="hidden" 
              bgGradient="linear(to-br, #FF6B6B22, #4ECDC422)"
              border="1px solid"
              borderColor="whiteAlpha.100"
            >
              <Image 
                src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2670&auto=format&fit=crop" 
                alt="Sound Integration"
                w="full"
                h="full"
                objectFit="cover"
              />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default ImageVideoFeatures;
