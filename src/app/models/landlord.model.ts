import { Agent } from './agent.model';
import { User } from './user.model';
import { CompanyProfile } from './company-profile.model';
import { Property } from './property.model';

export interface Landlord extends User{
	company_profile: CompanyProfile;
	properties: string[];
	landlord_type: string;
	business_areas: string[];
	agents: Agent[];
}