
const currYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Copyright &copy; {currYear}, Made with passion by <strong>Anuj Singh Gurjar</strong>
      </p>
    </footer>
  );
};
export default Footer;