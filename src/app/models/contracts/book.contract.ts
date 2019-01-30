export interface BookContract{
	id?: number;
	title: string;
	category: string;
	description: string;
}

/**
* Update if GET all returns different result
**/
export interface BookApiGetAllContract{
	books: BookContract[];
}

/**
* Update if POST returns different result
**/
export interface BookApiCreateContract{
	id: number;
	title: string;
	category: string;
	description: string;
}