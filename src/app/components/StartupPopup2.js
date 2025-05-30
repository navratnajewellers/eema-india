/* eslint-disable @next/next/no-img-element */
// components/StartupPopup.js
"use client";

import { useEffect, useState } from "react";
import { Modal } from "rsuite";

export default function StartupPopup2() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show the popup once on load
    if (!sessionStorage.getItem("popup_shown")) {
      setOpen(true);
      sessionStorage.setItem("popup_shown", "true");
    }

    setOpen(true);
  }, []);

  return (
    <Modal
      open={open}
      size="md"
      onClose={() => setOpen(false)}
      backdrop="static"
      className=" popup-modal-container "
    >
      <Modal.Header></Modal.Header>
      <div className=" imageWrapper-fill ">
        <img
          src="/images/popup/eema-website-popup-image.png"
          alt="website popup"
        />
      </div>
    </Modal>
  );
}
