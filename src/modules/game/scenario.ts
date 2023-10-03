import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '2.1',
    steps: [
        {
            id: '2.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.65654152276354,
                lng: 20.628665850188753
                
            },
            name: ['Punkt geo 1'],
            nextStep: '2.2'
        },
        {
            id: '2.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2', //quiz
            nextStep: '2.3'
        },
        {
            id: '2.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-21', //trening spostrzegawczości
            nextStep: '3.1'
        },
        {
            id:'3.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 51.02386,
                lng: 16.9263
            },
            name: ["Punkt geo 2"],
            nextStep: '3.2'
        },
        {
            id:"3.2",
            type:GAME_STEP_TYPE.PAGE,
            pageId:"page-1",//wstęp
            nextStep:"3.3"
        },
        {
            id: '3.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3', //quiz
            nextStep: '3.4'
        },
        {
            id: '3.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-13', //agenci specjalni
            nextStep: '4.1'
        },
        {
            id:'4.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat:51.05019, 
                lng: 17.02108
            },
            name: ["Punkt geo 3"],
            nextStep: '4.2'
        },
        {
            id: '4.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-8', //quiz
            nextStep: '4.3'
        },
        {
            id: '4.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5', //kto ważniejszy
            nextStep: '5.1'
        },
        {
            id:'5.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 51.0155,
                lng: 16.9408
            },
            name: ["Punkt geo 4"],
            nextStep: '5.2'
        },
        {
            id: '5.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-10',//quiz
            nextStep: '5.3'
        },
        {
            id: '5.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-23', //zarządzanie kryzysowe
            nextStep: '6.1'
        },
        {
            id:'6.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 51.01866, 
                lng: 16.91966
            },
            name: ["Punkt geo 5"],
            nextStep: '6.2'
        },
        {
            id: '6.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-20', //wstęp
            nextStep: '6.4' 
        },
        {
            id: '6.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-12', //quiz
            nextStep: '6.4'
        },
        {
            id: '6.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-4', //zepsute koło
            nextStep: '7.1'
        },
        {
            id:'7.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.9828,
                lng: 17.00291
            },
            name: ["Punkt geo 6"],
            nextStep: '7.2'
        },
        {
            id: '7.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-14', //quiz
            nextStep: '7.3'
        },
        {
            id: '7.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11', //gotowi na wszystko
            nextStep: '8.1'
        },
        {
            id:'8.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 50.99836,
                lng: 17.00497
            },
            name: ["Punkt geo 7"],
            nextStep: '8.2'
        },
        {
            id: '8.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-16', //quiz
            nextStep: '8.3'
        },
        {
            id: '8.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-6', // '???
            nextStep: '9.1'
        },
        {
            id:'9.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 51.01147, 
                lng: 16.95661
            },
            name: ["Punkt geo 8"],
            nextStep: '9.2'
        },
        {
            id: '9.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-18', //quiz
            nextStep: '9.3'
        },
        {
            id: '9.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5', // '???
            nextStep: 'summary-page'
        },
        {
            id: 'summary-page',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'summary-page',
            nextStep: null
        },
    ]
}


//poprawki

//zmiana przycisków spróbuj jeszcze raz na bardziej debiloodporne 
//sprawdzić punkty na mapie
//