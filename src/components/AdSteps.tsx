import { Box, Container, Heading, Text, SimpleGrid, Icon, VStack, Badge, Stack } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";

const AdSteps = () => {
  const scenarios = [
    {
      title: "Prompt to Video",
      description: "Convert a rough idea or a simple sentence into high-fidelity visuals.",
      input: "A futuristic sneaker commercial.",
      output: "High-fidelity AI visuals for concept testing.",
      accent: "#4ECDC4"
    },
    {
      title: "Script to Video",
      description: "Turn your polished narrative into a complete video with AI actors.",
      input: "A 30s ad script with dialogue.",
      output: "A narrative video with AI Avatars acting it out.",
      accent: "#A78BFA"
    },
    {
      title: "Blog/Article to Video",
      description: "Repurpose your written content for social media engagement.",
      input: "URL or full text of a blog post.",
      output: "A summary video or 'listicle' video for social media.",
      accent: "#60A5FA"
    },
    {
      title: "Product Description to Video",
      description: "Instantly create product showcase videos for your ecommerce store.",
      input: "Amazon bullet points.",
      output: "A feature highlight video for ecommerce.",
      accent: "#FB923C"
    }
  ];

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
          <Box textAlign="center" maxW="3xl" mx="auto">
            <Box>
              <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
                Turn Any Text Input into <br />
                <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                  Engaging Video Content
                </Text>
              </Heading>
              <Text fontSize="xl" color="gray.300" mb={8} lineHeight="relaxed">
                Whether you have a rough idea, a polished script, or an existing article, Topview adapts to your content source.
              </Text>
            </Box>
          </Box>

          {/* Scenarios Grid */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing="10">
            {scenarios.map((item, index) => (
              <Box
                key={item.title}
                borderRadius="3xl"
                bg="whiteAlpha.50"
                border="1px solid"
                borderColor="whiteAlpha.100"
                overflow="hidden"
                p={8}
                _hover={{ borderColor: item.accent, bg: "whiteAlpha.100", transform: "translateY(-5px)" }}
                transition="all 0.3s"
              >
                <VStack align="center" spacing={6} textAlign="center">
                  <Heading as="h3" size="lg" color="white" fontWeight="bold">
                    {item.title}
                  </Heading>

                  <Text color="gray.400" fontSize="md">
                    {item.description}
                  </Text>

                  <Stack 
                    direction={{ base: "column", xl: "row" }} 
                    spacing={4} 
                    w="full" 
                    bg="blackAlpha.400" 
                    p={5} 
                    borderRadius="2xl"
                    border="1px solid"
                    borderColor="whiteAlpha.100"
                    align="center"
                  >
                    {/* Input Side */}
                    <VStack align="start" spacing={1} flex="1">
                      <Badge variant="subtle" colorScheme="gray" fontSize="xs" mb={1}>INPUT</Badge>
                      <Text color="whiteAlpha.900" fontWeight="medium" fontSize="sm" noOfLines={2}>
                        "{item.input}"
                      </Text>
                    </VStack>

                    <Box color="whiteAlpha.400" transform={{ base: "rotate(90deg)", xl: "rotate(0deg)" }}>
                      <Icon as={ArrowRight} w={5} h={5} />
                    </Box>

                    {/* Output Side */}
                    <VStack align="start" spacing={1} flex="1">
                      <Badge variant="subtle" colorScheme="green" fontSize="xs" mb={1}>OUTPUT</Badge>
                      <Text color={item.accent} fontWeight="bold" fontSize="sm" noOfLines={2}>
                        {item.output}
                      </Text>
                    </VStack>
                  </Stack>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default AdSteps;
