import { ResponseUrl } from "./interfaces";

export class UrlModel {
	private _urlCollection: string[];

	constructor(pUrl: string[] = []) {
		this._urlCollection = pUrl;
	}

	public save(url: string): [string, number] {
		if (!this._urlCollection.includes(url)) {
			this._urlCollection.push(url);
		}
		return [url, this.findIndex(url)];
	}

	public findIndex(url: string): number {
		return this._urlCollection.indexOf(url);
	}

	public getUrl(index: number): string | null {
		return this._urlCollection[index] ?? null;
	}
}
