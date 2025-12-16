import { asyncHandler } from "../utils/async.hander";
import type { Request, Response } from "express";
import {login, register } from '../services/auth.service'
import { successResponse } from "../utils/response";

export const registerUser = asyncHandler(async(req:Request, res:Response) =>{
    const result = await register(req.body)

    successResponse(
        res,
        "Register berhasil!!",
        result,
        null,
        201
    )
})

export const loginUser = asyncHandler(async(req:Request, res:Response) =>{
    const result = await login(req.body)

    successResponse(
        res,
        "Login berhasil!!",
        result,
        null,
        200

    )
})