import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpEvent, HttpResponse } from "@angular/common/http";

@Injectable({
	providedIn: 'root'
})
export class RequestCacheInterceptor {

	private cache = new Map<string, [Observable<HttpEvent<any>>, HttpResponse<any>]>();
	
	constructor() { }

	/**
	 * Fetch either an Observable or an HttpResponse given the Url string
	 *
	 * @param      {string}  url     The url
	 * @return     {Observable}  Http event or response 
	 */
	get(url): Observable<HttpEvent<any>> | HttpResponse<any>
	{
		var returnData = null;
		var resultObj = this.cache.get(url);

		if (resultObj)
		{
			if (resultObj[0] != null)
			{
				returnData = resultObj[0];
			}
			else if (resultObj[1] != null)
			{
				returnData = resultObj[1];
			}
		}
		return returnData;
	}

	/**
	 * Sets either an Observable or an HttpResponse. If one is set the other will be null
	 *
	 * @param      {string}  url        The url
	 * @param      {string}  dataToSet  The data to set
	 *
	 */
	set(url, dataToSet)
	{
		if (dataToSet instanceof Observable)
		{
			this.cache.set(url, [dataToSet, null]);
		}
		else if (dataToSet instanceof HttpResponse)
		{
			this.cache.set(url, [null, dataToSet]);
		}
		else
		{
			console.error("Unsure how to handle this data", dataToSet);
		}
	}
}

	