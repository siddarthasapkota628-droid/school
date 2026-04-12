FROM node:22-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable

# Copy only package files first (for caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy rest of the app
COPY . .

# Build Next.js app
RUN pnpm build

# Expose port
EXPOSE 3000

# Start app
CMD ["pnpm", "start"]