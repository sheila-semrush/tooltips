import { Flex } from '@semcore/base-components';
import Button from '@semcore/button';
import Tooltip from '@semcore/tooltip';
import './App.css';
import Link from '@semcore/link';

const Demo = () => (
  <>
    <h1>Tooltip</h1>

    <Flex gap={4}>
      <Button>Something</Button>
      <Tooltip>
        <Tooltip.Trigger>
          <Button>Plain tooltip here</Button>
        </Tooltip.Trigger>
        <Tooltip.Popper>
          Some text
        </Tooltip.Popper>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger>
          <Button>Tooltip with a link</Button>
        </Tooltip.Trigger>
        <Tooltip.Popper>
          Some text with a
          {' '}
          <Link href='#'>link</Link>
        </Tooltip.Popper>
      </Tooltip>
      <Button>Something</Button>
      <Button>Something</Button>
    </Flex>
  </>
);

export default Demo;
