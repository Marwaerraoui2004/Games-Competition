import { useLocation } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <footer id="footer">
      <div className="footer-content">
        <p>Contactez-nous :</p>
        <div className="social-icons">
          <a href="https://www.instagram.com" target="_blank" className="social-icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1024px-Instagram_logo_2022.svg.png"
              alt="Instagram"
            />
          </a>
          <a href="https://twitter.com" target="_blank" className="social-icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ37hpJTlrP3m1e4TCe2y978ExQ51mv5zc70g&s"
              alt="Twitter"
            />
          </a>
          <a href="https://www.facebook.com" target="_blank" className="social-icon">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png"
              alt="Facebook"
            />
          </a>
          <a href="https://www.youtube.com" target="_blank" className="social-icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAJupKEMq9U2IVkT0nB2rfNf7i_qFMklEcA&s"
              alt="YouTube"
            />
          </a>
          <a href="https://www.tiktok.com" target="_blank" className="social-icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzMeOhpvHAn4Y7mLjfuT5eMPnH-gOGKucKjg&s"
              alt="TikTok"
            />
          </a>
        </div>
        <p className="copyright">© 2025 VotreSite. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
