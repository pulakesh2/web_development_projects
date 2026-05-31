import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-section">
      <p className="footer-para">
        Designed by <i>Pulakesh Malakar</i>. Copyright&copy; 2023, please follow
        me on
      </p>
      <div className="follow__box">
        <a href="https://www.instagram.com/pulakesh_malakar/" target="blank">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>

        <a href="https://twitter.com/parthibmind" target="blank">
          <ion-icon name="logo-twitter"></ion-icon>
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=100079302180031"
          target="blank"
        >
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
      </div>
    </div>
  );
};

export default Footer;
