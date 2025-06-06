import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Activity, Banknote, Landmark, LucideAngularModule } from 'lucide-angular';
import {
  Calendar,
  Camera,
  Edit,
  FileText,
  MoreHorizontal,
  Phone,
  ShieldCheck,
  Trash2,
  User,
  Users,
} from 'lucide-angular';

@Component({
  selector: 'app-service-payment-card',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './service-payment-card.component.html',
})
export class ServicePaymentCardComponent {
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
  readonly LandMark = Landmark;
  readonly Activity = Activity
  readonly Banknote = Banknote

  showOptions = false;

  // Inputs dinâmicos
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() abreviation: string = '';
  @Input() value: number = 0;
  @Input() status: boolean = true;
  @Input() updateat: string = '';
  @Input() isPayment: boolean = false;


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
