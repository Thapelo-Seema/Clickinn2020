import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search-feed',
    loadChildren: () => import('./search-feed/search-feed.module').then( m => m.SearchFeedPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'landlord-products',
    loadChildren: () => import('./landlord-products/landlord-products.module').then( m => m.LandlordProductsPageModule)
  },
  {
    path: 'contact-details',
    loadChildren: () => import('./contact-details/contact-details.module').then( m => m.ContactDetailsPageModule)
  },
  {
    path: 'results-scanning',
    loadChildren: () => import('./results-scanning/results-scanning.module').then( m => m.ResultsScanningPageModule)
  },
  {
    path: 'results',
    loadChildren: () => import('./results/results.module').then( m => m.ResultsPageModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then( m => m.ListingPageModule)
  },
  {
    path: 'bursary-request',
    loadChildren: () => import('./bursary-request/bursary-request.module').then( m => m.BursaryRequestPageModule)
  },
  {
    path: 'free-sign-up',
    loadChildren: () => import('./free-sign-up/free-sign-up.module').then( m => m.FreeSignUpPageModule)
  },
  {
    path: 'placement-sign-up',
    loadChildren: () => import('./placement-sign-up/placement-sign-up.module').then( m => m.PlacementSignUpPageModule)
  },
  {
    path: 'tools-sign-up',
    loadChildren: () => import('./tools-sign-up/tools-sign-up.module').then( m => m.ToolsSignUpPageModule)
  },
  {
    path: 'management-sign-up',
    loadChildren: () => import('./management-sign-up/management-sign-up.module').then( m => m.ManagementSignUpPageModule)
  },
  {
    path: 'upload-listing',
    loadChildren: () => import('./upload-listing/upload-listing.module').then( m => m.UploadListingPageModule)
  },
  {
    path: 'landlord-home',
    loadChildren: () => import('./landlord-home/landlord-home.module').then( m => m.LandlordHomePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
