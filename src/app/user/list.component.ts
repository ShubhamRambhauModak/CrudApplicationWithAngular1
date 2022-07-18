// import { Component, OnInit } from '@angular/core';
// import { first } from 'rxjs/operators';

// import { AccountService } from '@app/_services/account.service';
// import { User } from '@app/_models/user';

// @Component({ templateUrl: 'list.component.html' })

// export class ListComponent implements OnInit {
//     users = null;
//     Employees: User[] = [];

//     constructor(private accountService: AccountService) {}

//     ngOnInit() {
//         this.getAllEmp();
//         displayedColumns: String[] = ['id', 'firstname', 'lastname', 'empId'];
//         dataSource = ELEMENT_DATA;
//     }

//     getAllEmp()
//     {
//         debugger;
//         const Emp : User = {
//             id : '1',
//             userfirstname: 'qwde3',
//             password: 'qsde43',
//             firstfirstname: 'Shubham',
//             lastfirstname: 'Modak',
//           }

//           this.Employees.push(Emp);
//     }

//     deleteUser(id: string) {
//         const user = this.users.find(x => x.id === id);
//         user.isDeleting = true;
//         this.accountService.delete(id)
//             .pipe(first())
//             .subscribe(() => {
//                 this.users = this.users.filter(x => x.id !== id) 
//             });
//     }
// }


import { getLocaleCurrencyCode } from '@angular/common';
import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { PeriodicElement } from '@app/_models/PeriodicElement';
import { AccountService } from '@app/_services/account.service';


const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, firstname: 'Hydrogen', lastname: "1.0079", empId: 'H'},
  {id: 2, firstname: 'Helium', lastname: "4.0026", empId: 'He'},
  {id: 3, firstname: 'Lithium', lastname: "6.941", empId: 'Li'},
  {id: 4, firstname: 'Beryllium', lastname: "9.0122", empId: 'Be'},
  {id: 5, firstname: 'Boron', lastname: "10.811", empId: 'B'},
  {id: 6, firstname: 'Carbon', lastname: "12.0107", empId: 'C'},
  {id: 7, firstname: 'Nitrogen', lastname: "14.0067", empId: 'N'},
  {id: 8, firstname: 'Oxygen', lastname: "15.9994", empId: 'O'},
  {id: 9, firstname: 'Fluorine', lastname: "18.9984", empId: 'F'},
  {id: 10, firstname: 'Neon', lastname:" 20.1797", empId: 'Ne'},
];

/**
 * @title Basic use of `<table mat-table>`
 */

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.css'],
  templateUrl: './list.component.html',
})

export class ListComponent {

  constructor(
    public accountService: AccountService,
    )
  {
  }
  
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'empId', "action"];
  dataSource = this.accountService.getAll();


  @ViewChild(MatTable) table: MatTable<PeriodicElement>;

  editrow(row)
  {
    debugger;

  }

  removeData(row) {
    debugger;
    this.dataSource.splice(row.id-1, 1);
    this.table.renderRows();
  }
}