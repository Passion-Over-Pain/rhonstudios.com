import type { GameId } from "@/libs/database/gamesData";
import type { CollaboratorId } from "@/libs/database/teamData";

export type MediaCategory =
  "screenshot" | "concept-art" | "gameplay" | "characters" | "environment";
export type MediaType = "image" | "video" | "gif";

export interface MediaItem {
  id: string;
  url: string;
  title: string;
  caption?: string;
  type: MediaType;
  category: MediaCategory;
  poster?: string;
  gameId?: GameId;
  collaboratorId?: CollaboratorId;
}

export const mediaData: MediaItem[] = [
  // TONKORI

  {
    id: "tonkori-dagger",
    url: "/tonkori/Tonkori_Dagger3DModdel.png",
    title: "Weapon | Dagger",
    type: "image",
    category: "screenshot",
    gameId: "tonkori",
    collaboratorId: "sayyidali",
  },
  {
    id: "tonkori-house-gif",
    url: "/tonkori/Tonkori_HouseGif.gif",
    title: "House",
    type: "gif",
    category: "environment",
    gameId: "tonkori",
    collaboratorId: "sayyidali",
  },
  {
    id: "tonkori-sword",
    url: "/tonkori/Tonkori_Sword3DModdel.png",
    title: "Weapon | Sword",
    type: "image",
    category: "screenshot",
    gameId: "tonkori",
    collaboratorId: "sayyidali",
  },
  {
    id: "tonkori-stone",
    url: "/tonkori/Tonkori_Stone.png",
    title: "Kalivek Stone",
    type: "image",
    category: "screenshot",
    gameId: "tonkori",
    collaboratorId: "sayyidali",
  },
  {
    id: "tonkori-house-2",
    url: "/tonkori/Tonkori_House2.png",
    title: "House",
    type: "image",
    category: "environment",
    gameId: "tonkori",
    collaboratorId: "sayyidali",
  },
  {
    id: "tonkori-house-3",
    url: "/tonkori/Tonkori_House3.png",
    title: "House",
    type: "image",
    category: "screenshot",
    gameId: "tonkori",
    collaboratorId: "sayyidali",
  },

  // AFTERLIGHT

  {
    id: "angel-estados",
    url: "/afterlight/collaborators/angel_estados.png",
    title: "Estados",
    type: "image",
    category: "screenshot",
    gameId: "afterlight",
    collaboratorId: "angelramirez",
  },
];

export function getGameGallery(gameId: GameId) {
  return mediaData.filter((m) => m.gameId === gameId);
}

export function getCollaboratorMedia(collaboratorId: CollaboratorId) {
  return mediaData.filter((m) => m.collaboratorId === collaboratorId);
}
