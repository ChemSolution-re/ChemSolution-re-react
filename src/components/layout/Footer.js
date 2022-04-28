const footerStyles = {
  position: 'absolute',
  bottom: '0',
  width: '100%',
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div className="flex flex-row bg-csblue px-48 py-6 place-content-between">
        <div className="text-2xl self-center">
          <p className="text-center items-center self-center">
            Ви можете нас знайти у соціальних мережах!
          </p>
        </div>
        <div className="text-7xl">
          <i className="fab fa-twitter-square mx-6 cursor-pointer hover:text-white hover:animate-wiggle"></i>
          <i className="fab fa-telegram mx-6 cursor-pointer hover:text-white hover:animate-wiggle"></i>
          <i className="fab fa-instagram mx-6 cursor-pointer hover:text-white hover:animate-wiggle ease-in-out"></i>
          <i className="fab fa-facebook-square mx-6 cursor-pointer hover:text-white hover:animate-wiggle"></i>
        </div>
      </div>

      <div className="bg-csblack text-white flex flex-row px-48 py-6 place-content-between">
        <div className="w-1/3 content-start text-left">
          <h1 className="text-2xl">ChemSolution</h1>
          <hr className="my-3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
            accumsan et viverra justo commodo. Lorem ipsum dolor sit amet,
            consectetur.
          </p>
        </div>
        <div className="w-1/3 content-end text-right">
          <h1 className="text-2xl">Контакти</h1>
          <hr className="my-3" />
          <div className="flex flex-row-reverse text-xl">
            <i className="fas fa-warehouse self-center m-3"></i>
            <p className="self-center">Address</p>
          </div>
          <div className="flex flex-row-reverse text-xl">
            <i className="fas fa-envelope-open-text self-center m-3"></i>
            <p className="self-center">chemsolution2022@gmail.com</p>
          </div>
          <div className="flex flex-row-reverse text-xl">
            <i className="fas fa-phone self-center m-3"></i>
            <p className="self-center">+380-96-23-234-23</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
