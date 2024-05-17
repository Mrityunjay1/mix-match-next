"use client";

import { signInUser } from "@/app/actions/authActions";
import { LoginSchema, loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";
import { toast } from "react-toastify";

type Props = {};

const LoginForm = (props: Props) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);
    if (result.status === "success") {
      router.push("/members");
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  };
  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-danger">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Login</h1>
          </div>
          <p className="text-neutral-500">Welcome to Next-Match</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              {...register("email", { required: "Email is Required" })}
              label="Email"
              variant="bordered"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              {...register("password", { required: "Password is Required" })}
              label="password"
              type="password"
              variant="bordered"
              defaultValue=""
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <Button
              isDisabled={!isValid}
              fullWidth
              color="danger"
              type="submit"
              isLoading={isSubmitting}
            >
              Login
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
