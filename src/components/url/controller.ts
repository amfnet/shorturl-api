import { NextFunction, Request, Response } from "express";
import { ServiceUrl } from "./service";

const serviceUrl = new ServiceUrl();

export function postSaveUrl(req: Request, res: Response, next: NextFunction) {
	const { url } = req.body;
	serviceUrl
		.saveUrl(url)
		.then((data) => {
			res.json(data);
		})
		.catch((e) => {
			next(e);
		});
}

export function getRedirectUrl(
	req: Request,
	res: Response,
	next: NextFunction
) {
	try {
		const { index } = req.params;
		const url = serviceUrl.searchUrlByIndex(Number(index));

		res.redirect(url);
	} catch (error) {
		next(error);
	}
}
