"use server";

import type { UserType } from "@/app/_components/UserForm";

export const updateUserAction = async (data: UserType) => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log(data);
};
