var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1Ijoid2FubmkiLCJhIjoiY2t1aDFveXV1MDluMTJ3bjZuMnN6bmlyZiJ9.us3j5AZ90THiNLtKHqhNGQ',
    showMarkers: true,
    markerColor: '#3FB1CA',
    theme: 'dark',
    use3dTerrain: false,
    title: 'The Story of my life in Nov 2021',
    subtitle: 'A descriptive and slow moving narrative of life in Edinburgh, Scotland',
    byline: 'By Jo Malo',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'San Fran - I want the Stafford St Flat',
            image: 'target.svg',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            location: {
                center: [-122.418398, 37.759483],
                zoom: 8.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Edinburgh - I want another pet',
            image: 'target.svg',
            description: 'Maybe the pet can come from over here.',
            location: {
                center: [-3.19410, 55.95204],
                zoom: 8.5,
                pitch: 40,
                bearing: -10.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
