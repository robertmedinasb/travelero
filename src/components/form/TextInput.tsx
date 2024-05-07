import { FC } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface TextInputProps<T extends FieldValues> {
  register: UseFormRegister<T>;
  label: string;
  id: keyof T;
  placeholder: string;
}

export const TextInput: FC<TextInputProps<any>> = <T extends FieldValues>({
  register,
  label,
  id,
  placeholder,
}: TextInputProps<T>) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id.toString()} className="select-none font-semibold text-blue-950">
        {label}
      </label>
      <input
        type="text"
        {...register(id as Path<T>)}
        id={id.toString()}
        className="border-b border-gray-900/10 outline-0 my-1 py-2"
        placeholder={placeholder}
      />
    </div>
  );
};
