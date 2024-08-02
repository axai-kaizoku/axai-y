"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { updateUserAction } from "@/server/actions";
import { useTransition } from "react";

const UserSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email(),
});

export type UserType = z.infer<typeof UserSchema>;

export default function UserForm() {
  const form = useForm<UserType>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
    defaultValues: { email: "", name: "" },
  });

  const [pending, startTransition] = useTransition();

  const onSubmit = async (data: UserType) => {
    startTransition(async () => {
      await updateUserAction(data);
    });
    form.reset();
  };
  return (
    <Form {...form}>
      <form
        className="w-full space-y-6 rounded border p-8 sm:max-w-sm"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Name"
                  autoFocus
                  {...field}
                  className={
                    form.formState.errors.name
                      ? "focus-visible:ring-red-500"
                      : "focus-visible:ring-black dark:focus-visible:ring-white"
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Email"
                  autoFocus
                  {...field}
                  className={
                    form.formState.errors.email
                      ? "focus-visible:ring-red-500"
                      : "focus-visible:ring-black dark:focus-visible:ring-white"
                  }
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" disabled={pending}>
          Submit
        </Button>
      </form>
    </Form>
  );
}
