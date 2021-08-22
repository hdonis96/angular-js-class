import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template: `
    <h1></h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create]</h3>
        <br>
        <br>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="buton" class="btn btn-default" (click)="cancel()">Cancel</button>
    <div></div>
    `
})
export class CreateEventComponent {
    isDirty:boolean = true
    constructor(private router: Router) {

    }
    cancel() {
        this.router.navigate(['/events'])
    }
}