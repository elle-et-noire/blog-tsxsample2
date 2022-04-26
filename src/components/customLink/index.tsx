import Link from 'next/link';

const CustomLink = ({
  children,
  href,
  id,
  className
}: {
  children: string;
  href: string;
  id: string;
  className: string;
}): JSX.Element => href.startsWith('/') || href.startsWith('#') || href === '' ? (
    <Link href={href}>
      <a id={id} className={className}>{children}</a>
    </Link>
  ) : (
      <a href={href} id={id} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

export default CustomLink;