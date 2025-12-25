import { Box, Container, Heading, Text, Flex, Icon, VStack, SimpleGrid, Badge, HStack, Collapse, Button } from "@chakra-ui/react";
import { 
  Users, Pencil, Megaphone, Store, Gem, Briefcase, Ruler, Rocket, Play, ChevronRight,
  Video, Monitor, ShoppingBag, Globe, Palette, Target, CheckCircle2, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";

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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

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
              borderColor={expandedIndex === index ? group.color : "whiteAlpha.100"}
              cursor="pointer"
              onClick={() => toggleExpand(index)}
              _hover={{ 
                borderColor: group.color,
                bg: "whiteAlpha.100",
                transform: expandedIndex === index ? "none" : "translateY(-4px)"
              }}
              transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
              position="relative"
              height="fit-content"
            >
              <VStack align="stretch" spacing={4}>
                <HStack spacing={4} justify="space-between">
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
                    <Heading size="md" color="white" fontWeight="bold">
                      {group.name}
                    </Heading>
                  </HStack>
                  <Icon 
                    as={expandedIndex === index ? ChevronUp : ChevronDown} 
                    color="gray.500" 
                    w={5} 
                    h={5} 
                  />
                </HStack>

                <Collapse in={expandedIndex === index} animateOpacity>
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
                </Collapse>

                {!expandedIndex === index && (
                  <Text color="brand.400" fontSize="xs" fontWeight="bold" mt={2} textAlign="right" opacity={0.8}>
                    Click to learn more
                  </Text>
                )}
              </VStack>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AgentCapabilities;
