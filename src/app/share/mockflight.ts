import { Flight } from '../components/flight/flight'

export class Mockflight {
  public static mockFlight: Flight[] =
  [
    {
      fullName: "Supakorn Jaisathan",
      from: "Thailand",
      to: "Germany",
      type: "Return",
      departure: new Date('03-04-2565'),
      arrival: new Date('03-04-2565'),
      adults: 2,
      children: 1,
      infants: 0,
    }
  ]

}
