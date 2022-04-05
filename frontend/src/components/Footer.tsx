import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../styles/footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="left">
        <h1>Terms of Service</h1>
        <h1>Privacy</h1>
        <h1>Delivery Locations</h1>
        <h1>Privacy</h1>
      </div>
      <div className="right">
        <div className="social">
          <InstagramIcon />
          <FacebookIcon />
          <TwitterIcon />
        </div>
        <h2>© 2022 deliverush</h2>
      </div>
    </div>
  );
}
