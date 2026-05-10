import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {z} from "zod";
import FormInput from "../../../../components/FormInput";
import Button from "../../../../components/ui/Button";

type FormData = {
    nama: string;
    category: string;
    lokasi: string;
    tanggal: string;
    deskripsi: string;
};

const schema = z.object({
    nama: z.string().min(1, "Nama harus diisi"),
    category: z.string().min(1, "Category harus diisi"),
    lokasi: z.string().min(1, "Lokasi harus diisi"),
    tanggal: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format tanggal tidak valid"),
    deskripsi: z.string().min(10, "Deskripsi harus diisi")
});

export default function CreateNewEvent() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema)
});

const onSubmit = (data: FormData) => {
        console.log(data);
};

    return (
        <div>
            <h1>Create new Event</h1>
            <p>Silahkan isi semua data dengan benar</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput text="nama" type="text" name="nama" register={register} error={errors.nama?.message} />
                <FormInput text="category" type="text" name="category" register={register} error={errors.category?.message} />
                <FormInput text="lokasi" type="text" name="lokasi" register={register} error={errors.lokasi?.message} />
                <FormInput text="tanggal" type="date" name="tanggal" register={register} error={errors.tanggal?.message} />
                <FormInput text="deskripsi" type="text" name="deskripsi" register={register} error={errors.deskripsi?.message} />

            <Button label= "Simpan" variant="primary" />

            </form>
        </div>
    );
}