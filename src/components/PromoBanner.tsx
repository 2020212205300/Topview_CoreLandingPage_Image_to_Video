import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { Gift, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PromoBanner = () => {
  const [showUpgrade, setShowUpgrade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUpgrade((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="50"
      h="10"
      bgGradient="linear(to-r, rgba(236, 72, 153, 0.2), rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2))"
      overflow="hidden"
      backdropFilter="blur(8px)"
    >
      <Flex h="full" alignItems="center" justify="center" position="relative">
        <AnimatePresence mode="wait">
          {showUpgrade ? (
            <motion.div
              key="upgrade"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute", display: "flex", alignItems: "center", gap: "12px" }}
            >
              <Icon as={Sparkles} w={4} h={4} color="brand.500" />
              <Text fontSize="sm" fontWeight="medium" color="white">
                NEW
              </Text>
              <Text fontSize="sm" color="gray.400">
                Topview is now your AI Video Agent — Smarter & More Automated
              </Text>
              <Icon as={ArrowRight} w={4} h={4} color="brand.500" />
            </motion.div>
          ) : (
            <motion.div
              key="promo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute", display: "flex", alignItems: "center", gap: "12px" }}
            >
              <Icon as={Gift} w={5} h={5} color="yellow.400" />
              <Text fontSize="sm" fontWeight="medium" color="white">
                HOLIDAY SALE
              </Text>
              <Box px="2" py="0.5" bg="rgba(234, 179, 8, 0.2)" borderRadius="md">
                <Text fontSize="xs" fontWeight="semibold" color="yellow.400">
                  🏷️ 47% OFF
                </Text>
              </Box>
              <Text fontSize="sm" color="gray.400">
                Limited Time Only!
              </Text>
            </motion.div>
          )}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default PromoBanner;
