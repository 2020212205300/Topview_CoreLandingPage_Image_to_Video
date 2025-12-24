import { Box, Container, Heading, Text, Flex, Icon, VStack, SimpleGrid, Badge, HStack, Spacer, Link } from "@chakra-ui/react";
import { 
  Users, Pencil, Megaphone, Store, Gem, Briefcase, Ruler, Rocket, Play, ChevronRight,
  Video, Monitor, ShoppingBag, Globe, Palette, Target
} from "lucide-react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const professionalGroups = [
  { name: "Video Editors", icon: Pencil, color: "brand.500" },
  { name: "Marketers & Growth Teams", icon: Megaphone, color: "orange.400" },
  { name: "Ecommerce Sellers", icon: Store, color: "purple.400" },
  { name: "DTC Brands", icon: Gem, color: "green.400" },
  { name: "Agencies", icon: Briefcase, color: "blue.400" },
  { name: "Designers", icon: Ruler, color: "pink.400" },
  { name: "Dropshippers", icon: Rocket, color: "yellow.400" },
  { name: "Social Media Managers", icon: Target, color: "cyan.400" },
];

const AgentCapabilities = () => {
  return (
    <Box as="section" py={{ base: 12, md: 24 }} px="6" bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" size="2xl" fontWeight="black" color="white" mb={6}>
              Built for Professionals <br />
              <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">
                Who Need Results
              </Text>
            </Heading>
            <Text fontSize="lg" color="gray.400" maxW="2xl" mx="auto">
              Topview is trusted by teams and creators who need speed, scale, and performance.
            </Text>
          </MotionBox>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {professionalGroups.map((group, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              p={5}
              borderRadius="xl"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ 
                borderColor: group.color,
                bg: "whiteAlpha.100",
                transform: "translateY(-2px)"
              }}
            >
              <HStack spacing={4}>
                <Flex 
                  w="10" 
                  h="10" 
                  bg={`${group.color}15`} 
                  borderRadius="lg" 
                  align="center" 
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={group.icon} w={5} h={5} color={group.color} />
                </Flex>
                <Heading size="sm" color="white" fontWeight="bold">
                  {group.name}
                </Heading>
              </HStack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AgentCapabilities;
