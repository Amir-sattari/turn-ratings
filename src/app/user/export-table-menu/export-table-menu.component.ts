import { Component } from '@angular/core';

@Component({
  selector: 'app-export-table-menu',
  templateUrl: './export-table-menu.component.html',
  styleUrl: './export-table-menu.component.scss'
})
export class ExportTableMenuComponent {
  public export: boolean = false;

  public getExport(): void
  {
    this.export = this.export == true ? false : true;
  }
}
