import './Image.css';
export default function Image({src, alt}: {src: string, alt: string}){
    return (
        <img className='Image' src={new URL(`../../assets/images/${src}`, import.meta.url).href} alt={alt} width="100%"></img>
    )
}