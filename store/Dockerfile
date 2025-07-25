# 1. Build
FROM node:18-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

COPY . .
# Ensure standalone output
RUN npx next build

# 2. Runtime
FROM node:18-alpine AS runner
WORKDIR /app

# Copy only production files
COPY package.json package-lock.json* ./
RUN npm ci --production

# Copy the compiled standalone app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
