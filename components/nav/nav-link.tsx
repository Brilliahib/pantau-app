import Link from "next/link";

interface NavLinkProps {
  href?: string;
  name?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href = "/", name = "Link" }) => {
  return (
    <Link href={href}>
      <p
        data-value={name}
        className="font-medium text-sm text-muted-foreground hover:text-foreground"
      >
        {name}
      </p>
    </Link>
  );
};

export default NavLink;
