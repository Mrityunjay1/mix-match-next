"use client";
import { registerUser } from "@/app/actions/authActions";
import { RegisterSchema, registerSchema } from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import React from "react";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

type Props = {};

const RegisterForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });
  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);
    console.log(result);
  };
  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-danger">
          <div className="flex flex-row items-center gap-3">
            <GiPadlock size={30} />
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <p className="text-neutral-500">Welcome to Next-Match</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              {...register("name", { required: "Name is Required" })}
              label="Name"
              variant="bordered"
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
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
            >
              Register
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
