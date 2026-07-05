import { useFormContext } from "react-hook-form";

export default function LongAnswerInput({ id, placeholder }: { id: string; placeholder: string }) {
  const { register } = useFormContext();

  return (
    <fieldset>
      <textarea
        rows={3}
        className="form-control"
        placeholder={placeholder}
        required
        {...register(id)}
      />
    </fieldset>
  );
}