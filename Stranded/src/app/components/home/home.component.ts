import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StationListService } from '../../shared/services/station-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    mapStyle = [
    {
        'featureType': 'all',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [
            {
                'color': '#7c93a3'
            },
            {
                'lightness': '-10'
            }
        ]
    },
    {
        'featureType': 'administrative.country',
        'elementType': 'geometry',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'administrative.country',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'color': '#a0a4a5'
            }
        ]
    },
    {
        'featureType': 'administrative.province',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'color': '#62838e'
            }
        ]
    },
    {
        'featureType': 'administrative.locality',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'administrative.neighborhood',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'administrative.land_parcel',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'landscape',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#dde3e3'
            }
        ]
    },
    {
        'featureType': 'landscape.man_made',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'color': '#3f4a51'
            },
            {
                'weight': '0.30'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'simplified'
            }
        ]
    },
    {
        'featureType': 'poi',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.attraction',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'poi.attraction',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.business',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.government',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.park',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'poi.park',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.place_of_worship',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.school',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'poi.sports_complex',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'all',
        'stylers': [
            {
                'saturation': '-100'
            },
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'road',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#bbcacf'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'lightness': '0'
            },
            {
                'color': '#bbcacf'
            },
            {
                'weight': '0.50'
            }
        ]
    },
    {
        'featureType': 'road.highway',
        'elementType': 'labels.text',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#ffffff'
            }
        ]
    },
    {
        'featureType': 'road.highway.controlled_access',
        'elementType': 'geometry.stroke',
        'stylers': [
            {
                'color': '#a9b4b8'
            }
        ]
    },
    {
        'featureType': 'road.arterial',
        'elementType': 'labels.icon',
        'stylers': [
            {
                'invert_lightness': true
            },
            {
                'saturation': '-7'
            },
            {
                'lightness': '3'
            },
            {
                'gamma': '1.80'
            },
            {
                'weight': '0.01'
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'all',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'transit.line',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'visibility': 'on'
            }
        ]
    },
    {
        'featureType': 'transit.station',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'geometry.fill',
        'stylers': [
            {
                'color': '#a3c7df'
            }
        ]
    },
    {
        'featureType': 'water',
        'elementType': 'labels',
        'stylers': [
            {
                'visibility': 'off'
            }
        ]
    }
    ];

    stations: string[];
    suggestions = [];
    input: string;
    lat = 52.16611099;
    lng = 4.481666565;

    @Output()
    public stationTo = new EventEmitter<string>();

    constructor(private stationListService: StationListService) {
    }

     ngOnInit() {
        this.stationListService.get().subscribe(res => {
        this.stations = res;
      });
    }

    search(event) {
        this.suggestions = [];
        length = this.input.length;
        for (let i = 0; i < this.stations.length; i++) {
            if (this.input.toLowerCase() === this.stations[i].toLowerCase().slice(0, length)) {
                console.log(this.input);
                if (this.suggestions.length < 8) {
                    this.suggestions.push(this.stations[i]);
                }
            }
        }
        if (length === 0) {
            this.suggestions = [];
        }
        if (this.stations.includes(this.input)) {
            this.stationTo.emit(this.input);
        }
    }
}
