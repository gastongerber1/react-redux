import { createStore } from 'redux';

const initialState = {
    jugadores: [{
        id: 1,
        nombre: "Lionel Messi ",
        foto: "https://fmdataba.com/images/p2/620197.png"
    },
    {
        id: 2,
        nombre: "Paulo Dybala",
        foto: "https://fmdataba.com/images/p2/620199.png" 
    },
    {
        id: 3,
        nombre: "Ángel Di María",
        foto: "https://fmdataba.com/images/p2/620200.png" 
    },
    {
        id: 4,
        nombre: "Lautaro Martínez",
        foto: "https://fmdataba.com/images/p2/620201.png" 
    },
    {
        id: 5,
        nombre: "Alejandro Gómez",
        foto: "https://fmdataba.com/images/p2/620204.png" 
    },
    {
        id: 6,
        nombre: "Ángel Correa",
        foto: "https://fmdataba.com/images/p2/620205.png" 
    },
    {
        id: 7,
        nombre: "Joaquín Correa",
        foto: "https://fmdataba.com/images/p2/620207.png" 
    },
    {
        id: 8,
        nombre: "Lucas Ocampos",
        foto: "https://fmdataba.com/images/p2/620209.png" 
    },
    {
        id: 9,
        nombre: "Leandro Paredes",
        foto: "https://fmdataba.com/images/p2/620210.png" 
    },
    {
        id: 10,
        nombre: "Ángel Correa",
        foto: "https://fmdataba.com/images/p2/620205.png" 
    },
    {
        id: 11,
        nombre: "Nicolás Tagliafico",
        foto: "https://fmdataba.com/images/p2/620206.png" 
    },
    {
        id: 12,
        nombre: "Nicolás Otamendi",
        foto: "https://fmdataba.com/images/p2/620216.png" 
    },
    {
        id: 13,
        nombre: "Gerónimo Rulli",
        foto: "https://fmdataba.com/images/p2/620220.png" 
    },
    {
        id: 14,
        nombre: "Cristian Romero",
        foto: "https://fmdataba.com/images/p2/620232.png" 
    },
    {
        id: 15,
        nombre: "Rodrigo De Paul",
        foto: "https://fmdataba.com/images/p2/620213.png" 
    },
    {
        id: 16,
        nombre: "Giovani Lo Celso",
        foto: "https://fmdataba.com/images/p2/620211.png" 
    },
    {
        id: 17,
        nombre: "Marcos Acuña",
        foto: "https://fmdataba.com/images/p2/620214.png" 
    },
    {
        id: 18,
        nombre: "Franco Armani",
        foto: "https://fmdataba.com/images/p2/620225.png" 
    },
    {
        id: 19,
        nombre: "Emiliano Martínez",
        foto: "https://fmdataba.com/images/p2/620238.png" 
    },
    {
        id: 20,
        nombre: "Juan Foyth",
        foto: "https://fmdataba.com/images/p2/620302.png" 
    },
],
    titulares: [],
    suplentes: []
}


const reducerEntrenador = (state = initialState, action) =>{
    if (action.type === "AGREGAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if (action.type === "AGREGAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }
    if(action.type === "QUITAR_TITULAR"){
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    if(action.type === "QUITAR_SUPLENTE"){
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }

    return state;
}

export default createStore(reducerEntrenador)