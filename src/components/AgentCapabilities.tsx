import { Box, Container, Heading, Text, Flex, Icon, VStack, SimpleGrid, HStack } from "@chakra-ui/react";
import { 
  Pencil, Megaphone, Store, Gem, Briefcase, Ruler, Rocket, Target, CheckCircle2
} from "lucide-react";

const professionalGroups = [
  { 
    name: "Video Editors", 
    icon: Pencil, 
    color: "brand.500",
    details: [
      "Convert images into video faster",
      "Reduce manual animation work",
      "Use AI as a production accelerator"
    ]
  },
  { 
    name: "Marketers", 
    icon: Megaphone, 
    color: "orange.400",
    details: [
      "Create more video ads from existing images",
      "Test creatives faster",
      "Scale campaigns efficiently"
    ]
  },
  { 
    name: "Ecommerce Sellers", 
    icon: Store, 
    color: "purple.400",
    details: [
      "Turn product images into video ads",
      "No studio or filming required",
      "Perfect for Shopify and marketplaces"
    ]
  },
  { 
    name: "DTC Brands", 
    icon: Gem, 
    color: "green.400",
    details: [
      "Reuse image assets across video channels",
      "Maintain brand consistency",
      "Launch campaigns faster"
    ]
  },
  { 
    name: "Agencies", 
    icon: Briefcase, 
    color: "blue.400",
    details: [
      "Deliver more image-based videos for clients",
      "Shorten production cycles",
      "Offer AI-powered creative services"
    ]
  },
  { 
    name: "Designers", 
    icon: Ruler, 
    color: "pink.400",
    details: [
      "Animate static designs",
      "Add motion without timelines",
      "Enhance presentations and visuals"
    ]
  },
  { 
    name: "Dropshippers", 
    icon: Rocket, 
    color: "yellow.400",
    details: [
      "Convert supplier photos into videos",
      "Launch products quickly",
      "Compete with video-first brands"
    ]
  },
  { 
    name: "Social Media Managers", 
    icon: Target, 
    color: "cyan.400",
    details: [
      "Turn static posts into engaging video stories",
      "Boost engagement with motion",
      "Maintain active video presence easily"
    ]
  },
];

const AgentCapabilities = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Box>
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" color="white" mb={6}>
              Built for Professionals <br />
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                Who Need Results
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl" mx="auto">
              Topview is trusted by teams and creators who need speed, scale, and performance.
            </Text>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={6}>
          {professionalGroups.map((group, index) => (
            <Box
              key={index}
              p={6}
              borderRadius="2xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ 
                borderColor: group.color,
                bg: "whiteAlpha.100",
              }}
              position="relative"
              height="full"
            >
              <VStack align="stretch" spacing={6}>
                <HStack spacing={4}>
                  <Flex 
                    w="12" 
                    h="12" 
                    bg={`${group.color}15`} 
                    borderRadius="xl" 
                    align="center" 
                    justify="center"
                    flexShrink={0}
                  >
                    <Icon as={group.icon} w={6} h={6} color={group.color} />
                  </Flex>
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {group.name}
                  </Heading>
                </HStack>

                <VStack align="start" spacing={3} pt={4} borderTop="1px solid" borderColor="whiteAlpha.100">
                  {group.details.map((detail, idx) => (
                    <Flex key={idx} align="start" gap={3}>
                      <Icon as={CheckCircle2} color={group.color} w={4} h={4} mt={1} />
                      <Text color="gray.400" fontSize="sm" fontWeight="medium">
                        {detail}
                      </Text>
                    </Flex>
                  ))}
                </VStack>
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AgentCapabilities;
