export interface Activity {
    name: string,
    image: string,
    description: string,
    activities: Array<Activities>
}

export interface Activities {
    name: string
}