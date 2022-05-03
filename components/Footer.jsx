import config from 'config.json';
import { useEffect, useState } from 'react';

export default function Footer(props) {
  const checkIsNearBottom = () => {
    const isNearBottom = window.scrollY > document.body.scrollHeight - window.innerHeight - 10;
    if (isNearBottom) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const interval = setInterval(checkIsNearBottom, 100);
    setTimeout(() => checkIsNearBottom(), 100);
    window.addEventListener('scroll', checkIsNearBottom);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', checkIsNearBottom);
    }
  },[])
  return (
    <div className={`
        transition-all ease-out duration-500
        fixed
        ${visible ? 'opacity-100 bottom-0' : '-bottom-20 opacity-0'}
        p-4
        z-30
        bg-gradient-to-r from-fuchsia-800/90 to-violet-500/90
        rounded-lg
        shadow-lg
        text-white
        flex
        flex-row
        justify-between
        items-end
        w-full
    `}>

      <div className="
        flex flex-col
      ">
        <a id="contact-us-footer" href={`mailto: ${config.email}`}>Contact Us</a>
        <a id="contact-us-footer" href={`mailto: ${config.email}`}>{config.email}</a>
      </div>

      <div className="italic">
        <p>© StimCity 2022</p>
      </div>

    </div>
  );
}
