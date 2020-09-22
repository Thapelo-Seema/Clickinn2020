import { UserPreview } from './user-preview.model'

export interface Landlord{
	company_profile?: any;
	properties: string[];
	landlord_type: string;
	business_areas: string[];
	agents: UserPreview[];
	
}