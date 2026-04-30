import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../components/FormInput";
import Button from "../components/ui/Button";

const schema = z.object ({
    name: z.string().min(1, "Nama harus diisi"),
    email: z.string().min(8, "Email minimal 8 karakter"),
    alamat: z.string().min(8, "Alamat minimal 8 karakter"),
    bio: z.string().min(8, "Bio minimal 8 karakter"),
});

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
            <FormInput text="name" type="text" name="name" register={register} error={errors.name?.message} />  
            <FormInput text="email" type="text" name="email" register={register} error={errors.email?.message} />  
            <FormInput text="alamat" type="text" name="alamat" register={register} error={errors.alamat?.message} />  
            <FormInput text="bio" type="text" name="bio" register={register} error={errors.bio?.message} />  

            <div>
                <Button label="Daftar" variant="primary" />
            </div>
        </form>
    </div>
  );
}
             