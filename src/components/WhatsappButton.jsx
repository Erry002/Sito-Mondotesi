import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import whatsapp from "../assets/icone-whatsapp-rouge-1.png";

const WhatsAppButton = ({ phoneNumber }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const qrValue = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <button
        onClick={handleShow}
        className="px-4 py-2 font-semibold text-white rounded-md focus:outline-none focus:ring-opacity-75"
      >
        <img src={whatsapp} alt="" />
      </button>

      {show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={handleClose}
          ></div>
          <div
            className="relative z-50 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4">
              <h2 className="mb-4 text-lg font-semibold">Scansiona il codice QR</h2>
              <div className="flex justify-center mb-4">
                <QRCode value={qrValue} size={256} />
              </div>
              <p className='text-center '>O</p>
              <p className="text-center"> Il mio numero di telefono: <br/> +39 {phoneNumber}</p>
            </div>
            <div className="p-4 text-right">
              <button
                onClick={handleClose}
                className="px-4 py-2 font-semibold text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
              >
                Chiudi
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
