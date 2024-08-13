import { Component } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { interval } from "rxjs";

@Component({
  selector: "app-weather-content",
  standalone: true,
  template: `
    <div class="sky-condition">☀️</div>
    <div class="temperature">{{ temperature }}°C</div>
  `,
})
export class WeatherContentComponent {
  lastUpdateAt: Date = new Date();

  protected temperature = 21;

  #polling = interval(5000).pipe(takeUntilDestroyed());

  ngOnInit() {
    this.#polling.subscribe(() => (this.lastUpdateAt = new Date()));
  }
}
