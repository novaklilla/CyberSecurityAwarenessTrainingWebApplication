import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-training-materials',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './training-materials.component.html',
  styleUrl: './training-materials.component.css'
})
export class TrainingMaterialsComponent {

  showParentContent: boolean = false;  // To track whether the parent content should be shown

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.showParentContent = true;  // To track whether the parent content should be shown
  }

}
