"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useTransition } from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

const UserSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email(),
  emoji: z.string().emoji().optional(),
})

const EMOJI_OPTIONS = [
  { emoji: "💰", label: "Money (Sale)" },
  { emoji: "👤", label: "User (Sign-up)" },
  { emoji: "🎉", label: "Celebration" },
  { emoji: "📅", label: "Calendar" },
  { emoji: "🚀", label: "Launch" },
  { emoji: "📢", label: "Announcement" },
  { emoji: "🎓", label: "Graduation" },
  { emoji: "🏆", label: "Achievement" },
  { emoji: "💡", label: "Idea" },
  { emoji: "🔔", label: "Notification" },
]

type UserType = z.infer<typeof UserSchema>

export default function UserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<UserType>({
    resolver: zodResolver(UserSchema),
    defaultValues: { email: "", name: "" },
  })

  const selectedEmoji = watch("emoji")

  const [pending, startTransition] = useTransition()

  const onSubmit = async (data: UserType) => {
    startTransition(async () => {
      console.log(data)
    })
  }
  return (
    <form
      className="w-full space-y-6 rounded border p-8 sm:max-w-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <Label htmlFor="name">Name</Label>
        <Input
          placeholder="Name"
          autoFocus
          {...register("name")}
          id="name"
          className={
            errors.name
              ? "focus-visible:ring-red-500"
              : "focus-visible:ring-black dark:focus-visible:ring-white"
          }
        />
      </div>
      {errors.name ? (
        <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
      ) : null}

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          placeholder="Email"
          id="email"
          {...register("email")}
          className={
            errors.email
              ? "focus-visible:ring-red-500"
              : "focus-visible:ring-black dark:focus-visible:ring-white"
          }
        />
      </div>
      {errors.email ? (
        <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
      ) : null}

      <div>
        <Label htmlFor="emoji">Emoji</Label>
        <div className="flex flex-wrap gap-3">
          {EMOJI_OPTIONS.map(({ emoji }) => (
            <button
              key={emoji}
              type="button"
              className={cn(
                "size-10 flex items-center justify-center text-xl rounded-md transition-all",
                selectedEmoji === emoji
                  ? "dark:bg-slate-100 bg-slate-700 ring-2 ring-brand/80 scale-110"
                  : "dark:bg-slate-100 bg-slate-700 hover:bg-brand/80"
              )}
              onClick={() => setValue("emoji", emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>
      </div>
      {errors.emoji ? (
        <p className="mt-1 text-sm text-red-500">{errors.emoji.message}</p>
      ) : null}

      <Button type="submit" disabled={pending}>
        Submit
      </Button>
    </form>
  )
}
