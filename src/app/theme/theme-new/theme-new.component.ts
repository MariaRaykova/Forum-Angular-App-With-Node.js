import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-theme-new',
  templateUrl: './theme-new.component.html',
  styleUrls: ['./theme-new.component.css']
})
export class ThemeNewComponent implements OnInit {

  constructor(private themeService: ThemeService, private router: Router) { }

  ngOnInit(): void {
  }

  submitHandler(data: any): void{
    this.themeService.saveTheme(data)
    .subscribe({
      next: () => {
        this.router.navigate(['/theme']);
      }, 
      error: (err) => {
        console.error(err)
      }
    })
  }
}
