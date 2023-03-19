module.exports = {
    purge: [
    './**/*.html',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
    extend: {
        backgroundImage: theme => ({
        'wave-pattern': "url('../img/wave-white.png')",
        'wave-pattern-dots': "url('../img/pattern-white-dots.png')",
        'pattern-characters-red': "url('../img/pattern-characters-red.png')",
        'character-mario': "url('../img/character-l.png')",
        'wave-pink': "url('../img/wave-pink.png')",
        'yellow-dots': "url('../img/pattern-yellow-dots.png')",
        }),
        screens:{ //modificar breakpoints actuales o crear un personalizado
        'xsm': '320px' //yo lo cree
        
        }
    }
    },
    variants:{
        extend:{},
    },
    plugins: [],
}
