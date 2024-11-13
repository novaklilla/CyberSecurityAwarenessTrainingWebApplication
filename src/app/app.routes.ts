import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ResearchComponent } from './pages/research/research.component';
import { TrainingMaterialsComponent } from './pages/training-materials/training-materials.component';
import { SubMenuLayoutComponent } from './pages/sub-menu-layout/sub-menu-layout.component';
import { MaterialIntroductionComponent } from './pages/material-introduction/material-introduction.component';
import { MaterialFundamentalsComponent } from './pages/material-fundamentals/material-fundamentals.component';
import { MaterialThreatsComponent } from './pages/material-threats/material-threats.component';
import { MaterialWorkEnvironmentComponent } from './pages/material-work-environment/material-work-environment.component';
import { MaterialSafeInternetEmailComponent } from './pages/material-safe-internet-email/material-safe-internet-email.component';
import { MaterialMobilDevicesComponent } from './pages/material-mobil-devices/material-mobil-devices.component';
import { MaterialSummaryComponent } from './pages/material-summary/material-summary.component';

export const routes: Routes = [

    {
        path:'',
        component:SubMenuLayoutComponent,
        children:[
            {
                path:'training-materials',
                component:TrainingMaterialsComponent,
                title: 'Oktatási Anyag',
                children:[
                    {
                        path: 'introduction',
                        component: MaterialIntroductionComponent,
                        title: 'Bevezetés'
                    },
                    {
                        path: 'fundamentals',
                        component: MaterialFundamentalsComponent,
                        title: 'Alapvető biztonsági fogalmak',
                    },
                    {
                        path: 'threats',
                        component: MaterialThreatsComponent,
                        title: 'Veszélyforrások és fenyegetések',
                    },
                    {
                        path:'work-environment',
                        component: MaterialWorkEnvironmentComponent,
                        title: 'Munkakörnyezet biztonsága',
                    },
                    {
                        path: 'safe-internet-and-email',
                        component: MaterialSafeInternetEmailComponent,
                        title: 'Biztonságos internet- és e-mail használat',
                    },
                    {
                        path: 'mobile-devices',
                        component: MaterialMobilDevicesComponent,
                        title: 'Mobil eszközök biztonsága',
                    },
                    {
                        path: 'summary',
                        component: MaterialSummaryComponent,
                        title: 'Befejezés',
                    },
                ]
            },
            {
                path:'research',
                component:ResearchComponent,
                title: 'Kutatásról'
            },
            {
                path:'about',
                component:AboutComponent,
                title: 'Rólam'
            }
        ]
    }
];
