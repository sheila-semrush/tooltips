import { Flex } from '@semcore/base-components';
import Button from '@semcore/button';
import Tooltip, { DescriptionTooltip } from '@semcore/tooltip';
import Icon from '@semcore/icon/Book/m';
import './App.css';
import Link from '@semcore/link';
import { useState } from 'react';
import { List, Text } from '@semcore/typography';

const TooltipContent = () => (
  <>
    <Text display='block' bold mb={2}>
      Secure password tips:
    </Text>
    <List>
      <List.Item>
        More than 8 characters
      </List.Item>
      <List.Item>
        Both lowercase and uppercase letters
      </List.Item>
      <List.Item>
        At least one numeric character
      </List.Item>
    </List>
  </>
);

const Demo = () => {
  const [vis, setVis] = useState(false);
  return (
    <>
      <h1>Tooltip</h1>

      <Flex gap={4}>
        <Button onClick={() => setVis(!vis)}>Toggle tooltip</Button>
        <Tooltip>
          <Button tag={Tooltip.Trigger} addonLeft={Icon}>
            Plain tooltip here
          </Button>
          <Tooltip.Popper>
            Some text
          </Tooltip.Popper>
        </Tooltip>
        <Tooltip>
          <Tooltip.Trigger tag={Button}>
            Tooltip with a link
          </Tooltip.Trigger>
          <Tooltip.Popper>
            Some text with a
            {' '}
            <Link href='#'>link</Link>
          </Tooltip.Popper>
        </Tooltip>
        <DescriptionTooltip visible={vis}>
          <DescriptionTooltip.Trigger tag={Button} onClick={() => setVis(!vis)}>
            Read more
          </DescriptionTooltip.Trigger>
          <DescriptionTooltip.Popper aria-label='Learn more about some feature' wMax={300}>
            <TooltipContent />
          </DescriptionTooltip.Popper>
        </DescriptionTooltip>

        <Button>Something</Button>
      </Flex>
    </>
  );
};

export default Demo;
