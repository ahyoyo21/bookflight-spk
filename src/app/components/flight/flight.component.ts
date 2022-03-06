import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Flight } from '../flight/flight';
import { PageService } from 'src/app/share/page.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {
  flight !: Flight[]
  flightform !: FormGroup;
  startDate = new Date(Date.now())
  constructor(private fb:FormBuilder,private page:PageService  ) {
     this.flightform = this.fb.group({
      fullName: ['', Validators.minLength(5)],
      from: ['', Validators.required],
      to: ['', Validators.required],
      type: ['', Validators.required],
      departure: ['', Validators.required],
      arrival: ['', Validators.required],
      adults: ['', [Validators.required, Validators.max(5), Validators.pattern('[0-9]*$')]],
      children: ['', [Validators.required, Validators.max(3), Validators.pattern('[0-9]*$')]],
      infants: ['', [Validators.required, Validators.max(2), Validators.pattern('[0-9]*$')]]
    })
  }
  getPages(){
    this.flight = this.page.getPages()
  }
  ngOnInit(): void {
    this.getPages()
  }
  onSubmit(f:Flight): void{
    if(f.from == f.to) return alert('สถานที่เริ่มต้นและปลายทางตรงกัน')
    const yearDeparture = f.departure.getFullYear() + 543
    const yearArrival = f.arrival.getFullYear() + 543
    f.departure = new Date((f.departure.getMonth() + 1) + '/' + f.departure.getDate() + "/" + yearDeparture)
    f.arrival = new Date((f.arrival.getMonth() + 1) + '/' + f.arrival.getDate() + "/" + yearArrival)
    this.page.addFlight(f)
  }
}
