import { Flex } from '@semcore/base-components';
import Button from '@semcore/button';
import Tooltip, { DescriptionTooltip } from '@semcore/tooltip';
import Icon from '@semcore/icon/Book/m';
import './App.css';
import Link from '@semcore/link';

const Demo = () => (
  <>
    <h1>Tooltip</h1>

    <Flex gap={4}>
      <Button>Something</Button>
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
      <DescriptionTooltip>
        <DescriptionTooltip.Trigger tag={Button}>
          Read more
        </DescriptionTooltip.Trigger>
        <DescriptionTooltip.Popper aria-label='Learn more about some feature'>
          Some text with a
          {' '}
          <Link href='#'>link</Link>
        </DescriptionTooltip.Popper>
      </DescriptionTooltip>

      <Button>Something</Button>
    </Flex>
  </>
);

export default Demo;
