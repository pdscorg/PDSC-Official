import { useFormContext } from "react-hook-form";

export default function ShortAnswerInput({ id, placeholder }: { id: string; placeholder: string }) {
  const { register } = useFormContext();

  return (
    <fieldset>
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        required
        {...register(id)}
      />
    </fieldset>
  );
}

