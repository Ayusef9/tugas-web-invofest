import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    role: string;
    image: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    role: z.string().min(1, "Role harus diisi"),
    image: z.string().min(1, "Foto harus diisi"),
});

export default function CreateCategory() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
});

const onSubmit = (data: FormData) => {
    console.log(data);
}
    
return (
    <div>
        <h1>Create new Speaker</h1>
        <p>Silahkan isi semua data dengan benar</p>

        <form onSubmit={handleSubmit(onSubmit)}>
            
            <FormInput text="nama" type="text" name="nama" register={register} error={errors.nama?.message} />
            <FormInput text="role" type="text" name="role" register={register} error={errors.role?.message} />
            <FormInput text="image" type="text" name="image" register={register} error={errors.image?.message} />

            <Button label="Submit" variant="primary" />
        </form>
    </div>
    );
}