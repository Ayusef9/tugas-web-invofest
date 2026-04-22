interface NavLinkProps {
label: string;
href: string;
icon?: React.ReactNode;
isActive?: boolean;}

export const NavLink: React.FC<NavLinkProps> = ({label, href, icon, isActive = false,}) => {
const activeStyle = "text-[#852e4e]";
const defaultStyle = "text-slate-600 hover:text-[#852e4e]";
  return (
          <a href={href} className={`flex items-center gap-2 px-4 py-2 font-medium transition-all duration-200 ${
          isActive ? activeStyle : defaultStyle}`}>
  {icon && <span className="w-5 h-5">{icon}</span>}
    <span>{label}</span></a>
    );
};

export default NavLink;