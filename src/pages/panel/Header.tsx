// @flow
import * as React from 'react';

export function Header(props: any) {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Omni</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Encoders</a></li>
          <li><a>Formatters</a></li>
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
}