const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p>© 2025 StayFinder. All rights reserved.</p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
