-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationCode" TEXT,
ADD COLUMN     "verificationCodeExpiresAt" TIMESTAMP(3);
