import Link from 'next/link';

const CustomLink = ({
  children,
  href,
  ...props
}: {
  children: string;
  href: string;
  id: string;
  className: string;
}): JSX.Element => {
  if (href.startsWith('/') || href.startsWith('#') || href === '') {
    if (href.match(/#a/))
      return (<a {...props} href={href.replace(/#a/, '')}>{children}</a>);
    else if (!href.match(/#blank/))
      return (
        <Link href={href.replace(/#blank/, '')}>
          <a {...props}>{children}</a>
        </Link>
      );
  }
  return (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default CustomLink;