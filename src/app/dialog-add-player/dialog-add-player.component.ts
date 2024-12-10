import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms'; 
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; 

@Component({
  selector: 'app-dialog-add-player',
  imports: [
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  templateUrl: './dialog-add-player.component.html',
  styleUrl: './dialog-add-player.component.scss'
})
export class DialogAddPlayerComponent {
  name: string = '';
  
  constructor(
    public dialogRef: MatDialogRef<DialogAddPlayerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

