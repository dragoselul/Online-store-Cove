'use client'

import { useState } from 'react'
import {
  Box,
  IconButton,
  HStack,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  images: string[]
  height?: string | { [key: string]: string }
}

const MotionBox = motion.create(Box)

export default function ImageCarousel({
  images,
  height = '400px',
}: Props) {
  const [[idx, direction], setState] = useState<[number, number]>([0, 0])

  const prev = () =>
    setState(([i]) => [(i === 0 ? images.length - 1 : i - 1), -1])
  const next = () =>
    setState(([i]) => [(i === images.length - 1 ? 0 : i + 1), 1])

  // optional: change button size on mobile
  const btnSize = useBreakpointValue({ base: 'xs', md: 'sm' })

  return (
    <Box position="relative" overflow="hidden" h={height}>
      <AnimatePresence initial={false} custom={direction}>
        <MotionBox
          key={idx}
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          custom={direction}
          initial={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
          transition={{ duration: 0.7, ease: 'anticipate' }}
        >
          <Image
            src={images[idx]}
            alt={`Slide ${idx + 1}`}
            boxSize="100%"
            objectFit="cover"
          />
        </MotionBox>
      </AnimatePresence>

      <HStack
        position="absolute"
        top="50%"
        left="0"
        right="0"
        transform="translateY(-50%)"
        justify="space-between"
        px={2}
      >
        <IconButton
          size={btnSize}
          aria-label="Previous"
          icon={<ChevronLeftIcon />}
          onClick={prev}
        />
        <IconButton
          size={btnSize}
          aria-label="Next"
          icon={<ChevronRightIcon />}
          onClick={next}
        />
      </HStack>
    </Box>
  )
}
