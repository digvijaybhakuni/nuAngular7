import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ConfirmationService} from 'primeng/primeng';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

const importedModule = [ScrollingModule, TableModule, ButtonModule, OverlayPanelModule, SplitButtonModule];
const exportedModule = [...importedModule];

@NgModule({imports: importedModule, exports: exportedModule})
export class PrimeNgModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: PrimeNgModule, providers: [ConfirmationService]};
    }
}
