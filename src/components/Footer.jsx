const Footer = () => {
  const date = new Date();
  const getFullYear = date.getFullYear();
  return (
    <footer className="sticky bottom-0 left-0 bg-blue-900 text-white font-bold text-center p-3">
      <p>&copy; Desing by khabbab ❤️ {getFullYear} </p>
    </footer>
  );
};

export default Footer;
