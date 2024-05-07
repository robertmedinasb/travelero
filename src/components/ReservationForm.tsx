import { useForm } from "react-hook-form";
import { IReservationForm } from "../infrastructure/types/ReservationForm";
import { SelectInput } from "./form/SelectInput";
import { TextInput } from "./form/TextInput";

export const ReservationForm = () => {
  const { register, handleSubmit } = useForm<IReservationForm>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const onSubmit = (data: IReservationForm) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-gray-700 bg-white p-8 m-10 flex rounded-xl flex-col w-1/4 min-w-[200px]">
        <TextInput
          register={register}
          id={"firstName" as keyof IReservationForm}
          label="Nombres"
          placeholder="Pierre"
        />
        <br />
        <TextInput
          register={register}
          id={"lastName" as keyof IReservationForm}
          label="Apellidos"
          placeholder="Medina"
        />
        <br />
        <SelectInput label="Tipo de Doc" register={register} />
      </div>
    </form>
  );
};
