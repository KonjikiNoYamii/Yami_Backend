import type { Request, Response } from "express";
import {
  createProfile,
  deleteProfile,
  getAllProfile,
  getProfileById,
  searchProfile,
  updateProfile,
} from "../services/profile.service";
import { successResponse } from "../utils/response";

export const getAll = async (_req: Request, res: Response) => {
  const profile = await getAllProfile();

  successResponse(res, "Profile berhasil diambil!", profile, null, 200);
};

export const getById = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Parameter tidak ditemukan!");
  }

  const profile = await getProfileById(req.params.id);

  if (!profile) {
    throw new Error("Profile tidak ditemukan!")
  }

  successResponse(res, "Profile berhasil ditemukan!", profile, null, 200);
};

export const search = async (req: Request, res: Response) => {
  const { name, gender, address } = req.query;

  const data = {
    ...(name && { name: String(name) }),
    ...(gender && { gender: String(gender) }),
    ...(address && { address: String(address) }),
  };

  const result = await searchProfile(data);

  successResponse(res, "Profile berhasil ditemukan!", result, null, 200);
};

export const create = async (req: Request, res: Response) => {
  const file = req.file;
  const { name, gender, address, userId } = req.body;

  const imageurl = `/public/upload${file?.filename}`;

  const newProfile = {
    name: String(name),
    gender: String(gender),
    address: String(address),
    userId: Number(userId),
    profilePictureUrl: imageurl,
  };
  const result = await createProfile(newProfile);

  successResponse(res, "Profile berhasil dibuat!", result, null, 201);
};

export const update = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Parameter tidak ditemukan!");
  }
  const numId = req.params.id;
  const file = req.file;
  const { name, gender, address } = req.body;

  const imageurl = `/public/upload${file?.filename}`;

  const profile = {
    name: String(name),
    gender: String(gender),
    address: String(address),
    profilePictureUrl: imageurl,
  };

  const result = await updateProfile(numId, profile);

  successResponse(res, "Profile berhasil diupdate", result, null, 201);
};

export const deleted = async (req: Request, res: Response) => {
  if (!req.params.id) {
    throw new Error("Parameter tidak ditemukan!!");
  }

  const del = await deleteProfile(req.params.id);

  successResponse(res, "Profile berhasil dihapus!", del, null, 200);
};
