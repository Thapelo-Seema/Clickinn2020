import { User } from './user.model';

export interface Contract{
	agreed_on: Date;
	type: string;
	parties: User[]; 
}