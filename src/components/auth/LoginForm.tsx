"use client";

import { useState } from "react";
import { z } from "zod";
import { LoginSchema } from "@/schemas";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/auth/form";
import { Input } from "@/components/ui/input";

const LoginForm = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors: { email?: string; password?: string } = {};

    try {
      LoginSchema.parse(formValues);
    } catch (e) {
      if (e instanceof z.ZodError) {
        e.errors.forEach((error) => {
          errors[error.path[0] as string] = error.message;
        });
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(formValues);
      // Aquí puedes manejar el envío del formulario
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 justify-between w-full sm:w-3/6 lg:1/2 p-4">
      <h1 className="text-center text-3xl text-secondary">Inicia sesión</h1>
      <FormItem>
        <FormLabel htmlFor="email" className="text-secondary">Correo</FormLabel>
        <FormControl>
          <Input
            id="email"
            name="email"
            type="email"
            value={formValues.email}
            onChange={handleChange}
            placeholder="ejemplo@gmail.com"
            className="text-primary"
          />
        </FormControl>
        {formErrors.email && <FormMessage className="text-destructive">{formErrors.email}</FormMessage>}
      </FormItem>
      <FormItem>
        <FormLabel htmlFor="password" className="text-secondary">Contraseña</FormLabel>
        <FormControl>
          <Input
            id="password"
            name="password"
            type="password"
            value={formValues.password}
            onChange={handleChange}
            placeholder="*******"
            className="text-primary"
          />
        </FormControl>
        {formErrors.password && <FormMessage className="text-destructive">{formErrors.password}</FormMessage>}
      </FormItem>
      <a href="/auth/newPassword">
        <Button type="button" variant={"link"} className="p-0">
          ¿Se te olvidó la contraseña?
        </Button>
      </a>
      <Button
        type="submit"
        className="w-full font-semibold self-end"
      >
        Entrar
      </Button>
      <p className="text-pretty text-terciary">
        ¿No eres un miembro?{" "}
        <a
          className="text-dark dark:text-white dark:hover:text-yellowB4/80 underline transition-all hover:text-yellowB4"
          href="/auth/register"
        >
          Regístrate ahora
        </a>
      </p>
    </form>
  );
};

export default LoginForm;
