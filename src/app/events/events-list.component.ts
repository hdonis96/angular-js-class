import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service';
import { ToastrService } from './shared/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/index'

declare let toastr

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>`,
    styles: [`
        .well div { color: red }
    
    `]
})

export class EventsListComponent implements OnInit {
    events:IEvent[]
    constructor(private eventService: EventService, private toastr: ToastrService, private route:ActivatedRoute) {
      
    }
    ngOnInit() {
     this.events = this.route.snapshot.data['events']
    }
    handleThumbnailClick(eventName) {
      console.log(eventName)
      this.toastr.success(eventName)
    }
}