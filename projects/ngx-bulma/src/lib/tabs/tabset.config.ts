import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsetConfig {
  /** provides default navigation context class: 'tabs' or 'pills' */
  type = 'tabs';
}
