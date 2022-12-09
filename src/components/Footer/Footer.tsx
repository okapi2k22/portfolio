import './Footer.css';
export default function Footer(){
    const handleCopy = ()=> {
        navigator.clipboard.writeText("test@example.com");
        alert("Copied email to clipboard!");
    }
    return(
        <footer className='Footer'>
            <h1>Get In Touch</h1>
            <p id="contact" onClick={handleCopy}>test@example.com</p>
            <a download href="">Okapi2k22-Resume.pdf</a>
        </footer>
    );
}