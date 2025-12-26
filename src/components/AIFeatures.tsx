import { Box, Container, Heading, Text, SimpleGrid, Flex, Icon, VStack } from "@chakra-ui/react";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";

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

  const toggleMute = (index: number) => {
    const newStates = [...mutedStates];
    newStates[index] = !newStates[index];
    setMutedStates(newStates);
  };

  return (
    <Box as="section" py={{ base: 12, md: 20 }} px="6" bg="black">
      <Container maxW="container.xl">
        <Box textAlign="center" mb="16">
          <Box>
            <Heading as="h2" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="4" color="white">
              Image to Video <Text as="span" bgGradient="linear(to-r, #FF6B6B, brand.500, #4ECDC4)" bgClip="text">AI Examples</Text>
            </Heading>
          </Box>
        </Box>

        <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing="8" maxW="container.xl" mx="auto">
          {videoTypes.map((type, index) => (
            <Box
              key={type.title}
              borderRadius="3xl"
              overflow="hidden"
              bg="whiteAlpha.50"
              border="1px solid"
              borderColor="whiteAlpha.100"
              _hover={{ 
                borderColor: type.borderColor, 
                transform: "translateY(-10px)", 
                bg: "whiteAlpha.100",
                boxShadow: `0 20px 40px -20px ${type.borderColor === 'purple.500' ? 'rgba(128, 90, 213, 0.3)' : 
                             type.borderColor === 'blue.500' ? 'rgba(49, 130, 206, 0.3)' : 
                             type.borderColor === 'green.500' ? 'rgba(56, 161, 105, 0.3)' : 
                             'rgba(213, 63, 140, 0.3)'}`
              }}
              role="group"
              display="flex"
              flexDirection="column"
              position="relative"
              transition="all 0.3s ease-in-out"
            >
              <Box p="4">
                <Box 
                  aspectRatio="9/16" 
                  position="relative" 
                  borderRadius="2xl" 
                  bg="black" 
                  mb="4" 
                  isolation="isolate"
                  overflow="hidden"
                >
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
                    style={{ 
                      borderRadius: "inherit",
                    }}
                  />
                  
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
                    _hover={{ bg: "blackAlpha.800" }}
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
                  <Heading as="h3" size="md" color="white" fontWeight="bold">
                    {type.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.400" lineHeight="tall">
                    {type.description}
                  </Text>
                </VStack>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default AIFeatures;
