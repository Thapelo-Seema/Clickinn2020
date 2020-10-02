import { Landlord } from './landlord.model';
import { CompanyProfile } from './company-profile.model';
import { Property } from './property.model';
import { User } from './user.model';

export interface Agent extends User{
	type: string;
	landlords: Landlord[];
	company_profile: CompanyProfile;
	properties: Property[];
	business_areas: string[];

}