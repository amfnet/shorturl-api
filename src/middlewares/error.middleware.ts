import { Response, Request, NextFunction } from "express";

export function invalidUrlMidd(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (err.message == "invalid url") {
		res.status(404).json({ error: err.message });
	} else {
		next(err);
	}
}

export function invalidIndexMidd(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	res.status(404).json({ error: "No short URL found for the given input" });
}
