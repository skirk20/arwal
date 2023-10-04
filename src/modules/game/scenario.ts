import { GameScenario, GAME_STEP_TYPE } from "./types";

export const SCENARIO: GameScenario = {
    startStep: '1.1',
    steps: [
        {
            id: '1.1',
            type: GAME_STEP_TYPE.GEO_STEP,
            position: {
                lat: 52.65654152276354,
                lng: 20.628665850188753
                
            },
            name: ['Punkt geo 1'],
            nextStep: '1.2'
        },
        {
            id: '1.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-1', //tekst 
            nextStep: '1.3'
        },
        {
            id: '1.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-2', //tekst
            nextStep: '1.4'
        },
        {
            id: '1.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-3', //quiz
            nextStep: '1.5'
        },
        {
            id: '1.5',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-4', //bezpieczny kierowca
            nextStep: '1.6'
        },
        {
            id: '1.6',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5', //tekst
            nextStep: '1.7'
        },
        {
            id: '1.7',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-5_1', //tekst
            nextStep: '2.1'
        },



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
            pageId: 'page-6', //quiz
            nextStep: '2.3'
        },
        {
            id: '2.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-7', //gotowi na wszystko
            nextStep: '2.4'
        },
        {
            id: '2.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-8', //tekst
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
            pageId:"page-9",//tekst
            nextStep:"3.3"
        },
        {
            id: '3.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-10', //quiz
            nextStep: '3.4'
        },
        {
            id: '3.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-11', //agenci specjalni
            nextStep: '4.1'
        },
        {
            id: '3.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-12', //tekst
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
            pageId: 'page-13', //quiz
            nextStep: '4.3'
        },
        {
            id: '4.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-14', //kto ważniejszy
            nextStep: '5.1'
        },
        {
            id: '4.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-15', //tekst
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
            pageId: 'page-16',//tekst
            nextStep: '5.3'
        },
        {
            id: '5.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-17', //zarządzanie kryzysowe
            nextStep: '5.4'
        },
        {
            id: '5.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-18', //tekst
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
            id: '6.2',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-19', //tekst
            nextStep: '6.3' 
        },
        {
            id: '6.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-20', //quiz
            nextStep: '6.4'
        },
        {
            id: '6.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-21', //zepsute koło
            nextStep: '6.5'
        },
        {
            id: '6.5',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-22', //tekst
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
            pageId: 'page-23', //tekst
            nextStep: '7.3'
        },
        {
            id: '7.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-24', //quiz
            nextStep: '7.4'
        },
        {
            id: '7.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-25', //videolekcja
            nextStep: '7.5'
        },
        {
            id: '7.5',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-26', //quiz
            nextStep: '7.6'
        },
        {
            id: '7.6',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-27', //tekst
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
            pageId: 'page-28', //tekst
            nextStep: '8.3'
        },
        {
            id: '8.3',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-29', // quiz
            nextStep: '8.4'
        },
        {
            id: '8.4',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-30', //trening spostrzegawczości
            nextStep: '8.5'
        },
        {
            id: '8.5',
            type: GAME_STEP_TYPE.PAGE,
            pageId: 'page-31', // tekst
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