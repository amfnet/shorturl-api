import { lookup } from "dns";
import { UrlModel } from "./model";
import { ResponseUrl } from "./interfaces";

const urlModel = new UrlModel();

export class ServiceUrl {
	public async saveUrl(url: string): Promise<ResponseUrl | undefined> {
		try {
			const urlVerified: string = await this.verifyUrl(url);
			const [original_url, short_url] = urlModel.save(urlVerified);
			return { original_url, short_url };
		} catch (error) {
			if (typeof error === "string") throw new Error(error);
		}
	}

	verifyUrl(url: string): Promise<string> {
		return new Promise((resolve, reject) => {
			lookup(url, (err, addr, family) => {
				if (!err) {
					//if (!url.includes("http")) resolve("http://" + url);
					resolve(url);
				}
				reject("invalid url");
			});
		});
	}

	searchUrlByIndex(index: number): string {
		const url = urlModel.getUrl(index);
		if (!url) {
			throw Error("url not found");
		}
		return "http://" + url;
	}
}
