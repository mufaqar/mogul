import Image from 'next/image';
import React from 'react';
import icon from '/public/assets/images/mailBox.svg';
import { Col } from 'react-bootstrap';
import Link from 'next/link';

function MailBox() {
  return (
    <section>
      <div  className="cursor-pointer">
     <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"/></svg>
      </div>
    </section>
  );
}

export default MailBox;
