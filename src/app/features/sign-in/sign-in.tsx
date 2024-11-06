import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import background from "@/assets/background.png";

import CustomUnderlineInput from "@/ui/atoms/custom-input.tsx";
import { useAuth } from "@/app/core/auth-context";
import { Button } from "@/ui/atoms/button.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/ui/atoms/form.tsx";
import { Inputs, schema } from "@/app/features/sign-in/sign-in.props.ts";
import Spinner from "@/ui/atoms/spinner.tsx";

const SignIn: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const form = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onSubmit",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  const onSubmit = async (data: Inputs) => {
    const success = await login(data);
    if (success) {
      navigate("/dashboard");
    }
  };

  return (
    <div
      className="w-screen h-screen bg-no-repeat bg-center bg-cover flex flex-col justify-between items-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="text-6xl text-white mt-16">Dev Challenge</h1>

      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center flex-grow justify-between mt-10 space-y-8 mb-10"
        >
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-40 items-center">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem className="w-60">
                  <FormControl>
                    <CustomUnderlineInput
                      {...field}
                      type="text"
                      placeholder="Username"
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.username && (
                      <p className="text-red-500">{errors.username.message}</p>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-60">
                  <FormControl>
                    <CustomUnderlineInput
                      {...field}
                      type="password"
                      placeholder="Password"
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.password && (
                      <p className="text-red-500">{errors.password.message}</p>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col items-center space-y-4 mb-12">
            <Button
              type="submit"
              className="w-44 bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-500"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : "Login"}
            </Button>

            <div className="mt-4 text-white text-center">
              <span className="text-2xl">New to the challenge? </span>
              <Link
                to="/register"
                className="text-yellow-400 hover:text-yellow-500 font-semibold text-2xl"
              >
                Sign up
              </Link>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignIn;
