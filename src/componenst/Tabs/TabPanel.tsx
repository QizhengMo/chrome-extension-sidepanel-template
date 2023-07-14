import * as React from 'react';
import {ReactElement} from "react";

type Props = {
  content: ReactElement;
};

export function TabPanel(props: Props) {
  const { content } = props;
  return (
    <div>
      {content}
    </div>
  );
};
