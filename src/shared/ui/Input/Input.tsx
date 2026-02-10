interface InputProps {
  label: string | undefined;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  label,
  value,
  onChange,
  placeholder,
  type,
}: InputProps) => {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        className="border-b-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
