import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  @Input() isOpen: boolean = false;
  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() onSubmit = new EventEmitter<void>();

  closeModal() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  submitForm() {
    this.onSubmit.emit();
    this.closeModal();
  }
  
}