import * as React from 'react';
export function ActionButton(props: any) {
  return (
    <button {...props} className="btn">
      {props.children}
    </button>
    );
}