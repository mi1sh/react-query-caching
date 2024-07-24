export interface User {
	id: number;
	name: string;
	email: string;
	phone: string;
}

export interface Todo {
    id: number,
    todo: string,
    completed: boolean;
	userId: number;
}

export interface Posts {
	id: number;
	title: string;
	body: string;
}