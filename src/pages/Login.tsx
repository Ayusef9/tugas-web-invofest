import FormInput from "../components/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../components/ui/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z.string().min(1, "Email harus diisi"),
  password: z.string().min(8, "Password harus minimal 8 karakter"),
});

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const onSubmit = (data: FormData) => {
    if (
      data.email === "admin@example.com" &&
      data.password === "password123"
    ) {
      console.log("Login sukses");

      login(data.email);

      navigate("/dashboard");
    } else {
      console.log("Login gagal");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          text="email"
          type="text"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <FormInput
          text="password"
          type="password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        <div>
          <Button label="Login" variant="primary" />
        </div>
      </form>

      <p>
        Belum punya akun?{" "}
        <Link to="/register" className="text-blue-500">
          Daftar Sekarang
        </Link>
      </p>
    </div>
  );
}