import FeatherIcon from 'feather-icons-react';

export default function Footer(){
    return(
    <div className="footerContainer">
        <footer className="footer">
            <FeatherIcon icon="twitter" />
            <FeatherIcon icon="facebook" />
            <FeatherIcon icon="instagram" />
            <FeatherIcon icon="linkedin" />
            <FeatherIcon icon="github" />
        </footer>
    </div>);
}