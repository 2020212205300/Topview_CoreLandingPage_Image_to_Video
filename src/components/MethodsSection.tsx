import { Box, Container, Heading, Text, VStack, HStack, Icon, Flex, Badge, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ScrollText, ShieldCheck, LayoutPanelLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const MotionBox = motion(Box);

const values = [
  {
    title: "Script Understanding",
    description: "The Agent identifies hooks, pain points, and CTAs in your text to structure the video logically.",
    icon: ScrollText,
    accent: "blue.400",
    tags: ["NLP", "Strategy"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    features: ["Hook Identification", "Pain Point Analysis", "Logical Sequencing"]
  },
  {
    title: "Commercial Consistency",
    description: "Generates consistent characters and brand styles across different scenes, unlike random AI generation.",
    icon: ShieldCheck,
    accent: "brand.500",
    tags: ["Branding", "Visual AI"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop",
    features: ["Character Persistence", "Brand Style Sync", "Asset Management"]
  },
  {
    title: "Full-Stack Editing",
    description: "Auto-adds captions, B-roll, music, and voiceovers. It’s a finished product, not just raw footage.",
    icon: LayoutPanelLeft,
    accent: "cyan.400",
    tags: ["Automation", "Ready-to-use"],
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop",
    features: ["Auto-Captions", "B-roll Integration", "Voiceover Sync"]
  }
];

const MethodsSection = () => {
  return (
    <Box as="section" py={{ base: 20, md: 32 }} bg="black" position="relative" overflow="hidden">
      <Container maxW="container.xl">
        <VStack spacing={12} align="center" mb={24} textAlign="center">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            maxW="3xl"
          >
            <Badge 
              colorScheme="brand" 
              variant="subtle" 
              px={3} 
              py={1} 
              borderRadius="full" 
              mb={6}
              bg="brand.900"
              color="brand.400"
              border="1px solid"
              borderColor="brand.800"
            >
              CORE VALUE
            </Badge>
            <Heading as="h2" size="2xl" fontWeight="black" mb="6" color="white" lineHeight="1.1">
              Why Use Topview for <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Text to Video</Text>?
            </Heading>
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="medium" color="whiteAlpha.900">
              Most text-to-video tools only generate short, silent clips. 
              <Text as="span" color="brand.400"> Topview</Text> builds complete commercial videos designed for business growth.
            </Text>
          </MotionBox>
        </VStack>

        <VStack spacing={{ base: 20, md: 32 }}>
          {values.map((val, index) => (
            <Stack 
              key={val.title}
              direction={{ base: "column", lg: index % 2 === 0 ? "row" : "row-reverse" }}
              spacing={{ base: 12, lg: 24 }}
              align="center"
              w="full"
            >
              {/* Image Side */}
              <MotionBox
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                flex="1"
                w="full"
              >
                <Box 
                  position="relative" 
                  borderRadius="3xl" 
                  overflow="hidden"
                  boxShadow="0 20px 40px -10px rgba(0,0,0,0.5)"
                  border="1px solid"
                  borderColor="whiteAlpha.100"
                  _before={{
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgGradient: `linear(to-br, ${val.accent}, transparent)`,
                    opacity: 0.1,
                    zIndex: 1
                  }}
                >
                  <Image 
                    src={val.image} 
                    alt={val.title}
                    w="full"
                    h={{ base: "300px", md: "450px" }}
                    objectFit="cover"
                    crossOrigin="anonymous"
                  />
                </Box>
              </MotionBox>

              {/* Text Side */}
              <MotionBox
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                flex="1"
                w="full"
              >
                <VStack align="start" spacing={6}>
                  <Heading as="h3" size="xl" color="white" fontWeight="bold">
                    {val.title}
                  </Heading>
                  
                  <Text color="gray.400" fontSize="lg" lineHeight="tall">
                    {val.description}
                  </Text>

                  <VStack align="start" spacing={4} pt={2}>
                    {val.features.map(feature => (
                      <HStack key={feature} spacing={3}>
                        <Icon as={CheckCircle2} color={val.accent} w={5} h={5} />
                        <Text color="whiteAlpha.900" fontWeight="medium">{feature}</Text>
                      </HStack>
                    ))}
                  </VStack>

                  <Box pt={6}>
                    <HStack 
                      spacing={2} 
                      color={val.accent} 
                      cursor="pointer" 
                      role="group"
                      _hover={{ transform: "translateX(5px)" }}
                      transition="0.3s"
                    >
                      <Text fontWeight="bold" fontSize="md">Start Creating for Free</Text>
                      <Icon as={ArrowRight} w={5} h={5} />
                    </HStack>
                  </Box>
                </VStack>
              </MotionBox>
            </Stack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default MethodsSection;

