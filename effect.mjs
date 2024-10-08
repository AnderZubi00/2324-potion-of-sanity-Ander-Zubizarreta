class Effect {

    static positive_effect_tokens =  ["Fortify", "Resist", "Cure", "Restore", "Regenerate", "Invisibility", "Waterbreathing"];

    constructor(name,type) {
        this.name = name;
        this.type = type;
    }

    static from(name){
        return new Effect(
            name,
            Effect.some(token => name.includes(token)) ? 'beneficial' : 'harmful'
        );
    }
}

export default Effect;