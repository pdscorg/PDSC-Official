import { useFormContext } from "react-hook-form";

interface DropdownOption {
  label: string;
}

interface DropdownInputProps {
  id: string;
  placeholder: string;
  options: DropdownOption[];
}

export default function DropdownInput({ id, placeholder, options }: DropdownInputProps) {
  const { register } = useFormContext();

  return (
    <fieldset>
      <select
        id={id}
        style={{
          width: "100%",
          height: "40px",
          backgroundColor: "rgba(250, 250, 250, 0.1)",
          borderRadius: "7px",
          border: "none",
          outline: "none",
          color: "#fff",
          fontSize: "13px",
          marginBottom: "20px",
          letterSpacing: "0.5px",
        }}
        required
        defaultValue=""
        {...register(id)}
      >
        <option value="">{placeholder}</option>
        {options.map((o) => (
          <option key={o.label} value={o.label} style={{ color: "#00080c" }}>
            {o.label}
          </option>
        ))}
      </select>
    </fieldset>
  );
}
