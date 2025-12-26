import { Box, Container, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/react";

const faqs = [
  {
    question: "Does Topview offer image to video AI generation?",
    answer: "Yes. Topview features a professional image to video AI workflow designed for marketing, ecommerce, and advertising. You can turn images, photos, and product pictures into realistic videos using advanced AI video models — all as part of Topview's comprehensive video creation platform.",
  },
  {
    question: "Can I use image to video AI for free?",
    answer: "Topview offers a free trial so you can test image to video AI online before upgrading. This allows you to: upload images, generate image-based videos, and evaluate video quality and motion realism. For higher resolution, longer videos, and commercial usage, paid plans are available.",
  },
  {
    question: "Is there a free image to video AI without watermark?",
    answer: "During the free trial, generated videos may include limitations depending on usage. Paid plans are designed for commercial marketing use, including: clean, professional output, videos suitable for ads and ecommerce, and no platform branding for client-facing content. Always check the latest plan details inside the product.",
  },
  {
    question: "Can I convert product images into video ads?",
    answer: "Absolutely. Topview is optimized for product image to video AI, allowing ecommerce sellers and brands to: turn product photos into video ads, create short-form marketing videos, and reuse existing image assets across platforms. This is one of the most common use cases.",
  },
  {
    question: "Is Topview a photo to video AI or image to video AI?",
    answer: "Both. Topview supports: image to video, photo to video, picture to video, and product image to video. No matter what type of image you upload, the system selects the most suitable AI video model.",
  },
  {
    question: "Can I add sound or voice to image-based videos?",
    answer: "Yes. Topview allows you to add sound and AI voiceovers to image-to-video outputs, making them more engaging and effective for marketing and advertising.",
  },
  {
    question: "Is this image to video AI suitable for marketing and ads?",
    answer: "Yes. Topview is built specifically for marketing use cases, including: ecommerce ads, social media videos, landing page visuals, and brand campaigns.",
  },
];

const FAQSection = () => {
  return (
    <Box as="section" py="20" px="6">
      <Container maxW="container.md">
        <Heading as="h2" textAlign="center" size={{ base: "2xl", md: "4xl" }} fontWeight="black" mb="12">
          <Text as="span" bgGradient="linear(to-r, #FF6B6B, #805AD5, #4ECDC4)" bgClip="text">Image to Video</Text> FAQ
        </Heading>

        <Accordion allowToggle>
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              border="1px solid"
              borderColor="whiteAlpha.200"
              borderRadius="2xl"
              bg="whiteAlpha.50"
              mb="4"
              overflow="hidden"
            >
              <h3>
                <AccordionButton py="6" _hover={{ bg: "whiteAlpha.100" }}>
                  <Box flex="1" textAlign="left" fontWeight="medium" color="white">
                    {faq.question}
                  </Box>
                  <AccordionIcon color="gray.400" />
                </AccordionButton>
              </h3>
              <AccordionPanel pb="6" color="gray.400">
                {faq.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Box>
  );
};

export default FAQSection;
