import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SimpleLoadingStrategy } from './simplePreloadStrategy';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
    data:{preload: true}
  },
  {
    path: 'search-feed',
    loadChildren: () => import('./pages/search-feed/search-feed.module').then( m => m.SearchFeedPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule),
    data:{preload: true}
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule),
    data:{preload: true}
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./pages/sign-in/sign-in.module').then( m => m.SignInPageModule),
    data:{preload: true}
  },
  {
    path: 'contact-details',
    loadChildren: () => import('./pages/contact-details/contact-details.module').then( m => m.ContactDetailsPageModule),
    data:{preload: true}
  },
  {
    path: 'results-scanning',
    loadChildren: () => import('./pages/results-scanning/results-scanning.module').then( m => m.ResultsScanningPageModule),
    data:{preload: true}
  },
  {
    path: 'results',
    loadChildren: () => import('./pages/results/results.module').then( m => m.ResultsPageModule),
    data:{preload: true}
  },
  {
    path: 'listing',
    loadChildren: () => import('./pages/listing/listing.module').then( m => m.ListingPageModule),
    data:{preload: true}
  },
  {
    path: 'bursary-request',
    loadChildren: () => import('./pages/bursary-request/bursary-request.module').then( m => m.BursaryRequestPageModule),
    data:{preload: true}
  },
  {
    path: 'free-sign-up',
    loadChildren: () => import('./pages/free-sign-up/free-sign-up.module').then( m => m.FreeSignUpPageModule),
    data:{preload: true}
  },
  {
    path: 'placement-sign-up',
    loadChildren: () => import('./pages/placement-sign-up/placement-sign-up.module').then( m => m.PlacementSignUpPageModule),
    data:{preload: true}
  },
  {
    path: 'tools-sign-up',
    loadChildren: () => import('./pages/tools-sign-up/tools-sign-up.module').then( m => m.ToolsSignUpPageModule),
    data:{preload: true}
  },
  {
    path: 'management-sign-up',
    loadChildren: () => import('./pages/management-sign-up/management-sign-up.module').then( m => m.ManagementSignUpPageModule),
    data:{preload: true}
  },
  {
    path: 'upload-listing',
    loadChildren: () => import('./pages/upload-listing/upload-listing.module').then( m => m.UploadListingPageModule)
  },
  {
    path: 'landlord-home',
    loadChildren: () => import('./pages/landlord-home/landlord-home.module').then( m => m.LandlordHomePageModule)
  },
  {
    path: 'my-listings',
    loadChildren: () => import('./pages/my-listings/my-listings.module').then( m => m.MyListingsPageModule)
  },
  {
    path: 'edit-listing',
    loadChildren: () => import('./pages/edit-listing/edit-listing.module').then( m => m.EditListingPageModule)
  },
  {
    path: 'customize-lease',
    loadChildren: () => import('./pages/customize-lease/customize-lease.module').then( m => m.CustomizeLeasePageModule)
  },
  {
    path: 'placement-tracking',
    loadChildren: () => import('./pages/placement-tracking/placement-tracking.module').then( m => m.PlacementTrackingPageModule)
  },
  {
    path: 'student-profile',
    loadChildren: () => import('./pages/student-profile/student-profile.module').then( m => m.StudentProfilePageModule)
  },
  {
    path: 'landlord-profile',
    loadChildren: () => import('./pages/landlord-profile/landlord-profile.module').then( m => m.LandlordProfilePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./pages/terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'financial-admin',
    loadChildren: () => import('./pages/financial-admin/financial-admin.module').then( m => m.FinancialAdminPageModule)
  },
  {
    path: 'agent-admin',
    loadChildren: () => import('./pages/agent-admin/agent-admin.module').then( m => m.AgentAdminPageModule)
  },
  {
    path: 'management-admin',
    loadChildren: () => import('./pages/management-admin/management-admin.module').then( m => m.ManagementAdminPageModule)
  },
  {
    path: 'searchfeed-filtering',
    loadChildren: () => import('./modals/searchfeed-filtering/searchfeed-filtering.module').then( m => m.SearchfeedFilteringPageModule)
  },
  {
    path: 'listing-filtering',
    loadChildren: () => import('./modals/listing-filtering/listing-filtering.module').then( m => m.ListingFilteringPageModule)
  },
  {
    path: 'room-status',
    loadChildren: () => import('./pages/room-status/room-status.module').then( m => m.RoomStatusPageModule)
  },
  {
    path: 'rent-tracking',
    loadChildren: () => import('./pages/rent-tracking/rent-tracking.module').then( m => m.RentTrackingPageModule)
  },
  {
    path: 'deposit-payment',
    loadChildren: () => import('./pages/deposit-payment/deposit-payment.module').then( m => m.DepositPaymentPageModule)
  },
  {
    path: 'deposit-room-modal',
    loadChildren: () => import('./modals/deposit-room-modal/deposit-room-modal.module').then( m => m.DepositRoomModalPageModule)
  },
  {
    path: 'scanner-popup',
    loadChildren: () => import('./modals/scanner-popup/scanner-popup.module').then( m => m.ScannerPopupPageModule)
  },
  {
    path: 'maintanence-tasks',
    loadChildren: () => import('./pages/maintanence-tasks/maintanence-tasks.module').then( m => m.MaintanenceTasksPageModule)
  },
  {
    path: 'maintenance-issue',
    loadChildren: () => import('./modals/maintenance-issue/maintenance-issue.module').then( m => m.MaintenanceIssuePageModule)
  },
  {
    path: 'confirm-room-availability',
    loadChildren: () => import('./modals/confirm-room-availability/confirm-room-availability.module').then( m => m.ConfirmRoomAvailabilityPageModule)
  },
  {
    path: 'tenant-dashboard',
    loadChildren: () => import('./pages/tenant-dashboard/tenant-dashboard.module').then( m => m.TenantDashboardPageModule)
  },
  {
    path: 'tenant-room-checklist',
    loadChildren: () => import('./pages/tenant-room-checklist/tenant-room-checklist.module').then( m => m.TenantRoomChecklistPageModule)
  },
  {
    path: 'reciept',
    loadChildren: () => import('./pages/reciept/reciept.module').then( m => m.RecieptPageModule)
  }
];
@NgModule({
  providers: [SimpleLoadingStrategy],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SimpleLoadingStrategy })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
