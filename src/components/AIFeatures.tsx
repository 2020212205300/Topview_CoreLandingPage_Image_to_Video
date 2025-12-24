import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, Image, List, ListItem, ListIcon, VStack, IconButton, useToast } from "@chakra-ui/react";
import { Target, ShoppingCart, User, Smartphone, Check, Video, Play, Volume2, VolumeX, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const MotionBox = motion(Box);

const videoTypes = [
  { 
    title: "Viral Videos",
    description: "Reproduce high-impact formats that are currently trending.",
    displayPrompt: "Cinematic 4K chase: A ginger cat in a yellow vest fleeing a police officer through city streets.",
    fullPrompt: "A cinematic, ultra-realistic video of a ginger cat running upright like a human down a city sidewalk, wearing a small yellow vest. A police officer is chasing the cat from behind. Shot at street level with a low-angle tracking camera, dynamic motion blur, dramatic depth of field. Urban environment with brick buildings, daytime natural lighting. The cat looks anxious yet adorable. Fast-paced, humorous, high-energy chase scene. 4K quality, realistic textures, cinematic color grading, viral short-video style.",
    videoSrc: "/video1.mp4",
    borderColor: "purple.500" 
  },
  { 
    title: "UGC Videos",
    description: "Authentic user-generated content look for high trust.",
    displayPrompt: "Dynamic UGC ad: Transitioning from a cozy room to a sunny park, featuring Vitality Labs Omega-3.",
    fullPrompt: "A dynamic UGC-style video ad. A young woman with curly hair holds a bottle of 'Vitality Labs Premium Omega-3' in a cozy, dimly lit living room. A seamless transition snaps the scene to a bright, sunny park where she is now wearing a beige jacket. She looks energetic, smiles, points at the camera, and holds up the bottle enthusiastically. Photorealistic, 4k quality, commercial lighting.",
    videoSrc: "/video2.mp4",
    borderColor: "blue.500" 
  },
  { 
    title: "Shoppable Product Videos",
    description: "Direct response templates optimized for ecommerce sales.",
    displayPrompt: "High-energy review: A girl unboxing and testing sparkling lavender headphones in a trendy space.",
    fullPrompt: "A high-energy UGC-style product review. A teenage girl in a purple hoodie excitedly unzips a black case to reveal sparkling lavender glitter headphones. Close-up shots highlight the sequin texture and buttons. She puts them on, smiles, and types on a laptop in a cozy study space adorned with fairy lights and posters. Fast-paced cuts, vibrant colors, trendy atmosphere, photorealistic 4k quality.",
    videoSrc: "/video3.mp4",
    borderColor: "green.500" 
  },
  { 
    title: "Ads & Performance Creatives",
    description: "Native look and high conversion rates for performance marketing.",
    displayPrompt: "App commercial: A woman presenting the 'My Lists' organization app with split-screen UI.",
    fullPrompt: "A professional UGC-style app commercial. A confident brunette woman wearing a beige blazer speaks enthusiastically to the camera in a modern, blurred home office setting. Split-screen edits zoom in on a smartphone interface showing a minimalist organization app named \"My Lists.\" A hand taps through categories like bags and accessories. The woman smiles, points to the phone, and gives a thumbs-up. The video concludes with a \"Download Now\" graphic and App Store badges. Bright, clean commercial lighting, 4k quality.",
    videoSrc: "/video4.mp4",
    borderColor: "pink.500" 
  },
];

const AIFeatures = () => {
  const [mutedStates, setMutedStates] = useState(new Array(videoTypes.length).fill(true));
  const toast = useToast();

  const toggleMute = (index: number) => {
    const newStates = [...mutedStates];
    newStates[index] = !newStates[index];
    setMutedStates(newStates);
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Full Prompt copied!",
      description: "The complete cinematic prompt is ready to use.",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Box as="section" py={{ base: 12, md: 20 }} px="6" bg="black">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" size="2xl" fontWeight="black" mb="4" color="white">
              From Simple Text to <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">Full Video Production</Text>
            </Heading>
          </MotionBox>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="8" maxW="container.xl" mx="auto">
          {videoTypes.map((type, index) => (
            <MotionBox
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              borderRadius="3xl"
              overflow="hidden"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ borderColor: type.borderColor, transform: "translateY(-10px)", bg: "whiteAlpha.100" }}
              role="group"
              display="flex"
              flexDirection="column"
              position="relative"
            >
              <Box p="4">
                <Box aspectRatio="9/16" position="relative" overflow="hidden" borderRadius="2xl" bg="black" mb="4">
                  <Box
                    as="video"
                    src={type.videoSrc}
                    autoPlay
                    loop
                    muted={mutedStates[index]}
                    playsInline
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                  
                  {/* Prompt Overlay on Hover */}
                  <MotionBox
                    position="absolute"
                    top="0"
                    left="0"
                    right="0"
                    bottom="0"
                    bg="blackAlpha.800"
                    backdropFilter="blur(8px)"
                    p="6"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    opacity="0"
                    _groupHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    zIndex="2"
                  >
                    <VStack align="start" spacing={3} h="full" justify="center">
                      <Flex align="center" justify="space-between" w="full" mb={1}>
                        <Flex align="center" gap={2}>
                          <Icon as={Play} w={4} h={4} color={type.borderColor} />
                          <Text color={type.borderColor} fontSize="xs" fontWeight="black" textTransform="uppercase" letterSpacing="wider">
                            AI Prompt
                          </Text>
                        </Flex>
                        <IconButton
                          aria-label="Copy prompt"
                          icon={<Icon as={Copy} w={3.5} h={3.5} />}
                          size="xs"
                          variant="ghost"
                          color="whiteAlpha.600"
                          _hover={{ color: "white", bg: "whiteAlpha.200" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCopy(type.fullPrompt);
                          }}
                        />
                      </Flex>
                      <Box w="full">
                        <Text color="white" fontSize="sm" lineHeight="tall" fontWeight="medium" fontStyle="italic">
                          "{type.displayPrompt}"
                        </Text>
                        <Text color="whiteAlpha.500" fontSize="10px" mt={3} fontWeight="bold" textTransform="uppercase">
                          Click copy icon for full prompt
                        </Text>
                      </Box>
                    </VStack>
                  </MotionBox>

                  {/* Sound Toggle Button */}
                  <Flex
                    position="absolute"
                    bottom="3"
                    right="3"
                    bg="blackAlpha.700"
                    backdropFilter="blur(10px)"
                    px="3"
                    py="1.5"
                    borderRadius="full"
                    alignItems="center"
                    cursor="pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMute(index);
                    }}
                    _hover={{ bg: "blackAlpha.800", transform: "scale(1.05)" }}
                    transition="all 0.2s"
                    zIndex="3"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                  >
                    <Icon 
                      as={mutedStates[index] ? VolumeX : Volume2} 
                      color="white" 
                      w={3.5} 
                      h={3.5} 
                      mr={2} 
                    />
                    <Text color="white" fontSize="xs" fontWeight="bold" letterSpacing="tight">
                      {mutedStates[index] ? "Muted" : "Sound On"}
                    </Text>
                  </Flex>
                </Box>
                
                <VStack align="start" spacing="2">
                  <Heading size="md" color="white" fontWeight="bold">
                    {type.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.400" lineHeight="tall">
                    {type.description}
                  </Text>
                </VStack>
              </Box>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AIFeatures;
