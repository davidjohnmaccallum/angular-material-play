# Angular Material Play

[![Netlify Status](https://api.netlify.com/api/v1/badges/917b8dc6-0585-4a64-a5fa-14a9ac17d7ae/deploy-status)](https://app.netlify.com/sites/angular-material-play/deploys)

I am learning [Angular Material](https://material.angular.io/). Take a look https://angular-material-play.netlify.com.

## Getting Started

First install the packages.

```sh
ng add @angular/material
npm i -s @angular/flex-layout:8.0.0-beta.27 @angular/cdk
```

Then import them.

Copy src/app/modules/material.module.ts to your project.

Then modify app.module.ts

```typescript
...
import { MaterialModule } from './modules/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
...
@NgModule({
  ...
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
```

## Troubleshooting

### TS1086: An accessor cannot be declared in an ambient context.

This is a version mismatch between Angular and FlexLayout. Be sure to install @angular/flex-layout:8.0.0-beta.27.
