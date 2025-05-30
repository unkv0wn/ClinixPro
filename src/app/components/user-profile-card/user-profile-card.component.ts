import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Calendar,
  Camera,
  Edit,
  FileText,
  LucideAngularModule,
  MoreHorizontal,
  Phone,
  ShieldCheck,
  Trash2,
  User,
  Users,
} from 'lucide-angular';
import { ChangeStatusProfileComponent } from '../modals/change-status-profile/change-status-profile.component';

@Component({
  selector: 'user-profile-card',
  imports: [LucideAngularModule, CommonModule, ChangeStatusProfileComponent],
  templateUrl: './user-profile-card.component.html',
})
export class CardPatientComponent {
  readonly Users = Users;
  readonly Camera = Camera;
  readonly User = User;
  readonly Phone = Phone;
  readonly FileText = FileText;
  readonly ShieldCheck = ShieldCheck;
  readonly Calendar = Calendar;
  readonly Edit = Edit;
  readonly Trash2 = Trash2;
  readonly MoreHorizontal = MoreHorizontal;

  showOptions = false;
  isModal: boolean = false;

  showModal() {
    this.isModal = !this.isModal;
  }

  // Inputs dinâmicos
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() cpf: string = '';
  @Input() crm: string = '';
  @Input() phone: string = '';
  @Input() status: boolean = true;
  @Input() updateat: string = '';
  @Input() isMedical: boolean = false;
  @Input() isPatient: boolean = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  EditFunction() {
    console.log('Edit Function Called');
    this.showOptions = !this.showOptions;
  }

  DeleteFunction() {
    console.log('Delete Function Called');
    this.showOptions = !this.showOptions;
  }

  ScheduleFunction() {
    console.log('Schedule Function Called');
    this.showOptions = !this.showOptions;
  }

  ChangePictureFunction() {
    console.log('Change Picture Function Called');
  }
}
