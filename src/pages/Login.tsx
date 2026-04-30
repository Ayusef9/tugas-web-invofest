import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import Button from "../components/ui/Button";

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password harus minimal 8 angka"),
});

export default function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });
  return (
    <div>
        <form onSubmit={handleSubmit(console.log())}>
            <FormInput text="email" type="text" name="email" register={register} error={errors.email?.message} />

            <FormInput text="password" type="password" name="password" register={register} error={errors.password?.message} />

            <div>
                <Button label="Login" variant="primary" />
            </div>
        </form>
    </div>
  );
}