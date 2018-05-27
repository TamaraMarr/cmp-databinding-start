import {
    Component,
    OnInit,
    OnChanges,
    Input,
    SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges {
    @Input('serverElement') element: { type: string, name: string, content: string };
    @Input() name: string;

    constructor() {
        console.log('constructor called');
    }
    
    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges called');
        console.log(changes);
    }

    ngOnInit() {
        console.log('ngOnInit called');
    }
}
