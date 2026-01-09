import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "@/model/auth";

// Demo users for development - replace with database in production
const DEMO_USERS = [
  {
    id: "1",
    email: "demo@example.com",
    // In production, use bcrypt.hash() to store hashed passwords
    password: "Demo123!",
    name: "Demo User",
  },
];

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email și parola sunt obligatorii");
        }

        // Validate with Zod schema
        const validation = loginSchema.safeParse({
          email: credentials.email,
          password: credentials.password,
        });

        if (!validation.success) {
          throw new Error(validation.error.issues[0].message);
        }

        // TODO: Replace with actual database lookup
        // Example with a real database:
        // const user = await db.user.findUnique({ where: { email: credentials.email } });
        // if (!user || !await bcrypt.compare(credentials.password, user.hashedPassword)) {
        //   throw new Error("Email sau parolă incorectă");
        // }

        const user = DEMO_USERS.find(
          (u) =>
            u.email === credentials.email && u.password === credentials.password
        );

        if (!user) {
          throw new Error("Email sau parolă incorectă");
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: "/account/authenticate",
    error: "/account/authenticate",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  // Enable debug in development
  debug: process.env.NODE_ENV === "development",
};
