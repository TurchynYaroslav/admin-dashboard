interface ButtonProps {
  variant: "save" | "edit" | "delete" | "create";
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ variant, children, onClick }: ButtonProps) => {
  const variants = {
    save: `
      bg-emerald-600 text-white
      hover:bg-emerald-700
      focus:ring-emerald-600/30
    `,
    edit: `
      bg-slate-100 text-slate-900
      hover:bg-slate-200
      focus:ring-slate-400/30
    `,
    delete: `
      bg-red-600 text-white
      hover:bg-red-700
      focus:ring-red-600/30
    `,
    create: `
  bg-indigo-600 text-white
  hover:bg-indigo-700
  focus:ring-indigo-600/30
`,
  };

  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-lg
        px-4 py-2
        text-sm font-medium
        transition-colors
        focus:outline-none focus:ring-2
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
};
