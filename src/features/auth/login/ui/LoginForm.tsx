import { Button, Input } from "@/shared/ui";
import { AuthNavigation } from "../..";
import { useForm } from "react-hook-form";
import { loginSchema, type LoginSchema } from "../model/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../api/useLogin";

export function LoginForm() {
  const loginUser = useLogin();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchema) => {
    const error = await loginUser(data);
    if (error) {
      console.log(error);

      setError("root", {
        type: "validate",
        message: error.message,
      });
    }
  };

  return (
    <form
      className={`flex flex-col gap-5 bg-gray-200 p-10 rounded-xl w-96 h-4/6 justify-around items-center ${errors.root?.message && "border-red-600 border"}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="font-semibold text-2xl">Login</label>

      <div className="w-full h-16">
        <Input
          label="Email"
          {...register("email")}
          placeholder="Email"
          error={errors.email?.message}
        />
      </div>

      <div className="w-full h-16">
        <Input
          label="Password"
          {...register("password")}
          placeholder="Password"
          error={errors.password?.message}
          type="password"
        />
        {errors.root?.message && (
          <span className="text-xs text-red-600 mt-1">
            {errors.root?.message}
          </span>
        )}
      </div>

      <div className="w-full h-16 flex flex-col items-center justify-center">
        <Button type="submit" variant="create" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </Button>
      </div>
      <AuthNavigation />
    </form>
  );
}
