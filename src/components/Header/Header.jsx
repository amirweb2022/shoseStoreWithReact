import Navbar from "../Navbar/Navbar";
const nav__link = [
  { to: "/", display: "خانه" },
  { to: "/shop", display: "فروشگاه" },
  { to: "/blog", display: "بلاگ ها" },
  { to: "/support", display: "پشتیبانی" },
];
const Header = () => {
  return (
    <header className="w-full sticky top-0 md:top-3 z-10 max-w-6xl mx-auto">
      <Navbar nav__link={nav__link}/>
    </header>
  );
};

export default Header;
