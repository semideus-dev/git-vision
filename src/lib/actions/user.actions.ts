import db from "@/lib/db"

interface UserProps {
  clerkId: string
  email: string
  username: string
}

export const createUser = async (user: UserProps) => {
  const userData = await db.user.create({
    data: {
      clerkId: user.clerkId,
      email: user.email,
      username: user.username,
    },
  })

  return userData
}