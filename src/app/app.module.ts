import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/Router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { FamilyComponent } from './nuclearfamily/family/family.component';
import { FatherComponent } from './nuclearfamily/father/father.component';
import { MotherComponent } from './nuclearfamily/mother/mother.component';
import { SonComponent } from './nuclearfamily/son/son.component';
import { DaughterComponent } from './nuclearfamily/daughter/daughter.component';
import { ReviewComponent } from './assignment/allcomponents/review/review.component';
import { TitleComponent } from './assignment/allcomponents/title/title.component';
import { ThumbnailComponent } from './assignment/allcomponents/thumbnail/thumbnail.component';
import { DescriptionComponent } from './assignment/allcomponents/description/description.component';
import { DirectiveComponent } from './super-html/directive/directive.component';
import { PipeComponent } from './super-html/pipe/pipe.component';
import { BadrouteComponent } from './super-html/badroute/badroute.component';
import { ConsumeparentComponent } from './consume/consumeparent/consumeparent.component';
import { Consumechild1Component } from './consume/consumechild1/consumechild1.component';
import { Consumechild2Component } from './consume/consumechild2/consumechild2.component';
import { ChildComponent } from './consume/child/child.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateformComponent } from './Forms/templateform/templateform.component';
import { ReactiveformComponent } from './Forms/reactiveform/reactiveform.component';
import { AnimationComponent } from './animate/animation/animation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestapiComponent } from './services/restapi/restapi.component';
import { RemoteComponent } from './restapi/remote/remote.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    FamilyComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    ReviewComponent,
    TitleComponent,
    ThumbnailComponent,
    DescriptionComponent,
    DirectiveComponent,
    PipeComponent,
    BadrouteComponent,
    ConsumeparentComponent,
    Consumechild1Component,
    Consumechild2Component,
    ChildComponent,



    TemplateformComponent,
    ReactiveformComponent,
    AnimationComponent,
    RestapiComponent,
    RemoteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'family',
        pathMatch: 'full'
      },
      {
        path: 'family',
        component: FamilyComponent,
        children: [
          {
            path: '',
            redirectTo: 'father',
            pathMatch: 'full'
          },
          {
            path: 'father',
            component: FatherComponent
          },
          {
            path: 'mother',
            component: MotherComponent
          },
          {
            path: 'daughter',
            component: DaughterComponent
          },
          {
            path: 'son',
            component: SonComponent
          }
        ]
      },
      {
        path: 'review',
        component: ReviewComponent
      },
      {
        path: 'directive',
        component: DirectiveComponent
      },
      {
        path: 'pipe',
        component: PipeComponent
      },
      {
        path: 'consume',
        component: ConsumeparentComponent,
        children: [
          {
            path: 'child1',
            component: Consumechild1Component

          },
          {
            path: 'child2',
            component: Consumechild2Component

          }
        ]
      },
      {
        path: 'template',
        component: TemplateformComponent
      },
      {
        path: 'reactive',
        component: ReactiveformComponent
      },
      {
        path: 'animate',
        component: AnimationComponent
      },
      {
        path: 'remote',
        component: RemoteComponent
      },
      {
        path: '**',
        component: BadrouteComponent
      }
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
