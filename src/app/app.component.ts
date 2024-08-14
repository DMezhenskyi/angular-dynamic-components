import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  standalone: true,
  template: `
    <img class="logo" src="./logo.svg" alt="Decoded Frontend" />
    <h1 class="page-title">Dynamic Components</h1>
    
    <main id="content">
      <section class="toolbar">
        <button (click)="createComponent()" class="create">Create Component</button>
        <button (click)="destroyComponent()" class="destroy">Destroy Component</button>
      </section>
    </main>
  `,
})
export class AppComponent {
  createComponent() {}
  destroyComponent() {}
}
