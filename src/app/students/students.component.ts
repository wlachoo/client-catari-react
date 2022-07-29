import { Component, OnInit } from '@angular/core';
import { StudentsService, Students } from '../students.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Students[] = [];
  average: String="";
  closeResult = '';
  grades = 0.0;

  constructor(
    public rest: StudentsService,
    private router: Router,
    private modalService: NgbModal
    ) { }


  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.rest.getAll().subscribe((resp: any) => {
      this.students = resp.students;
      this.average = resp.promedio;
      console.log(this.students);
    });
  }

  open(content: any, grades: any) {
    this.grades=grades;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
