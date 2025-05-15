import {
  Component,
  type ElementRef,
  EventEmitter,
  HostListener,
  Input,
  type OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  imports: [CommonModule, FormsModule],
  templateUrl: './date-input.component.html',
  styleUrl: './date-input.component.css',
})
export class DateInputComponent {
    @Input() label = ""
  @Input() placeholder = "Selecione uma data"
  @Input() disabled = false
  @Input() required = false
  @Input() name = ""
  @Input() value = ""

  @Output() dateChange = new EventEmitter<string>()

  @ViewChild("calendarRef") calendarRef!: ElementRef

  isOpen = false
  selectedDate: Date | null = null
  currentMonth: number = new Date().getMonth()
  currentYear: number = new Date().getFullYear()
  displayValue = ""

  monthNames: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]

  dayNames: string[] = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
  calendarDays: any[] = []

  ngOnInit(): void {
    if (this.value) {
      this.selectedDate = new Date(this.value)
      this.updateDisplayValue()
    }
    this.buildCalendarDays()
  }

  @HostListener("document:mousedown", ["$event"])
  onClickOutside(event: MouseEvent) {
    if (this.isOpen && this.calendarRef && !this.calendarRef.nativeElement.contains(event.target)) {
      this.isOpen = false
    }
  }

  toggleCalendar(): void {
    if (!this.disabled) {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        this.buildCalendarDays()
      }
    }
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11
      this.currentYear--
    } else {
      this.currentMonth--
    }
    this.buildCalendarDays()
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0
      this.currentYear++
    } else {
      this.currentMonth++
    }
    this.buildCalendarDays()
  }

  handleDateSelect(day: number): void {
    this.selectedDate = new Date(this.currentYear, this.currentMonth, day)
    this.updateDisplayValue()
    this.isOpen = false
    this.emitDateChange()
  }

  clearDate(): void {
    this.selectedDate = null
    this.displayValue = ""
    this.isOpen = false
    this.emitDateChange()
  }

  private updateDisplayValue(): void {
    if (this.selectedDate) {
      this.displayValue = this.formatDate(this.selectedDate)
    } else {
      this.displayValue = ""
    }
  }

  private formatDate(date: Date): string {
    const day = date.getDate().toString().padStart(2, "0")
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  private emitDateChange(): void {
    const isoDate = this.selectedDate ? this.selectedDate.toISOString().split("T")[0] : ""
    this.dateChange.emit(isoDate)
  }

  private getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate()
  }

  private getFirstDayOfMonth(year: number, month: number): number {
    return new Date(year, month, 1).getDay()
  }

  private isSameDay(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    )
  }

  buildCalendarDays(): void {
    const daysInMonth = this.getDaysInMonth(this.currentYear, this.currentMonth)
    const firstDayOfMonth = this.getFirstDayOfMonth(this.currentYear, this.currentMonth)

    this.calendarDays = []

    // Add empty cells for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      this.calendarDays.push({ day: null, isToday: false, isSelected: false })
    }

    // Add days of the month
    const today = new Date()
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(this.currentYear, this.currentMonth, day)
      const isToday = this.isSameDay(date, today)
      const isSelected = this.selectedDate && this.isSameDay(date, this.selectedDate)

      this.calendarDays.push({ day, isToday, isSelected })
    }
  }
}

