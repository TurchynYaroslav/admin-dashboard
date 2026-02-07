import Input from "../../../components/ui/Input";
import type { FormFieldConfig } from "../config/userForm.config";

interface FieldProps {
  field: FormFieldConfig;
  value: string;
  onChange: (value: string) => void;
}

const UserFormField = ({ field, value, onChange }: FieldProps) => {
  if (field.type === "readonly") {
    return (
      <div>
        <label>{field.label}</label>
        <span>{value}</span>
      </div>
    );
  }

  if (field.type === "select" && field.options) {
    return (
      <div>
        <label>{field.label}</label>
        <select value={value} onChange={(e) => onChange(e.target.value)}>
          ;
          {field.options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  return (
    <div className="">
      <Input
        label={field.label}
        value={value}
        onChange={onChange}
        type={field.type}
      />
    </div>
  );
};

export default UserFormField;
