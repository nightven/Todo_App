-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isVerifiedEmail" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "password" TEXT NOT NULL DEFAULT 'default_password',
ADD COLUMN     "token" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "verificationToken" TEXT NOT NULL DEFAULT '';
