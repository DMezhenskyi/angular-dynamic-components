import { Component } from '@angular/core';

@Component({
  selector: 'app-widget',
  template: `
    <div class="widget-header">
      <div class="widget-title">Dummy Title</div>
      <div class="widget-sub-title">Dummy Description</div>
    </div>
    <div class="widget-content">
      <p class="no-content">No content...</p>
    </div>
  `,
})
export class WidgetComponent {
}
