/**
*
*  Book Category enum 
* 
**/
export enum BookCategory{
	NONE = '',
	DRAMA = 'Drama',
	COMEDY = 'Comedy',
	SPORT = 'Sport'
}

export namespace BookCategory {
    export function keys() {
    	return [
    		'', 
    		'Drama',
    		'Comedy',
    		'Sport'
    	]
    }
}


/**
*
* Book Model
* 
**/
export class BookModel{
	id?: number;
	title:string; 
	category:BookCategory; 
	description:string;

	constructor(title:string, category:BookCategory, description:string, id?:number){
		this.title = title;
		this.category = category;
		this.description = description;
		this.id = id ? id : null;
	}
	isValid(){
		
	}
	toJson(){
		var json = {
			title: this.title,
			category: this.category,
			description: this.description
		}
		if(this.id !== null) json.id = this.id;
		return json; 
	}
}