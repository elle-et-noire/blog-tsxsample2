import Image from 'next/image';

const CustomImage = ({
  src,
  id,
  className,
  alt,
  title,
  width,
  height
}: {
  src: string;
  id: string;
  className: string;
  alt: string;
  title: string;
  width: string;
  height: string;
}): JSX.Element => src.startsWith('/') ? (
    <div className='flex justify-center'>
      <Image src={src} id={id} className={className} alt={alt} title={title} width={!width ? '300' : width} height={!height ? '300' : height} objectFit="contain" />
    </div>
  ) : (
    <img src={src} id={id} className={className} alt={alt} title={title} />
  );

export default CustomImage;