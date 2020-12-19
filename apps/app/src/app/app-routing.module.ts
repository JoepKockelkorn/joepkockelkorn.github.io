import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./home/home.module').then((m) => m.HomeModule),
        },
        { path: '**', redirectTo: '' },
      ],
      { enableTracing: true }
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
