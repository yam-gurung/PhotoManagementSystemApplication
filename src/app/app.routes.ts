import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ViewPhoto } from './viewphoto/viewphoto';
import { AddPhoto } from './addphoto/addphoto';
import { PhotoServiceReport } from './photoservicereport/photoservicereport';
import { EditPhoto } from './editphoto/editphoto';
import { DeletePhoto } from './deletephoto/deletephoto';
import { DownloadPhoto } from './downloadphoto/downloadphoto';

export const routes: Routes = [
    {path:'',component:Home},
    {path:'photos',component:Home},
    {path:'addphoto',component:AddPhoto},
    {path:'viewphoto',component:ViewPhoto},
    {path:'editphoto',component:EditPhoto},
    {path:'deletephoto',component:DeletePhoto},
    {path:'downloadphoto',component:DownloadPhoto},
    {path:'photoservicereport',component:PhotoServiceReport}
];
