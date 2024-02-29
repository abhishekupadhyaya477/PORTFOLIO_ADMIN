import { NgModule } from "@angular/core";
import { PortfolioComponent } from "./portfolio.component";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { PortfolioService } from "./portfolio.service";

@NgModule({
    declarations: [
        
      ],
      imports: [
        CommonModule,
        // HttpClientModule,
        MatDialogModule
      ],
      providers: [
        // PortfolioService
      ] 
})
export class PortfolioModule {}