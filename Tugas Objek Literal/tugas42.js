var motoGP = [
    {
        circuit : 'Losail',
        location : 'Qatar',
        winner : {
            firstName : 'Andrea',
            lastName : 'Dovizioso',
            country : 'Italy'
        }
    },
    {
        circuit : 'Autodromo',
        location : 'Argentine',
        winner : {
            firstName : 'Cal',
            lastName : 'Crutchlow',
            country : 'UK'
        }
    },
    {
        circuit : 'De Jerez',
        location : 'Spain',
        winner : {
            firstName : 'Valentino',
            lastName : 'Rossi',
            country : 'Italy'
        }
    },
    {
        circuit : 'Mugello',
        location : 'Italy',
        winner : {
            firstName : 'Andrea',
            lastName : 'Dovizioso',
            country : 'Italy'
        }
    }
];

let result = {};


for (let i = 0; i < motoGP.length; i++) {
    let race = motoGP[i];
    let winner = race.winner;
    let country = winner.country;

    
    if (!result[country]) {
        result[country] = [];
    }

    
    result[country].push({
        circuit: race.circuit,
        location: race.location,
        winner: {
            firstName: winner.firstName,
            lastName: winner.lastName
        }
    });
}

console.log(result);