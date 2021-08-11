export interface IDustbin {
    _id: string
    name: string
    status: string
    location: string
}

export class Dustbin {
    name: string
    status: string
    location: string

    constructor( name: string, status: string, location: string) {  
        this.name = name
        this.status = status
        this.location = location
    }

}
