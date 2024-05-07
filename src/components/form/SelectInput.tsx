import { FieldValues, UseFormRegister } from "react-hook-form";

interface SelectInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label: string;
}

export const SelectInput = <T extends FieldValues>({
  register,
  label,
}: SelectInputProps<T>) => {
  return (
    <div className="flex flex-col">
      <label htmlFor="firstName" className="select-none font-semibold text-blue-950">
        {label}
      </label>
      <div className="select">
        <input className="border rounded-md my-2 border-gray-900/10 py-2" />
      </div>
    </div>
  );
};
