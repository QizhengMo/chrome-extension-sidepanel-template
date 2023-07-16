import * as React from 'react';
export function ActionButton(props: any) {
  return (
    <button {...props} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded">
      {props.children}
    </button>
    );
}