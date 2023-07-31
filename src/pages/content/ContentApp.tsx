// @flow
import * as React from "react";
import { useContext } from "react";
import { ModalStateContext } from "@pages/content/index";

type Props = {};

export function ContentApp(props: Props) {
  const modalShow = useContext(ModalStateContext);
  console.log(modalShow);
  return (
    <>
      <dialog
        id="my_modal_1"
        className={
          "chrome-ext-pre-modal" +
          (modalShow ? " chrome-ext-pre-modal-open" : "")
        }
      >
        <form
          method="dialog"
          className="chrome-ext-pre-modal-box chrome-ext-pre-w-[50vw] "
        >
          <h3 className="chrome-ext-pre-font-bold chrome-ext-pre-text-lg">
            Hello!
          </h3>
          <p className="chrome-ext-pre-py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="chrome-ext-pre-modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button className="chrome-ext-pre-btn">Close</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
