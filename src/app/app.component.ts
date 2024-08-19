import { Component, ComponentRef, ElementRef, inject, TemplateRef, viewChild, ViewContainerRef } from "@angular/core";
import { WidgetComponent } from "./widget/widget.component";
import { WeatherContentComponent } from "./widget/weather-content.component";
@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">Dynamic Components</h1>
    <ng-template #content>
      <app-weather-content />
    </ng-template>
    <main id="content">
      <ng-container #container></ng-container>
      <section class="toolbar">
        <button (click)="createComponent()" class="create">Create Component</button>
        <button (click)="destroyComponent()" class="destroy">Destroy Component</button>
      </section>
    </main>
  `,
  imports: [WeatherContentComponent],
})
export class AppComponent {
  vcr = viewChild('container', { read: ViewContainerRef });
  content = viewChild<TemplateRef<unknown>>('content');
  #componentRef?: ComponentRef<WidgetComponent>;
  createComponent() {
    this.vcr()?.clear();
    const contentView = this.vcr()?.createEmbeddedView(this.content()!)
    this.#componentRef = this.vcr()?.createComponent(WidgetComponent, {
      projectableNodes: [
        contentView?.rootNodes!
      ]
    })
    this.#componentRef?.setInput('title', 'Weather'); 
    this.#componentRef?.setInput('description', 'Currently in Vienna:');

    this.#componentRef?.instance.closed.subscribe(
      () => this.#componentRef?.destroy()
    )
  }
  destroyComponent() {
    this.vcr()?.clear();
  }
}
