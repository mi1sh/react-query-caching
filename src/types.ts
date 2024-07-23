export interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
}

export interface Gallery {
    id: number,
    title: string,
    url: string,
  }

export interface Posts {
	id: number;
	title: string;
	body: string;
}