import { useRegister } from "..";
import { Button, Input } from "@/shared/ui";
import { useForm } from "react-hook-form";
import { registerSchema, type RegisterSchema } from "..";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthNavigation } from "../../ui/AuthNavigation";

export function RegisterForm() {
  const registerUser = useRegister();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterSchema) => {
    const error = await registerUser(data);
    if (error?.message) {
      setError("email", {
        type: "manual",
        message: error.message,
      });
    }
  };

  return (
    <form
      className="flex flex-col gap-5 bg-gray-200 p-10 rounded-xl w-96 h-4/6 justify-around items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="font-semibold text-2xl">Register</label>

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
      </div>

      <div className="w-full h-16">
        <Input
          label="Confirm Password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
          type="password"
          error={errors.confirmPassword?.message}
        />
      </div>
      <div className="w-full h-16 flex items-center justify-center">
        <Button type="submit" variant="create" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Register"}
        </Button>
      </div>
      <AuthNavigation />
    </form>
  );
}
