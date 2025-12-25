import { Box, Container, Heading, Text, VStack, SimpleGrid, Icon, HStack } from "@chakra-ui/react";
import { Rocket, Users, ShoppingBag, BarChart3, ChevronRight } from "lucide-react";

const templateLabels = [
  { title: "Viral Video", icon: Rocket, color: "#FF6B6B" },
  { title: "UGC Video", icon: Users, color: "#4ECDC4" },
  { title: "Shoppable Video", icon: ShoppingBag, color: "#805AD5" },
  { title: "Ads Video", icon: BarChart3, color: "#3182CE" }
];

const templateImages = [
  { 
    label: "Viral Marketing"
  },
  { 
    label: "UGC Creators"
  },
  { 
    label: "Product Demos"
  },
  { 
    label: "Social Growth"
  },
  { 
    label: "Brand Stories"
  },
  { 
    label: "Viral Shorts"
  }
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center" textAlign="center">
          <Box maxW="4xl">
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="6" color="white" lineHeight="1.1">
              Viral <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Text to Video</Text> Templates
            </Heading>
            <Heading as="h3" size="lg" color="whiteAlpha.900" mb={6} fontWeight="bold">
              Pre-Built Templates Based on Proven Video Formats
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color="gray.400" maxW="3xl" mx="auto">
              Topview includes ready-to-use text to video templates based on real high-performing content.
            </Text>
          </Box>

          {/* Labels Section */}
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={6} w="full">
            {templateLabels.map((label) => (
              <Box
                key={label.title}
                bg="whiteAlpha.50"
                px={6}
                py={4}
                borderRadius="xl"
                border="1px solid"
                borderColor="whiteAlpha.100"
                display="flex"
                alignItems="center"
                justifyContent="center"
                gap={3}
                _hover={{ bg: "whiteAlpha.100", borderColor: label.color }}
                transition="all 0.3s"
              >
                <Icon as={label.icon} w={4} h={4} color={label.color} />
                <Text color="whiteAlpha.800" fontSize="sm" fontWeight="medium">
                  {label.title}
                </Text>
              </Box>
            ))}
          </SimpleGrid>

          {/* Images Grid */}
          <SimpleGrid columns={{ base: 2, md: 3, lg: 6 }} spacing={6} w="full" pt={8}>
            {templateImages.map((img, index) => (
              <Box
                key={index}
                position="relative"
                borderRadius="2xl"
                overflow="hidden"
                aspectRatio="9/16"
                bg="whiteAlpha.50"
                role="group"
                cursor="pointer"
                _hover={{ transform: "translateY(-8px)" }}
                transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
              >
                <VStack
                  position="absolute"
                  bottom="5"
                  left="0"
                  right="0"
                  spacing={1}
                  zIndex="2"
                  px={2}
                >
                  <Text
                    color="white"
                    fontSize="xs"
                    fontWeight="black"
                    textTransform="uppercase"
                    letterSpacing="tighter"
                    opacity="0.7"
                  >
                    Template
                  </Text>
                  <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    lineHeight="shorter"
                  >
                    {img.label}
                  </Text>
                </VStack>
              </Box>
            ))}
          </SimpleGrid>

          <VStack spacing={6} pt={8}>
            <Text color="gray.400" fontSize="lg" fontWeight="medium">
              Simply enter your text. The template handles the structure.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default MethodsSection;

