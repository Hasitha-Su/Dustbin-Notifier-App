import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Dustbinervice } from '../dustbin.service';
import { IDustbin } from '../dustbin';
import { Dustbin } from '../dustbin';
import Swal from 'sweetalert2'
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'dustbin-list',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class DustbinViewComponent implements OnInit  {

  deleteMessage = false;
  closeResult = '';
  public dusbinList: IDustbin[] = [];
  @Input() dustbin: Dustbin = { name: '', status: 'EMPTY', location: '' };
  @Input() dustbinUpdateInput: IDustbin = { _id: '', name: '', status: '', location: '' }

  constructor(private _dustbinService: Dustbinervice, private modalService: NgbModal, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    //get destbin details
    this._dustbinService.getAllDustbins()
      .subscribe(data => {
        this.dusbinList = data
        console.log(this.dusbinList)
      })
  }

  //set data for update
  getUpdateData(dustbin: IDustbin) {
    this.dustbinUpdateInput = dustbin
  }

  //update Dustbin
  onUpdateClick(dustbinUpdateInput: IDustbin) {
    this._dustbinService.updateDustbin(dustbinUpdateInput).subscribe(data => {
      console.log(data)

      Swal.fire(
        'Done',
        'Dustbin Updated Successfully',
        'success'
      )

      this.dustbinUpdateInput = { _id: '', name: '', status: '', location: '' }

      this._dustbinService.getAllDustbins()
        .subscribe(data => {
          this.dusbinList = data
          console.log(this.dusbinList)
        })
      this.modalService.dismissAll();
    }, (error) => {
      console.log(error)
      Swal.fire(
        'Update Failed',
        'Error Occurred..!',
        'error'
      )
    }
    );
  }

  // open(content)
  addDustbin(dustbin: Dustbin) {
    this._dustbinService.addDustbin(dustbin).subscribe(data => {
      console.log(data)

      Swal.fire(
        'Done',
        'Dustbin Added Successfully',
        'success'
      )

      this._dustbinService.getAllDustbins()
        .subscribe(data => {
          this.dusbinList = data
          console.log(this.dusbinList)
        })

      this.dustbin = { name: '', status: 'EMPTY', location: '' };
      this.modalService.dismissAll();


    }, (error) => {
      console.log(error)
      Swal.fire(
        'Failed',
        'Error Occurred..!',
        'error'
      )
    }
    );
  }

  //delete dustbin
  deleteDustbin(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.isConfirmed) {
        this._dustbinService.deleteDustbin(id).subscribe(data => {
          console.log(data)

          Swal.fire(
            'Deleted!',
            'Dustbin been deleted.',
            'success'
          )

          this._dustbinService.getAllDustbins()
            .subscribe(data => {
              this.dusbinList = data
              console.log(this.dusbinList)
            })
        },
          (error) => {
            console.log(error)
            Swal.fire(
              'Delete Failed',
              'Error Occurred..!',
              'error'
            )
          }
        );
      }
    })
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
