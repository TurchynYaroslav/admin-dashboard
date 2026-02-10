interface UsersHeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: UsersHeaderProps) => {
  return (
    <header
      className="
    w-full
    flex items-center justify-between
    px-6 py-4
    mb-6
    bg-white
    border-b border-gray-200
  "
    >
      {children}
    </header>
  );
};
