import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import background from "@/assets/background.png";

import { Button } from "@/ui/atoms/button.tsx";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/ui/atoms/form.tsx";
import { Inputs, schema } from "@/app/features/register/register.props";
import useZsStore from "@/app/infrastructure/hooks/use-zs-store.ts";
import CustomUnderlineInput from "@/ui/atoms/custom-input.tsx";
import useRegister from "@/app/infrastructure/hooks/use-register.ts";
import { useNavigate } from "react-router-dom";
import { toast } from "@/ui/hooks/use-toast.ts";

const Register = () => {
  const { addPhoto, photos } = useZsStore();
  const { register: registerUser } = useRegister();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const form = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitting },
  } = form;

  useEffect(() => {
    const storedPhoto = photos.find((photo) => photo.id === "profile-pic");
    if (storedPhoto) {
      setSelectedImage(storedPhoto.url);
    }
  }, [photos]);

  const onSubmit = async (data: Inputs) => {
    try {
      await registerUser(data);
      navigate("/login");
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: "There was a problem with your request.",
      });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setSelectedImage(base64data);
        addPhoto({ id: "profile-pic", url: base64data });
      };
      reader.readAsDataURL(file);
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
              name="email"
              render={({ field }) => (
                <FormItem className="w-60">
                  <FormControl>
                    <CustomUnderlineInput
                      {...field}
                      type="text"
                      placeholder="Email"
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-40 items-center">
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-60">
                  <FormControl>
                    <CustomUnderlineInput
                      {...field}
                      type="password"
                      placeholder="Confirm Password"
                    />
                  </FormControl>
                  <FormMessage>
                    {errors.confirmPassword && (
                      <p className="text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </FormMessage>
                </FormItem>
              )}
            />
          </div>

          <div className="relative flex items-center justify-center w-60 h-40 border-2 border-yellow-400 rounded-lg overflow-hidden">
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Selected"
                className="object-cover w-full h-full"
              />
            ) : (
              <label className="text-yellow-400 cursor-pointer flex items-center justify-center w-full h-full">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
                Add Picture
              </label>
            )}
          </div>

          <Button
            type="submit"
            className="w-44 bg-yellow-400 text-black py-2 rounded-full font-semibold hover:bg-yellow-500"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Register;
