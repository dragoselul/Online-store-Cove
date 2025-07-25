import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

export default function ProductDescription({
    description,
    showOverview = false,
}: {
    description: Map<string, string>;
    showOverview?: boolean;
}) {
    return (
        <Accordion allowToggle py={4}>
            {Array.from(description.entries())
                .filter(([title]) => !(title.toLowerCase() === "overview" && !showOverview))
                .map(([title, content]) => (
                    <AccordionItem key={title}>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex="1" textAlign="left">
                                    {title}
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>{content}</AccordionPanel>
                    </AccordionItem>
                ))}
        </Accordion>
    );
}
