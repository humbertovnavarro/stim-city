// A stylized link component
import Link from 'next/link';
export default function StimLink(props) {
    const useNextLink = props.href.startsWith("http");
    const style = `
        transition-all ease-out duration-200
        bg-fuchsia-800
        hover:bg-fuchsia-900
        rounded-lg shadow-lg p-1
        text-white
        active:translate-y-px
        ${props.className}
    `;
    return (
      useNextLink ? (
      <a className={style}
      href={props.href} target='_blank'>
          {props.children}
      </a>
      )
      : (
          <Link onClick={props.onClick} href={props.href}><a className={style}>{props.children}</a></Link>
      )
    )
}
