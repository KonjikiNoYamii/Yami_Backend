-- CreateTable
CREATE TABLE "characters" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "rarity" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "effect" TEXT,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "characters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_stats" (
    "id" SERIAL NOT NULL,
    "attack" INTEGER,
    "critChance" INTEGER,
    "element" TEXT,
    "magic" INTEGER,
    "charm" INTEGER,
    "speed" INTEGER,
    "aggression" INTEGER,
    "agility" INTEGER,
    "mana" INTEGER,
    "magicDefense" INTEGER,
    "magicPower" INTEGER,
    "poisonDamage" INTEGER,
    "characterId" INTEGER NOT NULL,

    CONSTRAINT "character_stats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "character_stats_characterId_key" ON "character_stats"("characterId");

-- AddForeignKey
ALTER TABLE "character_stats" ADD CONSTRAINT "character_stats_characterId_fkey" FOREIGN KEY ("characterId") REFERENCES "characters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
