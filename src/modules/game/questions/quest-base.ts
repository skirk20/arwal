import img1 from "../../../assets/antyradar.png"
import img2 from "../../../assets/co2.png"
import img3 from "../../../assets/3.png"
import img4 from "../../../assets/4.jpg"
import img5 from "../../../assets/5.jpg"
import img6 from "../../../assets/6.jpg"
import img7 from "../../../assets/book.png"
import img8 from "../../../assets/8.jpg"
import img9 from "../../../assets/9.jpg"
import img10 from "../../../assets/10.jpg"
import img11 from "../../../assets/11.jpg"
import img12 from "../../../assets/abs.png"
import img13 from "../../../assets/auta.png"
import img14 from "../../../assets/antyradar.png"
export interface IQuizQuestion {
    id: string,
    text: string,
    imgSrc?: string,
    description?: string,
    answers: {
        id: string,
        text: string,
        isCorrect?: boolean,
    }[]
};


export const QUESTIONS: IQuizQuestion[] = [
    {
        id: '1',
        text: 'Czym tak naprawdę jest ANTYRADAR RST?',
        imgSrc: img1,
        description: "Umiejętne korzystanie z ANTYRADARU RST to najskuteczniejszy sposób na ochronę kierowcy przed wszelkimi mandatami i punktami karnymi. Nie dość, że jest legalny, to jeszcze Policja zachęca do jego codziennego używania.",
        answers: [
            {
                id: '1',
                text: 'Urządzeniem informującym kierowcę o miejscu kontroli prędkości,',
            }, {
                id: '2',
                text: 'Urządzeniem zagłuszającym laserowy pomiar prędkości z fotoradarów,',
                
            }, {
                id: '3',
                text: 'Aktualnym Kodeksem Drogowym,',
                isCorrect: true
            }
        ]

    },
    {
        id: '2',
        text: 'Sporą część dzisiejszej trasy to droga ekspresowa. W Polsce są drogi ekspresowe jedno i dwujezdniowe. Jaki jest limit prędkości dla samochodu osobowego na jednojezdniowej drodze ekspresowej?',
        imgSrc: img13,
        description: "Na drogach ekspresowych, jednojezdniowych obowiązuje limit prędkości do 100 km/h. Na dwupasmowych wynosi on 120 km/h",
        answers: [{
            id: '1',
            text: '100',
            isCorrect: true
        }, {
            id: '2',
            text: '110'
        }, {
            id: '3',
            text: '120'
        }, {
            id: '4',
            text: '130',
            
        }]
    },
    {
        id: '3',
        text: 'Jedziecie po tej drodze. Mijacie ten znak z prawej strony. Jaka jest dopuszczalna prędkość na tej drodze, za tym znakiem?',
        imgSrc: img3,
        description: "poza obszarem zabudowanym, na drogach dwujezdniowych, dopuszczalna prędkość dla samochodu osobowego wynosi 100 km/h. Gdyby to była tylko jedna jezdnia to iimit prędkości wynosiłby 90 km/h.",
        answers: [{
            id: '1',
            text: '70'
        }, {
            id: '2',
            text: '90',
            
        }, {
            id: '3',
            text: '100',
            isCorrect: true,
        },{
            id: '4',
            text: '120'
        }]
    },
    {
        id: '4',
        text: 'Czy macie obowiązek bezwarunkowo zatrzymać pojazd przed linią złożoną z trójkątów?',
        imgSrc: img11,
        description: "Nie, ponieważ nie jest to linia bezwzględnego zatrzymania. Jest to oznakowanie nakazujące ustąpienia pierwszeństwa. Jeżeli nikt nie będzie jechał drogą z pierwszeństwem to nie musimy się tu zatrzymywać.",
        answers: [{
            id: '1',
            text: 'TAK'
        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    {
        id: '5',
        text: 'Czy na tej drodze zawsze macie obowiązek ustąpić pierwszeństwa pieszemu?',
        imgSrc: img10,
        description: "W strefie ruchu, występują drogi publiczne i przynajmniej jedna z dróg jest drogą wewnętrzną. Administrator sam ustala organizację ruchu na tym obszarze. Może więc uznać, że jedna droga jest drogą z pierwszeństwem, a inna podporządkowaną. W strefie ruchu pieszy będzie miał pierwszeństwo wyłącznie jeśli ruch będzie odbywał się na tych samych płaszczyznach, np. parkingi przed hipermarketami. W pytaniu pojawia się jednak zapytanie “czy zawsze?”. Oczywiście, że nie zawsze.",
        answers: [{
            id: '1',
            text: 'TAK'
        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    {
        id: '6',
        text: 'Czy w tej sytuacji macie prawo zatrzymać pojazd za znakiem w celu wysadzenia pasażera?',
        imgSrc: img6,
        description: "Pod znakiem B-36 “zakaz zatrzymywania się” umieszczona jest tabliczka T-25C, która jest odwołaniem znaku zakazu. Tabliczki T-25 mówią nam T-25A – początek zakazu wyrażonego znakiem, T-25B – kontynuacja zakazu wyrażonego znakiem, no i wspomniana T-25C odwołująca zakaz.",
        answers: [{
            id: '1',
            text: 'TAK',
            isCorrect: true
        }, {
            id: '2',
            text: 'NIE'
        },]
    },
    {
        id: '7',
        text: 'Skorzystajcie ponownie z antyradaru  RST. Odnajdźcie, który dział, rozdział, oddział, artykuł, punkt, określa zasady zachowania się kierującego pojazdem wobec pieszego wchodzącego na przejście dla pieszych?',
        imgSrc: img7,
        description: "Bardzo ważne by znać te zasady.",
        answers: [{
            id: '1',
            text: 'Dział I, rozdział 4, oddział 2, artykuł 34, punkt 3',
        }, {
            id: '2',
            text: 'Dział II, rozdział 3, oddział 7, artykuł 26, punkt 1',
            isCorrect: true
        },{
            id: '3',
            text: 'Dział II, rozdział 2, oddział 13, artykuł 1'
        },{
            id: '4',
            text: 'Dział I, rozdział 6, oddział 7, artykuł 23, punkt 1'
        },]
    },
    {
        id: '8',
        text: 'czy odległość 6 metrów między pojazdami, jadącymi z prędkością 40-45 km/h jest wystarczająca, aby w nagłej sytuacji drogowej nie doszło do kolizji?',
        imgSrc: img8,
        description: "Sygnalizować kierunkowskazem należy zamiar zmiany pasa ruchu i zamiar zmiany kierunku jazdy. Przepisy nie nakazują sygnalizowania nieznacznej zmiany toru jazdy, gdy na przykład delikatnie omijasz dziurę w nawierzchni jezdni.",
        answers: [{
            id: '1',
            text: 'NIE',
            isCorrect: true
        }, {
            id: '2',
            text: 'TAK',
        }]
    },
    {
        id: '9',
        text: 'Czy w tej sytuacji, podczas postoju uszkodzonego pojazdu poza obszarem zabudowanym, macie obowiązek umieścić ostrzegawczy trójkąt odblaskowy bezpośrednio za pojazdem lub na nim?',
        imgSrc: img9,
        description: "Tylko w obszarze zabudowanym należy umieszczać trójkąt bezpośrednio za pojazdem lub na nim. Kierujący pojazdem jest obowiązany sygnalizować postój pojazdu silnikowego lub przyczepy z powodu uszkodzenia lub wypadku poza obszarem zabudowanym, w razie postoju na jezdni w miejscu, w którym jest to zabronione, a na poboczu, jeżeli pojazd nie jest widoczny z dostatecznej odległości, W pozostałych sytuacjach należy sygnalizować.",
        answers: [{
            id: '1',
            text: 'TAK',

        }, {
            id: '2',
            text: 'NIE',
            isCorrect: true
        }]
    },
    
]





