import { Box, Container, Heading, Text, Icon, VStack, Badge, Stack, Flex, Center } from "@chakra-ui/react";
import { ArrowRight, Image as ImageIcon, Film } from "lucide-react";

const scenarios = [
  {
    title: "Image Prompt to Video",
    description: "Describe the motion. Let your image come alive.",
    input: "A product image + a simple motion prompt: “Add smooth camera movement and premium lighting.”",
    output: "A realistic, high-fidelity video generated from your image — perfect for concept testing and ads.",
    accent: "#4ECDC4"
  },
  {
    title: "Photo to Video (Human & Lifestyle Images)",
    description: "Create natural movement from still photos.",
    input: "A portrait or lifestyle photo: “A model showcasing a sneaker in a studio setting.”",
    output: "A smooth, lifelike video with coherent human motion and natural gestures.",
    accent: "#A78BFA"
  },
  {
    title: "Product Image to Video",
    description: "Turn product photos into ecommerce-ready videos.",
    input: "Product images from your store or supplier: “White background product photo.”",
    output: "A product showcase video highlighting key features — ready for ads and product pages.",
    accent: "#60A5FA"
  },
  {
    title: "Design / Creative Image to Video",
    description: "Bring static designs and visuals to life.",
    input: "A design visual, poster, or brand creative: “Campaign key visual.”",
    output: "A motion-enhanced video version for social media and digital campaigns.",
    accent: "#FB923C"
  },
  {
    title: "Image + Sound to Video",
    description: "Add voice and audio for higher conversion.",
    input: "An image with a short description: “Product hero image + promotional message.”",
    output: "A complete marketing video with AI-generated motion and sound — optimized for ads.",
    accent: "#FF6B6B"
  }
];

const AdSteps = () => {

  return (
    <Box as="section" py={{ base: 16, md: 32 }} px="6" bg="black" position="relative" overflow="hidden">
      {/* Background Decorative Elements */}
      <Box
        position="absolute"
        top="-10%"
        right="-5%"
        w="600px"
        h="600px"
        bg="brand.500"
        filter="blur(180px)"
        opacity="0.08"
        borderRadius="full"
        pointerEvents="none"
      />
      
      <Container maxW="container.xl">
        <VStack spacing={16} align="stretch">
          {/* Header Section */}
          <Box textAlign="center" maxW="4xl" mx="auto">
            <Box>
              <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
                Turn images into <br />
                <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                  viral videos
                </Text>
              </Heading>
              <Text fontSize="xl" color="gray.300" mb={8} lineHeight="relaxed">
                Whether you’re working with product photos, lifestyle images, designs, or brand visuals, Topview transforms static images into high-quality videos built for marketing and ecommerce.
              </Text>
            </Box>
          </Box>

          {/* Scenarios Grid */}
          <Flex wrap="wrap" justify="center" gap="10">
            {scenarios.map((item) => (
              <Box
                key={item.title}
                w={{ base: "full", md: "calc(50% - 20px)", lg: "calc(33.333% - 27px)" }}
                borderRadius="3xl"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                overflow="hidden"
                p={8}
                display="flex"
                flexDirection="column"
                _hover={{ borderColor: item.accent, bg: "whiteAlpha.100", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <VStack align="center" spacing={6} textAlign="center" h="full" justify="space-between">
                  <VStack spacing={4}>
                    <Heading as="h3" size="lg" color="white" fontWeight="bold">
                      {item.title}
                    </Heading>

                    <Text color="gray.400" fontSize="md">
                      {item.description}
                    </Text>
                  </VStack>

                  <Box 
                    w="full" 
                    bg="whiteAlpha.50" 
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    aspectRatio="16/9"
                    position="relative"
                    overflow="hidden"
                    role="group"
                  >
                    <Center h="full" w="full">
                      <VStack spacing={3}>
                        <Box 
                          p={4} 
                          borderRadius="full" 
                          bg="whiteAlpha.100" 
                          border="1px solid" 
                          borderColor="whiteAlpha.200"
                        >
                          <Icon as={Film} w={8} h={8} color={item.accent} />
                        </Box>
                        <Text fontSize="xs" color="gray.500" fontWeight="bold" textTransform="uppercase" letterSpacing="widest">
                          Preview Coming Soon
                        </Text>
                      </VStack>
                    </Center>
                    
                    {/* Decorative Overlay */}
                    <Box 
                      position="absolute" 
                      top={0} 
                      left={0} 
                      right={0} 
                      bottom={0} 
                      bgGradient={`linear(to-br, ${item.accent}05, transparent)`} 
                      pointerEvents="none"
                    />
                  </Box>
                </VStack>
              </Box>
            ))}
          </Flex>

          {/* Marketing Use Cases Section */}
          <VStack spacing={8} mt={8} textAlign="center">
            <VStack spacing={4}>
              <Heading as="h3" size="lg" color="white" fontWeight="bold">
                Built for Marketing Use Cases
              </Heading>
              <Text color="gray.400" fontSize="md">
                This image-to-video workflow is designed for:
              </Text>
            </VStack>
            
            <Flex wrap="wrap" justify="center" gap={4}>
              {["Ecommerce ads", "Social media videos", "Landing page visuals", "Product launches", "Brand campaigns"].map((tag) => (
                <Badge 
                  key={tag}
                  px={4} 
                  py={2} 
                  borderRadius="full" 
                  bg="whiteAlpha.100" 
                  color="gray.300" 
                  border="1px solid" 
                  borderColor="whiteAlpha.200"
                  fontSize="sm"
                  textTransform="none"
                >
                  {tag}
                </Badge>
              ))}
            </Flex>

            <Text color="brand.400" fontWeight="bold" fontSize="xl" mt={4}>
              Not just image animation — image to video built to sell.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdSteps;
